import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function HeroBanner() {
  return (
    <section className="no-reveal relative w-full overflow-hidden bg-band text-band-foreground">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            Ovim Hardship Scholarship
          </p>
          <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-bold leading-tight">
            <span className="hero-line">Opening the Door to Tertiary Education for</span>
            <span className="hero-line text-secondary">Ovim's Indigent Sons and Daughters</span>
          </h1>
          <span className="hero-underline origin-left mt-5 block h-1.5 w-16 rounded-full bg-secondary" />
          <p className="hero-subheadline mt-6 text-band-foreground/80 text-base sm:text-lg max-w-md leading-relaxed">
            The Agu Egbe Foundation covers tuition and essential costs for indigent, first-year
            undergraduate indigenes of Ovim — so that financial hardship never stands between a
            willing student and a university education.
          </p>
          <div className="hero-cta-group mt-9 flex flex-wrap gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-band"
            >
              Apply for the Scholarship
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/eligibility"
              className="inline-flex items-center rounded-md border border-band-foreground/30 px-7 py-3.5 text-sm font-semibold text-band-foreground hover:border-secondary hover:text-secondary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-band"
            >
              Learn About Eligibility
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-band-foreground/15">
            <Image
              src="/images/hero-home.jpg"
              alt="A diverse group of graduates celebrating together, tossing their caps into the air"
              className="w-full h-full"
            />
          </div>

          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg bg-band border border-secondary/40 shadow-lg px-4 py-3 max-w-[240px]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
              <Users className="h-4 w-4" />
            </span>
            <p className="text-xs font-semibold text-band-foreground leading-snug">
              Investing in Potential. Building Tomorrow.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="hidden sm:block absolute -bottom-4 -right-4 h-20 w-20"
            style={{
              backgroundImage: 'radial-gradient(hsl(var(--secondary)) 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </section>
  );
}