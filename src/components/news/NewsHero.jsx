import React from 'react';
import { Image } from '@/components/ui/image';

export default function NewsHero() {
  return (
    <section className="no-reveal bg-band text-band-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> News &amp; Updates
          </p>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Stay Informed, Stay Inspired
          </h1>
          <p className="mt-5 text-band-foreground/80 text-base sm:text-lg leading-relaxed max-w-md">
            Get the latest announcements, scholarship updates, and inspiring stories from the
            Ovim community.
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