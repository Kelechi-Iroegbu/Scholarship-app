import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterBand() {
  return (
    <div className="rounded-lg bg-muted border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Mail className="h-5 w-5" />
      </span>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-heading text-lg font-semibold text-foreground">Never miss an update</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Subscribe to our newsletter and get the latest news, announcements, and opportunities
          straight to your inbox.
        </p>
      </div>
      <form className="flex w-full sm:w-auto gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-64 rounded-md border border-input bg-card px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shrink-0"
        >
          Subscribe <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}