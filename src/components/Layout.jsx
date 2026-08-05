import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useAuth } from '@/lib/AuthContext';

// Students are scoped to their dashboard (plus the application flow it links to
// and the home page, which the header logo always links back to) so they don't
// land on other marketing pages that would confuse the "where am I" story.
const STUDENT_ALLOWED_PATHS = ['/', '/dashboard', '/apply'];

export default function Layout() {
  useScrollReveal();
  const { isAuthenticated, isLoadingAuth, user } = useAuth();
  const location = useLocation();

  const isStudent = isAuthenticated && user?.role !== 'admin';
  if (!isLoadingAuth && isStudent && !STUDENT_ALLOWED_PATHS.includes(location.pathname)) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}