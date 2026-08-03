import React from 'react';
import { Image } from '@/components/ui/image';

const photos = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=500&q=80',
];

const navButtons = ['Student Experience', 'Research & Support', 'Campus Life'];

export default function PartnerInstitutionBanner() {
  return (
    <section className="bg-band text-band-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase">
          Partner Institution
        </p>
        <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold">
          [Partner Institution Name]
        </h2>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          {photos.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="[Placeholder: campus photo]"
              className="w-full aspect-[4/3] rounded-md object-cover"
              fittingType="fill"
            />
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-band-foreground/80 leading-relaxed">
          [Placeholder] {'[Partner Institution Name]'} is recognized for [placeholder reputation
          detail — e.g. academic excellence, research output, or global rankings], making it a
          strong environment for our scholars to grow and thrive.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {navButtons.map((label) => (
            <a
              key={label}
              href="#"
              className="rounded-md border border-band-foreground/30 px-5 py-2.5 text-sm font-medium text-band-foreground hover:bg-band-foreground/10 transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}