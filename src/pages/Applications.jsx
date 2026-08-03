import React from 'react';
import ApplicationHero from '@/components/applications/ApplicationHero';
import ApplicationOverview from '@/components/applications/ApplicationOverview';
import EligibilityRecap from '@/components/applications/EligibilityRecap';
import ApplicationSteps from '@/components/applications/ApplicationSteps';
import SubmissionPathways from '@/components/applications/SubmissionPathways';
import DeadlineSection from '@/components/applications/DeadlineSection';
import ApplicationFAQ from '@/components/applications/ApplicationFAQ';
import CTABand from '@/components/home/CTABand';

export default function Applications() {
  return (
    <div>
      <ApplicationHero />
      <ApplicationOverview />
      <EligibilityRecap />
      <ApplicationSteps />
      <SubmissionPathways />
      <DeadlineSection />
      <ApplicationFAQ />
      <CTABand />
    </div>
  );
}