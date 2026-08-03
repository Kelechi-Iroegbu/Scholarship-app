import React from 'react';
import { Calendar, Wallet, MapPin, Users, Award, Clock } from 'lucide-react';

const details = [
  { icon: Calendar, label: 'Academic Session', value: '2026/2027' },
  { icon: Wallet, label: 'Coverage', value: 'Tuition Assistance' },
  { icon: MapPin, label: 'Location', value: 'Ovim' },
  { icon: Users, label: 'Target', value: 'First-Year Students' },
  { icon: Award, label: 'Sponsor', value: 'President General, Agu Egbe Foundation' },
  { icon: Clock, label: 'Duration', value: 'One Academic Year' },
];

export default function AboutProgram() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            About the Program
          </p>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-foreground">
            About the Scholarship
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed">
            The Agu Egbe Foundation Scholarship is a hardship scholarship program designed to
            support indigent, first-year undergraduate students in beginning their university
            education without financial barriers.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
          <h3 className="font-heading text-lg font-semibold text-foreground">Program Details</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-primary">
                  <detail.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">{detail.label}</p>
                  <p className="text-sm font-semibold text-foreground">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}