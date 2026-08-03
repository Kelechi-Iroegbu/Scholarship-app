import React from 'react';

export default function TraitCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}