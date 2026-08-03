import React from 'react';

export default function StatBanner() {
  return (
    <section className="bg-band text-band-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <p className="font-heading text-4xl sm:text-6xl font-bold text-primary">
          [500+]
        </p>
        <p className="mt-3 text-lg sm:text-xl text-band-foreground/85">
          Scholarships Awarded Since [2010]
        </p>
      </div>
    </section>
  );
}