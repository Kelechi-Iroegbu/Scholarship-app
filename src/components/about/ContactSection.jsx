import React from 'react';
import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

const items = [
  { icon: Phone, label: 'Phone', value: '0803 600 0021' },
  { icon: Mail, label: 'Email', value: '[email address to confirm]' },
  { icon: MapPin, label: 'Address', value: '[physical address to confirm]' },
];

export default function ContactSection() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-border bg-muted/40 px-6 py-12 sm:px-12">
          <Leaf
            aria-hidden="true"
            className="hidden sm:block absolute -right-4 top-1/2 h-32 w-32 -translate-y-1/2 rotate-12 text-secondary/10"
            strokeWidth={0.75}
          />

          <div className="relative">
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase text-center">
              Get in Touch
            </p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight text-center">
              Contact the Foundation
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-border">
              {items.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col items-center gap-2 px-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card">
                    <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
