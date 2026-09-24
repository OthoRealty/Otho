"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const NAV_LINKS = [
  { label: "Intelligence", href: "/intelligence" },
  { label: "Curation", href: "/curation" },
  { label: "Locations", href: "/locations" },
  { label: "Advisory", href: "/advisory" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full ring-1 ring-border overflow-hidden">
              <Image
                src="/assets/otho-crest-logo.jpg"
                alt="OTHO Crest"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif text-xl tracking-wider text-foreground">
              OTHO
            </span>
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-sans text-[13px] uppercase tracking-[0.08em] transition-colors duration-300 py-2",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-foreground",
                    "after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100",
                    isActive
                      ? "text-foreground after:scale-x-100"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <ThemeToggle />
            <Link 
              href="/contact"
              className="font-mono text-[11px] uppercase tracking-[0.06em] bg-accent text-accent-foreground px-6 py-3 hover:bg-accent/90 transition-all duration-300 font-semibold"
            >
              Request Dossier
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col",
          mobileMenuOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-full"
        )}
      >
        <div className="flex items-center justify-end p-6 h-20">
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-serif text-2xl transition-colors duration-300",
                pathname === link.href ? "text-accent" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-8 flex flex-col items-center gap-6 mb-12">
          <ThemeToggle />
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full max-w-sm text-center font-mono text-[11px] uppercase tracking-[0.06em] bg-accent text-accent-foreground px-6 py-4 hover:bg-accent/90 transition-all duration-300 font-semibold"
          >
            Request Dossier
          </Link>
        </div>
      </div>
    </>
  );
}
