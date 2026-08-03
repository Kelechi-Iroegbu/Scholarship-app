import React from 'react';
import { FileEdit, FileUp, Search, Users, Bell, GraduationCap } from 'lucide-react';

const steps = [
  { label: 'Application Opens', date: 'May 15, 2026', icon: FileEdit },
  { label: 'Submit Documents', date: 'June 30, 2026', icon: FileUp },
  { label: 'Review', date: 'July 1 – July 31, 2026', icon: Search },
  { label: 'Selection', date: 'August 1 – 15, 2026', icon: Users },
  { label: 'Award Notification', date: 'August 20, 2026', icon: Bell },
  { label: 'University Resumption', date: 'October 2026', icon: GraduationCap },
];

export default function ApplicationTimelineStrip() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
          Application Timeline
        </p>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-foreground">
          What to Expect
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <div key={s.label} className="relative flex flex-col items-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-foreground">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.date}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-2.5rem)] border-t border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}