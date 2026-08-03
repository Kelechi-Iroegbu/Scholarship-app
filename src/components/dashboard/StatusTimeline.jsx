import React from 'react';
import { Check } from 'lucide-react';
import { DECISION_STATUSES, STATUS_LABELS } from '@/lib/applicationConstants';

const stages = ['draft', 'submitted', 'under_review', 'decision'];

export default function StatusTimeline({ status }) {
  const isDecision = DECISION_STATUSES.includes(status);
  const currentIndex = isDecision ? 3 : stages.indexOf(status);

  return (
    <div className="flex items-center">
      {stages.map((stage, i) => {
        const isDone = i < currentIndex || (i === currentIndex && (isDecision || i === stages.length - 1));
        const isActive = i === currentIndex;
        const label = stage === 'decision' ? (isDecision ? STATUS_LABELS[status] : 'Decision') : STATUS_LABELS[stage];
        return (
          <React.Fragment key={stage}>
            <div className="flex flex-col items-center text-center">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                  isDone ? 'bg-primary text-primary-foreground' : isActive ? 'border-2 border-primary text-primary' : 'border-2 border-border text-muted-foreground'
                }`}
              >
                {isDone && i < currentIndex ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className="mt-1.5 text-[11px] font-medium text-muted-foreground max-w-[80px]">{label}</span>
            </div>
            {i < stages.length - 1 && <div className={`h-0.5 flex-1 mx-1 ${i < currentIndex ? 'bg-primary' : 'bg-border'}`} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}