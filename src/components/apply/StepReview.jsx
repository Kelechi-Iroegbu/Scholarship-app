import React from 'react';
import { Button } from '@/components/ui/button';
import { DOCUMENT_TYPES } from '@/lib/applicationConstants';

function Section({ title, onEdit, children }) {
  return (
    <div className="rounded-lg border border-border p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">{title}</h3>
        <button onClick={onEdit} className="text-xs font-medium text-primary hover:underline">Edit</button>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function StepReview({ data, documents, onEditStep }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground">Review Your Application</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Please take a moment to review everything below before submitting.
        </p>
      </div>

      <Section title="Eligibility Form" onEdit={() => onEditStep(1)}>
        <p className="text-sm text-muted-foreground">
          {data.full_name} · DOB {data.date_of_birth || '—'} · Indigene: {data.indigene_confirmed ? 'Yes' : 'No'}
        </p>
        {data.indigene_confirmed && (
          <p className="mt-1 text-sm text-muted-foreground">
            {data.major_community || '—'} · {data.autonomous_community || '—'}
          </p>
        )}
        <p className="mt-1 text-sm text-muted-foreground">{data.address}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {data.school} (Isuikwuato LGA: {data.school_in_isuikwuato ? 'Yes' : 'No'})
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          JAMB {data.jamb_reg_number || '—'} · Score {data.jamb_score ?? '—'}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{data.institution} · {data.intended_degree}</p>
      </Section>

      <Section title="Statement of Purpose" onEdit={() => onEditStep(2)}>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap line-clamp-4">
          {data.statement_of_purpose || '(not answered)'}
        </p>
      </Section>

      <Section title="Financial Hardship Statement" onEdit={() => onEditStep(3)}>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap line-clamp-4">
          {data.financial_hardship_statement || '(not answered)'}
        </p>
      </Section>

      <Section title="Documents" onEdit={() => onEditStep(4)}>
        <ul className="space-y-1">
          {DOCUMENT_TYPES.map(({ key, label }) => {
            const doc = documents.find((d) => d.type === key);
            return (
              <li key={key} className="text-sm text-muted-foreground">
                {label}: {doc ? doc.file_name : <span className="text-destructive">Not uploaded</span>}
              </li>
            );
          })}
        </ul>
      </Section>
    </div>
  );
}