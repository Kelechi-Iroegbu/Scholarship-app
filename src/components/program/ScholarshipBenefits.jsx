import React from 'react';
import { GraduationCap, BookOpen, Users, Globe } from 'lucide-react';

const benefits = [
  { icon: GraduationCap, title: 'Tuition Support', description: 'Financial assistance to support your tuition and educational expenses.' },
  { icon: BookOpen, title: 'Academic Resources', description: 'Access to learning materials and academic resources to support your success.' },
  { icon: Users, title: 'Mentorship', description: 'Guidance and mentorship from experienced professionals.' },
  { icon: Globe, title: 'Community Network', description: 'Become part of a thriving network of scholars and alumni opportunities.' },
];

export default function ScholarshipBenefits() {
  return (
    <section className="py-14 sm:py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
          What You'll Receive
        </p>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-foreground">
          Scholarship Benefits
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-lg bg-card border border-border p-6 text-left transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <benefit.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-heading font-semibold text-foreground">{benefit.title}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}