import React from 'react';

export default function WhoWeServe() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">Who We Serve</p>
        <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          Standing With Ovim's Indigent First-Year Students
        </h2>
        <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
          The Hardship Scholarship exists for financially disadvantaged indigenes of Ovim,
          Isuikwuato LGA, who have earned admission but lack the means to begin their first year
          of undergraduate study. We fund tuition and essential costs so that hardship never
          becomes the reason a bright student is kept out of the classroom.
        </p>
      </div>
    </section>
  );
}