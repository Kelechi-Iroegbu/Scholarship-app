import React from 'react';
import ProgramHero from '@/components/program/ProgramHero';
import AboutProgram from '@/components/program/AboutProgram';
import ScholarshipBenefits from '@/components/program/ScholarshipBenefits';
import ApplicationTimelineStrip from '@/components/program/ApplicationTimelineStrip';
import WhoCanApply from '@/components/program/WhoCanApply';
import DocumentsToPrepare from '@/components/program/DocumentsToPrepare';
import SelectionProcess from '@/components/program/SelectionProcess';
import ContactHelp from '@/components/program/ContactHelp';
import CommonQuestions from '@/components/program/CommonQuestions';
import ProgramCTABand from '@/components/program/ProgramCTABand';

export default function Program() {
  return (
    <div>
      <ProgramHero />
      <AboutProgram />
      <ScholarshipBenefits />
      <ApplicationTimelineStrip />

      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-2">
          <WhoCanApply />
          <DocumentsToPrepare />
        </div>
      </section>

      <SelectionProcess />

      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-2">
          <ContactHelp />
          <CommonQuestions />
        </div>
      </section>

      <ProgramCTABand />
    </div>
  );
}