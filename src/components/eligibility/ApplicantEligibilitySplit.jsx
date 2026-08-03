import React from 'react';

const columns = [
  {
    title: 'Domestic Applicants',
    criteria: [
      '[Placeholder: citizenship/residency requirement]',
      '[Placeholder: academic eligibility requirement]',
      '[Placeholder: financial need requirement]',
    ],
    award: '[Placeholder award detail — e.g. up to $X,XXX per year]',
  },
  {
    title: 'International Applicants',
    criteria: [
      '[Placeholder: visa/study permit requirement]',
      '[Placeholder: language proficiency requirement]',
      '[Placeholder: admission offer requirement]',
    ],
    award: '[Placeholder award detail — e.g. up to $X,XXX per year]',
  },
];

export default function ApplicantEligibilitySplit() {
  return (
    <section className="bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-center">
          Applicant Eligibility
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {columns.map((col) => (
            <div key={col.title} className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.criteria.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-medium text-primary">{col.award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}