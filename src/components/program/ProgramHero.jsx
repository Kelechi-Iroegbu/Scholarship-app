import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Image } from '@/components/ui/image';

const badges = ['Fully Funded', 'Merit + Need Based', '2026/2027 Cohort', 'Ovim Community'];

export default function ProgramHero() {
  return (
    <section className="no-reveal pt-14 sm:pt-16 pb-14 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            2026/2027 Academic Session
          </p>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Agu Egbe Foundation Scholarship
          </h1>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
            Supporting brilliant students from Ovim to begin university with dignity, opportunity
            and hope.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Apply Now
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition"
            >
              Download Guidelines
              <Download className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
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