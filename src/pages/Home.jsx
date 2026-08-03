import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import WhoWeServe from '@/components/home/WhoWeServe';
import KeyFactsStrip from '@/components/home/KeyFactsStrip';
import ApplicationTimelinePreview from '@/components/home/ApplicationTimelinePreview';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <WhoWeServe />
      <KeyFactsStrip />
      <ApplicationTimelinePreview />
    </div>
  );
}