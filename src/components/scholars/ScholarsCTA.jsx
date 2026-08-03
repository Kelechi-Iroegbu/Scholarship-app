import React from 'react';
import { Link } from 'react-router-dom';

export default function ScholarsCTA() {
  return (
    <section className="py-14 sm:py-16 bg-band text-band-foreground">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold">Meet Future Scholars</h2>
        <p className="mt-4 text-band-foreground/80 text-base leading-relaxed">
          The names above will soon belong to real students from Ovim. If you're an indigent,
          first-year undergraduate indigene of Ovim, your story could be the next one we celebrate.
        </p>
        <Link
          to="/applications"
          className="mt-7 inline-flex items-center rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-band"
        >
          Start Your Application
        </Link>
      </div>
    </section>
  );
}