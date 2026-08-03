import React from 'react';
import { Image } from '@/components/ui/image';

export default function AwardsAvailabilityBanner() {
  return (
    <section className="relative w-full h-[45vh] min-h-[320px] text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
        alt="[Placeholder: students on campus]"
        className="absolute inset-0 w-full h-full object-cover"
        fittingType="fill"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <p className="font-heading text-3xl sm:text-5xl font-bold text-primary">
          [N] Scholarships and Awards Available for [YEAR]
        </p>
      </div>
    </section>
  );
}