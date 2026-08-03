import React from 'react';
import { UserPlus, LogIn, FileEdit, HeartHandshake, UploadCloud, Send } from 'lucide-react';

const steps = [
  { icon: UserPlus, title: 'Create Account', text: 'Create an account on the applicant portal' },
  { icon: LogIn, title: 'Log In & Eligibility Form', text: 'Log in and complete the Eligibility Form' },
  { icon: FileEdit, title: 'Statement of Purpose', text: 'Write a Statement of Purpose' },
  { icon: HeartHandshake, title: 'Financial Hardship', text: 'Write a Financial Hardship Statement (min. 250 words)' },
  { icon: UploadCloud, title: 'Upload Documents', text: 'Upload required documents (see list below)' },
  { icon: Send, title: 'Submit Application', text: 'Submit before the deadline' },
];

export default function ApplicationSteps() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center">
          Application Steps
        </h2>

        <div className="mt-4 rounded-2xl bg-muted p-8 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card border border-border text-primary">
                  <step.icon className="h-6 w-6" />
                </span>
                <span className="mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-heading font-semibold">
                  {i + 1}
                </span>
                <p className="mt-2 text-sm font-semibold text-foreground">{step.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{step.text}</p>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-7 left-[calc(50%+2.25rem)] w-[calc(100%-2.5rem)] border-t border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}