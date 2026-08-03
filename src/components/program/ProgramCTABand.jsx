import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function ProgramCTABand() {
  return (
    <section className="bg-band text-band-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold">
            Ready to Begin Your Journey?
          </h3>
          <p className="mt-2 text-band-foreground/80">
            Applications for the 2026/2027 scholarship are now open. Take the first step toward a
            brighter future.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <Link
            to="/apply"
            className="inline-flex items-center rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition"
          >
            Apply Now
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-band-foreground/30 px-6 py-3 text-sm font-semibold text-band-foreground hover:border-secondary hover:text-secondary transition"
          >
            Download Guidelines
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}