import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export default function AuthLayout({ icon: Icon, title, subtitle, footer, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Link
        to="/"
        className="header-logo fixed top-6 left-4 sm:left-6 lg:left-8 inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground shrink-0">
          <GraduationCap className="h-6 w-6" />
        </span>
        <span className="leading-tight text-left">
          <span className="block font-heading text-base sm:text-lg font-semibold text-foreground tracking-tight">
            Agu Egbe Foundation
          </span>
          <span className="block text-[10px] sm:text-xs font-body font-normal tracking-wide text-muted-foreground">
            Ovim Hardship Scholarship
          </span>
        </span>
      </Link>
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-4">
            <Icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
        </div>
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8">
          {children}
        </div>
        {footer && (
          <p className="text-center text-sm text-muted-foreground mt-6">{footer}</p>
        )}
      </div>
    </div>
  );
}