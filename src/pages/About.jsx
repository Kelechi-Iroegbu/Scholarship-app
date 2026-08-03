import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import FoundationStory from '@/components/about/FoundationStory';
import LeadershipSection from '@/components/about/LeadershipSection';
import YouthAssemblySection from '@/components/about/YouthAssemblySection';
import OurCommunitySection from '@/components/about/OurCommunitySection';
import ContactSection from '@/components/about/ContactSection';

export default function About() {
  return (
    <div>
      <AboutHero />
      <FoundationStory />
      <LeadershipSection />
      <YouthAssemblySection />
      <OurCommunitySection />
      <ContactSection />
    </div>
  );
}