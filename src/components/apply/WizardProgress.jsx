import React from 'react';
import { Check } from 'lucide-react';
import {
  getEligibilityStatus,
  getSopStatus,
  getHardshipStatus,
  getDocumentsStatus,
} from '@/lib/applicationConstants';

const STATUS_TEXT = {
  not_started: 'Not Started',
  in_progress: 'In Progress',
  complete: 'Complete',
};

export default function WizardProgress({ currentStep, application, documents }) {
  const steps = [
    { label: 'Eligibility Form', status: getEligibilityStatus(application) },
    { label: 'Statement of Purpose', status: getSopStatus(application) },
    { label: 'Financial Hardship Statement', status: getHardshipStatus(application) },
    { label: 'Document Upload', status: getDocumentsStatus(documents) },
  ];

  return (
    <div className="flex items-start justify-between gap-1 sm:gap-2">
      {steps.map((s, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        return (
          <div key={s.label} className="flex-1 flex flex-col items-center text-center">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                s.status === 'complete'
                  ? 'bg-primary text-primary-foreground'
                  : isActive
                  ? 'border-2 border-primary text-primary'
                  : 'border-2 border-border text-muted-foreground'
              }`}
            >
              {s.status === 'complete' ? <Check className="h-4 w-4" /> : stepNum}
            </div>
            <span className="mt-1.5 hidden sm:block text-[11px] font-medium text-foreground/80">
              {s.label}
            </span>
            <span
              className={`mt-0.5 text-[10px] font-medium ${
                s.status === 'complete'
                  ? 'text-success'
                  : s.status === 'in_progress'
                  ? 'text-accent-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              {STATUS_TEXT[s.status]}
            </span>
          </div>
        );
      })}
    </div>
  );
}