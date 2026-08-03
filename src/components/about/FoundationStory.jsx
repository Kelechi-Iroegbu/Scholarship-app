import React from 'react';
import { Leaf } from 'lucide-react';

export default function FoundationStory() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">Our Story</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Why the Agu Egbe Foundation Exists
          </h2>
          <span className="mt-5 block h-1.5 w-16 rounded-full bg-secondary" />

          <div className="relative mt-10 hidden h-32 w-32 sm:block" aria-hidden="true">
            <span className="absolute inset-0 rounded-full border border-border" />
            <Leaf className="absolute inset-0 m-auto h-16 w-16 text-muted-foreground/30" strokeWidth={1} />
          </div>
        </div>

        <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
          <p>
            The Agu Egbe Foundation was established to stand between talented young people from Ovim
            and the financial hardship that too often ends their education before it truly begins.
            We believe that a first-year admission letter should be the start of a story, not the end
            of one.
          </p>
          <p>
            Our mission is simple: identify indigent, first-year undergraduate indigenes of Ovim who
            have earned admission but lack the means to enroll, and give them the financial support
            they need to begin their studies with dignity.
          </p>
        </div>
      </div>
    </section>
  );
}
