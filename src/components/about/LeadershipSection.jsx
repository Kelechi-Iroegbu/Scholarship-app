import React from 'react';
import { User, ArrowRight, Leaf } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section className="py-14 sm:py-16 bg-muted/40 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase text-center">Leadership</p>
        <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight text-center">
          Guided by Purpose
        </h2>

        <div className="relative mt-10">
          <Leaf
            aria-hidden="true"
            className="hidden sm:block absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 rotate-12 text-secondary/10"
            strokeWidth={0.75}
          />
          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="h-28 w-28 shrink-0 rounded-full bg-muted flex items-center justify-center">
              <User className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Chief Agu Godswill Egbe, Ph.D, KJW
              </h3>
              <p className="mt-1 text-sm font-semibold text-secondary">President General</p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Chief Agu Godswill Egbe founded this scholarship to give back to the Ovim community
                that shaped him, believing that no indigene of Ovim should be denied a university
                education for lack of means.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80 transition"
              >
                Confirm bio details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
