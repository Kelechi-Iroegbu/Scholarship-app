import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const fields = [
  '[Business & Management]',
  '[Engineering & Technology]',
  '[Health & Medical Sciences]',
  '[Law & Public Policy]',
  '[Education]',
  '[Sciences & Mathematics]',
];

export default function EligiblePrograms() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
        Eligible Programs
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        [Placeholder] For the [2026/2027] award cycle, the foundation supports students pursuing
        study in the following fields at accredited institutions.
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {fields.map((f) => (
          <li key={f} className="flex items-start gap-2 text-foreground/90">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
      >
        Learn More
      </a>

      <p className="mt-6 text-xs text-muted-foreground">
        [Placeholder small print: Programs in (list excluded fields, e.g. vocational
        certificates, non-accredited diplomas) are not eligible under this scholarship cycle.]
      </p>
    </section>
  );
}