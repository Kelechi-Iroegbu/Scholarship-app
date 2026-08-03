import React from 'react';
import { Hourglass } from 'lucide-react';

export default function DeadlineSection() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-accent/40 bg-accent/10 p-6 sm:p-8 flex items-center justify-between gap-6 text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Application Deadline
            </p>
            <p className="mt-2 font-heading text-xl sm:text-2xl font-semibold text-foreground">
              Before the commencement of the 2026/2027 academic session
            </p>
          </div>
          <Hourglass className="h-10 w-10 text-secondary shrink-0" />
        </div>
      </div>
    </section>
  );
}