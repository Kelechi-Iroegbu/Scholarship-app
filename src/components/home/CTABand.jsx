import React from 'react';
import { Link } from 'react-router-dom';

export default function CTABand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold">
            Applications are now open
          </h3>
          <p className="mt-2 text-primary-foreground/85">
            Take the first step toward your scholarship journey.
          </p>
        </div>
        <Link
          to="/apply"
          className="inline-flex items-center justify-center rounded-md bg-band px-6 py-3 text-sm font-semibold text-band-foreground hover:opacity-90 transition shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-band focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}