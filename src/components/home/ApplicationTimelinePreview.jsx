import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, UploadCloud, Search, Award, ArrowRight } from 'lucide-react';

const steps = [
  { step: '01', label: 'Apply', icon: FileText, description: 'Fill out the online application form.' },
  { step: '02', label: 'Submit Documents', icon: UploadCloud, description: 'Upload required documents.' },
  { step: '03', label: 'Review', icon: Search, description: 'Our team reviews your application.' },
  { step: '04', label: 'Award', icon: Award, description: 'Successful applicants receive support.' },
];

export default function ApplicationTimelinePreview() {
  return (
    <section className="py-16 sm:py-20 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">How It Works</p>
        <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground">
          The Application Journey
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-heading font-semibold text-foreground">{s.label}</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground tracking-wide">{s.step}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[10rem]">
                {s.description}
              </p>
              {i < steps.length - 1 && (
                <span className="hidden sm:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-3rem)] border-t border-dashed border-border" />
              )}
            </div>
          ))}
        </div>

        <Link
          to="/applications"
          className="mt-14 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          View Full Application Process
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}