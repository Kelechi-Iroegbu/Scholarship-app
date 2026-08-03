import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ApplicationHero() {
  return (
    <section className="no-reveal pt-14 sm:pt-16 pb-14 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            2026/2027 Academic Session
          </p>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Apply for the 2026/2027 Scholarship
          </h1>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
            Qualified indigent candidates from Ovim can apply online for the Agu Egbe Foundation
            Scholarship. This page walks you through what to expect — from eligibility to
            submission.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Start Your Application
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition"
            >
              Download Guidelines
              <Download className="h-4 w-4" />
            </a>
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