import React from 'react';
import { Link } from 'react-router-dom';

export default function ClosingNote() {
  return (
    <section className="bg-band text-band-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold">
          If you've done the work, we'll help you finish it.
        </h2>
        <p className="mt-5 text-band-foreground/70 text-lg leading-relaxed">
          Applications open once a year. There is no fee to apply, and no one is turned away
          from asking a question.
        </p>
        <Link
          to="/apply"
          className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          Begin your application
        </Link>
      </div>
    </section>
  );
}