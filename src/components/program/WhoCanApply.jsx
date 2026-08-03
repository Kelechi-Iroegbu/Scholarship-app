import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Image } from '@/components/ui/image';

const criteria = [
  'Must be an indigene of Ovim',
  'Must be resident in Ovim',
  'Must have completed post-primary (secondary) education at a school within Isuikwuato LGA',
  'Must have sat for the 2026 JAMB Examination',
  'Must be entering the FIRST YEAR of an undergraduate program',
];

export default function WhoCanApply() {
  return (
    <div>
      <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
        Eligibility Criteria
      </p>
      <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-foreground">
        Who Can Apply?
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-[auto,1fr] items-start">
        <div className="hidden sm:block w-40 shrink-0">
          <Image
            src="/images/eligibility-backpack.jpg"
            alt="A student wearing a backpack and carrying a stack of books"
            className="w-full aspect-[3/4]"
            fittingType="fit"
          />
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <ul className="space-y-4">
            {criteria.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}