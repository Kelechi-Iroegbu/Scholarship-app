import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Monitor, Users } from 'lucide-react';

export default function SubmissionPathways() {
  return (
    <section className="py-14 sm:py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center">
          Two Ways to Apply
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 flex flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Monitor className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Online Portal</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
              Create an account, complete the eligibility form, and upload your documents from
              anywhere with internet access.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/register"
                className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition"
              >
                Log In
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 flex flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Users className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
              In-Person / Manual Submission
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
              For applicants without reliable internet access, documents can be submitted
              directly to the Program Director of the Agu Egbe Foundation, before the
              commencement of the 2026/2027 academic session.
            </p>
            <div className="mt-6">
              <p className="font-semibold text-foreground text-sm">Ugomma Ejimofo</p>
              <a
                href="tel:08036000021"
                className="mt-1 inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:opacity-80"
              >
                <Phone className="h-4 w-4" /> +234 916 236 8804
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}