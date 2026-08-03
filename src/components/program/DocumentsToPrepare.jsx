import React from 'react';
import { FileText } from 'lucide-react';

const documents = [
  { title: 'Local Government Certificate', description: 'Proof of indigene status', required: true },
  { title: 'SSCE Result', description: 'Copy of your SSCE result', required: true },
  { title: 'JAMB Result Slip', description: 'Copy of your 2026 JAMB result', required: true },
  { title: 'University Admission Letter', description: 'Copy of admission letter (if available)', required: false },
];

export default function DocumentsToPrepare() {
  return (
    <div>
      <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
        Required Documents
      </p>
      <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-foreground">
        Documents to Prepare
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {documents.map((doc) => (
          <div key={doc.title} className="rounded-lg border border-border bg-card p-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <FileText className="h-4 w-4" />
            </span>
            <p className="mt-3 text-sm font-semibold text-foreground">{doc.title}</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{doc.description}</p>
            <span
              className={`mt-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                doc.required ? 'bg-destructive/10 text-destructive' : 'bg-muted text-muted-foreground'
              }`}
            >
              {doc.required ? 'Required' : 'Optional'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}