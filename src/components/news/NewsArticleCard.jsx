import React from 'react';
import { Megaphone, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const ICONS = {
  Announcements: Megaphone,
  'Scholarship Updates': GraduationCap,
  Community: Users,
};

export default function NewsArticleCard({ headline, date, excerpt, category }) {
  const Icon = ICONS[category] || Megaphone;

  return (
    <article className="rounded-lg border border-border bg-card overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] bg-muted flex items-center justify-center">
        <Icon className="h-9 w-9 text-muted-foreground" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-card border border-border text-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-semibold text-secondary uppercase tracking-wide">{category}</span>
          <span>{format(new Date(date), 'MMM d, yyyy')}</span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold text-foreground leading-snug">
          {headline}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Read more <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}