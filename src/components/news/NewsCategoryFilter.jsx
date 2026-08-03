import React from 'react';
import { LayoutGrid, Megaphone, GraduationCap, Users } from 'lucide-react';

const ICONS = {
  All: LayoutGrid,
  Announcements: Megaphone,
  'Scholarship Updates': GraduationCap,
  Community: Users,
};

export default function NewsCategoryFilter({ categories, value, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((c) => {
        const Icon = ICONS[c] || LayoutGrid;
        const active = value === c;
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              active
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
            }`}
          >
            <Icon className="h-4 w-4" /> {c}
          </button>
        );
      })}
    </div>
  );
}