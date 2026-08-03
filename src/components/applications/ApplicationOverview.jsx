import React from 'react';

export default function ApplicationOverview() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">Overview</p>
        <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          Everything You Need to Know
        </h2>
        <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
          This section provides a quick overview of the scholarship application process,
          eligibility criteria, and the steps you need to follow to submit a successful
          application.
        </p>
      </div>
    </section>
  );
}