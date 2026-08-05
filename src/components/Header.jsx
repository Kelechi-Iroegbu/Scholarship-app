import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { toast } from '@/components/ui/use-toast';

const navItems = [
  { label: 'Program', path: '/program' },
  { label: 'Application', path: '/applications' },
  { label: 'Scholars', path: '/scholars' },
  { label: 'News', path: '/news' },
  { label: 'About', path: '/about' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const isAdmin = user?.role === 'admin';
  // The home page always reads as the public marketing page, even for a logged-in
  // student, so the header there ignores auth state entirely.
  const isHomePage = location.pathname === '/';
  const isAuthed = isAuthenticated && !isHomePage;
  const accountLink = isAdmin ? { label: 'Admin', path: '/admin' } : { label: 'Dashboard', path: '/dashboard' };
  // Students are scoped to just their dashboard so they aren't tempted onto pages
  // that Layout will bounce them off of; admins keep the full site nav.
  const items = !isAuthed ? navItems : isAdmin ? [...navItems, accountLink] : [accountLink];
  const showMarketingLinks = !isAuthed || isAdmin;

  // LOG IN still shows on the home page even when already authenticated (it
  // stays fully public there) — clicking it shouldn't send a logged-in user
  // through the login form again.
  const handleLoginClick = (e) => {
    if (!isAuthenticated) return;
    e.preventDefault();
    toast({ title: "You're already logged in", description: 'Taking you to your dashboard.' });
    navigate(isAdmin ? '/admin' : '/dashboard');
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      {/* Top row: brand + apply button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="header-logo flex items-center gap-4 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground shrink-0">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-base sm:text-lg font-semibold text-foreground tracking-tight">
                Agu Egbe Foundation
              </span>
              <span className="block text-[10px] sm:text-xs font-body font-normal tracking-wide text-muted-foreground">
                Ovim Hardship Scholarship
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {!isAuthed && (
              <Link
                to="/login"
                onClick={handleLoginClick}
                className="hidden sm:inline-flex items-center rounded-md px-3 py-2.5 text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                LOG IN
              </Link>
            )}
            {isAuthed && (
              <button
                type="button"
                onClick={() => logout()}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <LogOut className="h-4 w-4" />
                SIGN OUT
              </button>
            )}
            {showMarketingLinks && (
              <Link
                to="/donate"
                className="hidden sm:inline-flex items-center rounded-md border border-foreground/30 px-5 py-2.5 text-sm font-semibold tracking-wide text-foreground hover:border-secondary hover:text-secondary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                DONATE
              </Link>
            )}
            {showMarketingLinks && (
              <Link
                to="/apply"
                className="hidden sm:inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold tracking-wide text-primary-foreground hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                APPLY NOW
              </Link>
            )}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom row: nav with underline active state */}
      <div className="hidden md:block border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-8 h-14">
            {items.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `header-nav-item relative h-full flex items-center text-sm font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                    isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <span className="absolute -bottom-px left-0 right-0 h-[3px] bg-primary rounded-full" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>

    {open && (
      <div className="md:hidden fixed inset-0 top-20 z-40" onClick={() => setOpen(false)}>
        <div className="absolute inset-0 bg-black/40" />
        <div
          id="mobile-menu"
          className="absolute right-0 top-0 h-full w-72 max-w-[80%] bg-card shadow-xl p-5 flex flex-col gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          {showMarketingLinks && (
            <Link
              to="/apply"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold tracking-wide text-primary-foreground mb-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              APPLY NOW
            </Link>
          )}
          {showMarketingLinks && (
            <Link
              to="/donate"
              className="inline-flex items-center justify-center rounded-md border border-foreground/30 px-4 py-2.5 text-sm font-semibold tracking-wide text-foreground mb-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary hover:border-secondary hover:text-secondary"
            >
              DONATE
            </Link>
          )}
          {!isAuthed && (
            <Link
              to="/login"
              onClick={handleLoginClick}
              className="px-3 py-2.5 text-base font-medium rounded-md text-foreground hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary mb-2"
            >
              Log In
            </Link>
          )}
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {isAuthed && (
              <button
                type="button"
                onClick={() => logout()}
                className="flex items-center gap-2 px-3 py-2.5 text-base font-medium rounded-md text-foreground hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-left"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            )}
            {items.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-base font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    )}
    </>
  );
}