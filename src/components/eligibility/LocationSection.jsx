import React from 'react';
import { Image } from '@/components/ui/image';

export default function LocationSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid md:grid-cols-2 gap-8 items-center">
      <Image
        src="https://images.unsplash.com/photo-1601999355004-9be6f1e5836a?auto=format&fit=crop&w=800&q=80"
        alt="[Placeholder: city/region where scholars study]"
        className="w-full aspect-[4/3] rounded-lg object-cover"
        fittingType="fill"
      />
      <div>
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
          [City/Region Name]
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          [Placeholder] Our scholars study in [City/Region Name], a [placeholder description —
          e.g. vibrant, growing, culturally rich] hub known for [placeholder detail about the
          area's opportunities, safety, or community].
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          [Placeholder] The location offers easy access to [placeholder amenities — libraries,
          internships, transit, student housing] that support scholars throughout their studies.
        </p>
      </div>
    </section>
  );
}