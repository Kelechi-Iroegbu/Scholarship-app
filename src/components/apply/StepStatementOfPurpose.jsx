import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { countWords, SOP_MIN_WORDS, SOP_MAX_WORDS } from '@/lib/applicationConstants';

export default function StepStatementOfPurpose({ data, onChange }) {
  const words = countWords(data.statement_of_purpose);
  const belowMin = words > 0 && words < SOP_MIN_WORDS;
  const aboveMax = words > SOP_MAX_WORDS;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground">Statement of Purpose</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Tell us about your academic goals and why this opportunity matters to you.
        </p>
      </div>

      <div>
        <Label htmlFor="statement_of_purpose">Your Statement</Label>
        <Textarea
          id="statement_of_purpose"
          rows={12}
          value={data.statement_of_purpose || ''}
          onChange={(e) => onChange('statement_of_purpose', e.target.value)}
          className="mt-1.5"
        />
        <p className={`mt-2 text-xs ${aboveMax ? 'text-accent-foreground' : belowMin ? 'text-muted-foreground' : 'text-success'}`}>
          {words} words — aim for {SOP_MIN_WORDS} to {SOP_MAX_WORDS} words.
        </p>
      </div>
    </div>
  );
}