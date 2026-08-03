import React from 'react';
import { MapPin } from 'lucide-react';

export default function OurCommunitySection() {
  return (
    <section className="py-14 sm:py-16 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">Our Community</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Ovim, Isiukwuato LGA
          </h2>
          <span className="mt-5 block h-1.5 w-16 rounded-full bg-secondary" />
          <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Ovim is a community in Isiukwuato Local Government Area, Abia State, Nigeria. It is a place
            of close-knit families, hardworking students, and a shared belief that every young person
            who earns their place at university deserves the chance to attend. This scholarship exists
            because of — and for — the people of Ovim.
          </p>
        </div>

        <div className="relative">
          <div
            className="aspect-[4/3] rounded-xl border border-border"
            style={{
              backgroundImage: 'linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(var(--band)) 100%)',
            }}
          />
          <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card shadow-lg">
            <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
