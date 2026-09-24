'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Building2,
  Newspaper,
  MapPin,
  Briefcase,
  Image as ImageIcon,
  Users,
  Settings,
  BarChart3,
  UserCog,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId === 'Admin' && password === 'Otho@786') {
      sessionStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Projects', href: '/admin/projects', icon: Building2 },
    { name: 'Intelligence', href: '/admin/intelligence', icon: Newspaper },
    { name: 'Locations', href: '/admin/locations', icon: MapPin },
    { name: 'Services', href: '/admin/services', icon: Briefcase },
    { name: 'Media', href: '/admin/media', icon: ImageIcon },
    { name: 'Leads', href: '/admin/leads', icon: Users },
    { name: 'Team / Users', href: '/admin/users', icon: UserCog },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  if (isAuthenticated === null) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full shadow-lg">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl text-foreground mb-2">OTHO</h1>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Admin Portal</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full bg-background border border-border rounded-md p-2 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                required
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background border border-border rounded-md p-2 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                required
              />
            </div>
            {error && <p className="text-red-500 text-[10px] font-mono uppercase tracking-widest">{error}</p>}
            <button
              type="submit"
              className="w-full bg-foreground text-background font-mono text-xs uppercase tracking-widest py-3 rounded-md hover:bg-foreground/90 transition-colors mt-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-card border border-border rounded-md text-foreground"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="font-serif text-2xl text-foreground">OTHO</div>
          <div className="bg-muted px-2 py-1 rounded font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Admin
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-md font-mono text-[11px] uppercase tracking-widest transition-colors",
                  isActive
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon size={16} className="shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="flex w-full items-center space-x-3 px-3 py-2.5 rounded-md font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <LogOut size={16} className="shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
