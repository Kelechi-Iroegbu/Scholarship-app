import React from 'react';
import PageHeader from '@/components/PageHeader';

export default function Donate() {
  return (
    <div>
      <PageHeader
        title="Support the Scholarship"
        subtitle="Help us open the door to tertiary education for Ovim's indigent sons and daughters."
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Every gift to the Anna Nnenna Egbe Queen Heart of Peace Educational Foundation goes
          directly toward tuition and essential costs
          for first-year undergraduate indigenes of Ovim who have earned admission but lack the
          means to begin their studies. Your support turns hardship into opportunity and helps a
          deserving student step into the classroom.
        </p>
        <div className="mt-8 rounded-lg border border-dashed border-secondary/50 bg-muted px-6 py-8">
          <p className="font-heading text-lg font-semibold text-foreground">Coming Soon</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Online giving is being set up. Please check back shortly for secure ways to donate.
          </p>
        </div>
      </div>
    </div>
  );
}