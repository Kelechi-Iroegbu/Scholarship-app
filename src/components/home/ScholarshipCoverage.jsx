import React from 'react';
import { GraduationCap, Home, Users } from 'lucide-react';

const items = [
  { icon: GraduationCap, title: 'Tuition Support', text: 'Up to [$X,XXX] per academic year toward tuition and fees.' },
  { icon: Home, title: 'Living Stipend', text: '[$XXX] per month to help cover housing, meals, and books.' },
  { icon: Users, title: 'Mentorship Program', text: 'A dedicated mentor and access to our scholar community network.' },
];

export default function ScholarshipCoverage() {
  return (
    <section className="bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-center">
          What the Scholarship Covers
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}