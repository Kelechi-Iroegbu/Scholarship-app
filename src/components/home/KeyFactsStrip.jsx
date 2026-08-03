import React from 'react';
import { Users, GraduationCap, Calendar, HeartHandshake } from 'lucide-react';

const facts = [
  {
    icon: Users,
    label: 'Ovim Indigenes Only',
    description: 'For deserving indigenes of Ovim community.',
  },
  {
    icon: GraduationCap,
    label: 'First-Year Undergraduates',
    description: 'For students beginning their undergraduate journey.',
  },
  {
    icon: Calendar,
    label: '2026/2027 Session',
    description: 'Applications open for the 2026/2027 academic session.',
  },
  {
    icon: HeartHandshake,
    label: 'Full Hardship Support',
    description: 'Tuition and essential costs covered.',
  },
];

export default function KeyFactsStrip() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-lg bg-card border border-border px-6 py-7 transition-shadow hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-primary">
              <fact.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 font-heading text-base font-semibold text-foreground">
              {fact.label}
            </p>
            <span className="mt-2 block h-0.5 w-6 rounded-full bg-secondary" />
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}