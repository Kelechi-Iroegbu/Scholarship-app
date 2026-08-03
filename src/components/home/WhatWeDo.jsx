import React from 'react';

const pillars = [
  {
    title: 'Full tuition, no strings',
    body: 'We cover tuition, accommodation, and a modest living stipend for the full duration of your programme. No conditional grades, no repayment, no fine print.',
  },
  {
    title: 'A mentor, not just a name',
    body: 'Every scholar is paired with a mentor in their field — someone who picks up the phone, reads the draft, and stays in the corner long after graduation.',
  },
  {
    title: 'A community that lasts',
    body: 'Scholars join a growing network of alumni who hire each other, house each other, and open doors for the cohort coming up behind them.',
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground max-w-xl">
          What the scholarship actually covers
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className="md:border-l md:border-border md:pl-6">
              <span className="font-heading text-2xl text-primary/40 font-semibold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}