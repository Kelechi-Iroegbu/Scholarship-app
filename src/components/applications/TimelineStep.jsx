import React from 'react';

export default function TimelineStep({ number, date, title, text, isLast }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-semibold">
          {number}
        </span>
        {!isLast && <span className="w-px flex-1 bg-border mt-2" />}
      </div>
      <div className="pb-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{date}</p>
        <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </div>
  );
}