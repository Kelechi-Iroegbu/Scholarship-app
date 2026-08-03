import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, FileText, User } from 'lucide-react';

const criteria = [
  { icon: Users, text: 'Indigene and resident of Ovim' },
  { icon: GraduationCap, text: 'Secondary education completed within Isuikwuato LGA' },
  { icon: FileText, text: 'Sat for the 2026 JAMB Examination' },
  { icon: User, text: 'Entering the FIRST YEAR of an undergraduate program' },
];

export default function EligibilityRecap() {
  return (
    <section className="py-14 sm:py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-6 sm:p-10">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center">
            Eligibility Recap
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-4">
            {criteria.map((item) => (
              <div key={item.text} className="flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-primary">
                  <item.icon className="h-6 w-6" />
                </span>
                <p className="mt-4 text-sm text-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need the full details?{' '}
            <Link to="/program" className="text-primary font-semibold hover:underline">
              View the complete criteria on the Program page
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}