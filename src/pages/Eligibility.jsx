import React from 'react';
import PageHeader from '@/components/PageHeader';
import EligiblePrograms from '@/components/eligibility/EligiblePrograms';
import PartnerInstitutionBanner from '@/components/eligibility/PartnerInstitutionBanner';
import LocationSection from '@/components/eligibility/LocationSection';
import AwardsAvailabilityBanner from '@/components/eligibility/AwardsAvailabilityBanner';
import ApplicantEligibilitySplit from '@/components/eligibility/ApplicantEligibilitySplit';
import CTABand from '@/components/home/CTABand';

export default function Eligibility() {
  return (
    <div>
      <PageHeader
        title="Eligibility"
        subtitle="We look beyond grades to find students ready to lead with purpose."
      />

      <EligiblePrograms />
      <PartnerInstitutionBanner />
      <LocationSection />
      <AwardsAvailabilityBanner />
      <ApplicantEligibilitySplit />

      <CTABand />
    </div>
  );
}