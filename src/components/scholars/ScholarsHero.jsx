import React from 'react';
import { Image } from '@/components/ui/image';

export default function ScholarsHero() {
  return (
    <section className="no-reveal pt-14 sm:pt-16 pb-14 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            Our Scholars
          </p>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Celebrating Ovim's Rising Scholars
          </h1>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
            This page celebrates the current and past recipients of the Agu Egbe Foundation
            Hardship Scholarship — indigenes of Ovim whose determination, once matched with
            opportunity, is carrying them into universities across Nigeria.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="w-full max-w-sm aspect-square">
            <Image
              src="/images/hero-placeholder.jpg"
              alt="A graduate in a cap and gown smiling proudly on a garden path"
              className="w-full h-full"
              fittingType="fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}