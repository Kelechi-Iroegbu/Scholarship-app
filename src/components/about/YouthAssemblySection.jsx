import React from 'react';
import { Users } from 'lucide-react';

export default function YouthAssemblySection() {
  return (
    <section className="py-14 sm:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-12 grid gap-10 md:grid-cols-2 items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl border border-border bg-band flex flex-col items-center justify-center gap-3">
            <Users className="h-12 w-12 text-secondary" aria-hidden="true" />
            <p className="font-heading text-lg font-semibold tracking-[0.15em] uppercase text-band-foreground">
              Youth Assembly
            </p>
          </div>
          <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card shadow-lg">
            <Users className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
        </div>

        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">On the Ground</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            The Ovim Youth Assembly
          </h2>
          <span className="mt-5 block h-1.5 w-16 rounded-full bg-secondary" />
          <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            The Ovim Youth Assembly works closely with the foundation to reach eligible students where
            they are — helping applicants understand the process, gather the right documents, and
            submit them correctly and on time.
          </p>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            For applicants submitting documents in person, the Program Director,{' '}
            <span className="font-semibold text-foreground">Ugomma Ejimofo</span>, serves as the
            local point of contact in Ovim.
          </p>
        </div>
      </div>
    </section>
  );
}
