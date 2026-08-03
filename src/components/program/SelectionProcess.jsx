import React from 'react';
import { CheckCircle2, FileCheck2, Users, Award } from 'lucide-react';

const steps = [
  { step: '1', icon: CheckCircle2, title: 'Eligibility Review', description: 'We verify that all applicants meet the basic requirements.' },
  { step: '2', icon: FileCheck2, title: 'Document Verification', description: 'Submitted documents are reviewed and validated.' },
  { step: '3', icon: Users, title: 'Committee Assessment', description: 'Applications are assessed based on merit and need.' },
  { step: '4', icon: Award, title: 'Final Selection', description: 'Successful candidates are selected and recommended.' },
];

export default function SelectionProcess() {
  return (
    <section className="py-14 sm:py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
          Selection Process
        </p>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-foreground">
          How Applications Are Evaluated
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="rounded-lg bg-card border border-border p-6 text-left">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-heading text-lg font-bold text-secondary">{s.step}</span>
              </div>
              <p className="mt-4 font-semibold text-foreground">{s.title}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}