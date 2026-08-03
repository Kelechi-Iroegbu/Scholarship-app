import React from 'react';
import { GraduationCap, BarChart3, Settings, Heart, ClipboardList, MessageCircle, Monitor } from 'lucide-react';

const ICONS = {
  chart: BarChart3,
  gear: Settings,
  heart: Heart,
  clipboard: ClipboardList,
  chat: MessageCircle,
  monitor: Monitor,
};

export default function ScholarCard({ program, institution, icon }) {
  const BadgeIcon = ICONS[icon] || GraduationCap;

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] bg-muted flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-card border border-border text-muted-foreground">
          <GraduationCap className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-card border border-border text-primary">
          <BadgeIcon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-base font-semibold text-foreground">[Scholar Name]</h3>
        <p className="mt-1 text-sm text-muted-foreground">{program}, {institution}</p>
        <p className="mt-3 text-sm text-muted-foreground italic leading-relaxed">
          "This scholarship means I no longer have to choose between my education and my family's
          needs — it means I can simply focus on becoming who I'm meant to be."
        </p>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-secondary">
          Placeholder — recipient not yet selected
        </p>
      </div>
    </div>
  );
}