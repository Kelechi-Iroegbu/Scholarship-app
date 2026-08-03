import React from 'react';
import { Phone, MessageCircle, Mail, User } from 'lucide-react';

export default function ContactHelp() {
  return (
    <div>
      <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
        Need Help?
      </p>
      <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-foreground">
        We're Here for You
      </h2>

      <div className="mt-8 rounded-lg border border-border bg-card p-6">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted text-primary">
            <User className="h-7 w-7" />
          </span>
          <div>
            <p className="font-heading font-semibold text-foreground">Engr Nnamdi Ekebuike</p>
            <p className="text-sm text-muted-foreground">National Youth Leader, Ovim Youth Assembly</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a
            href="tel:08036000021"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href="https://wa.me/2348036000021"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="mailto:info@aguegbefoundation.org"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Office Hours: Mon – Fri, 9:00 AM – 5:00 PM
        </p>
      </div>
    </div>
  );
}