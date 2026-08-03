import React from 'react';
import { Image } from '@/components/ui/image';

export default function Voices() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-5 gap-8 items-center">
      <div className="md:col-span-2">
        <Image
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80"
          alt="A young graduate"
          className="w-full aspect-[3/4] rounded-md object-cover"
          fittingType="fill"
        />
      </div>
      <div className="md:col-span-3">
        <span className="font-heading text-5xl text-primary leading-none">"</span>
        <blockquote className="mt-2 font-heading text-2xl sm:text-3xl italic text-foreground leading-snug">
          They didn't just pay my fees. My mentor called me the week I wanted to quit and
          talked me through it. I graduated. I'm a doctor now.
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground">
          Dr. Nkem Alozie — Scholar, 2019 cohort
        </p>
      </div>
    </section>
  );
}