import React from 'react';
import { Users } from 'lucide-react';
import ScholarsHero from '@/components/scholars/ScholarsHero';
import ScholarCard from '@/components/scholars/ScholarCard';
import ScholarsCTA from '@/components/scholars/ScholarsCTA';
import { COHORTS } from '@/lib/scholarsData';

export default function Scholars() {
  const cohort = COHORTS[0];

  return (
    <div>
      <ScholarsHero />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold text-foreground">
          <Users className="h-3.5 w-3.5" /> {cohort.label}
        </span>

        <p className="mt-4 text-sm text-muted-foreground">
          The inaugural cohort will be announced following the 2026/2027 application review.
          The profiles below are <span className="font-semibold text-secondary">illustrative placeholders</span>.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cohort.scholars.map((s, i) => (
            <ScholarCard key={i} {...s} />
          ))}
        </div>
      </section>

      <ScholarsCTA />
    </div>
  );
}