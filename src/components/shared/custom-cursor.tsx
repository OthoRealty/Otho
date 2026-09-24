'use client';

import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => {
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) scale(0.85)`;
      }
    };

    const onMouseUp = () => {
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) scale(${isHovered ? 2.2 : 1})`;
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth follower interpolation loop
    const animate = () => {
      const speed = 0.18;
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;

      if (followerRef.current) {
        const scale = isHovered ? (hoverText ? 3.5 : 2) : 1;
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) scale(${scale})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    // Listen for hover on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor');
        setHoverText(customText || '');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousemove', handleElementHover, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible, isHovered, hoverText]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Precision Core Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-accent rounded-full transition-transform ease-out pointer-events-none"
      />

      {/* Fluid Outer Ring / Morphing Capsule */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-accent/40 pointer-events-none flex items-center justify-center transition-colors duration-200 ${
          isHovered
            ? hoverText
              ? 'bg-accent/90 border-accent text-background backdrop-blur-xs'
              : 'bg-accent/15 border-accent scale-150'
            : 'bg-transparent'
        }`}
      >
        {hoverText && (
          <span className="text-[7px] font-mono uppercase tracking-widest font-semibold px-1 text-center leading-none">
            {hoverText}
          </span>
        )}
      </div>
    </div>
  );
}
