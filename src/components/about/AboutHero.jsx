import React from 'react';
import { Image } from '@/components/ui/image';

export default function AboutHero() {
  return (
    <section className="no-reveal bg-band text-band-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            About the Foundation
          </p>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Supporting indigent Ovim indigenes into higher education.
          </h1>
          <span className="mt-5 block h-1.5 w-16 rounded-full bg-secondary" />
          <p className="mt-6 text-band-foreground/80 text-base sm:text-lg leading-relaxed max-w-md">
            We identify deserving first-year undergraduate students and provide the financial
            support they need to begin their university journey with dignity.
          </p>
        </div>

        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-band-foreground/15">
          <Image
            src="/images/hero-placeholder.jpg"
            alt="A graduate in a cap and gown smiling proudly on a garden path"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
