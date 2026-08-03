import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { countWords, HARDSHIP_MIN_WORDS } from '@/lib/applicationConstants';

export default function StepFinancialHardship({ data, onChange }) {
  const words = countWords(data.financial_hardship_statement);
  const met = words >= HARDSHIP_MIN_WORDS;

  let hint = `${words}/${HARDSHIP_MIN_WORDS} words`;
  let hintClass = 'text-muted-foreground';
  if (met) {
    hint += ' — thank you for sharing your story.';
    hintClass = 'text-success';
  } else if (words >= HARDSHIP_MIN_WORDS * 0.6) {
    hint += ' — almost there.';
    hintClass = 'text-accent-foreground';
  } else if (words > 0) {
    hint += ' — you\'re off to a good start.';
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground">Financial Hardship Statement</h2>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
          Please describe your family's current financial circumstances and why you require this
          scholarship. This information is kept strictly confidential and reviewed only by the
          scholarship committee.
        </p>
      </div>

      <div>
        <Label htmlFor="financial_hardship_statement">Your Statement</Label>
        <Textarea
          id="financial_hardship_statement"
          rows={12}
          value={data.financial_hardship_statement || ''}
          onChange={(e) => onChange('financial_hardship_statement', e.target.value)}
          className="mt-1.5"
        />
        <p className={`mt-2 text-xs font-medium ${hintClass}`}>
          {hint} A minimum of {HARDSHIP_MIN_WORDS} words is required to continue.
        </p>
      </div>
    </div>
  );
}