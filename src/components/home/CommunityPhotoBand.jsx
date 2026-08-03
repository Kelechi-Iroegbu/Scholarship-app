import React from 'react';
import { Image } from '@/components/ui/image';

export default function CommunityPhotoBand() {
  return (
    <section className="w-full h-[40vh] min-h-[280px] relative">
      <Image
        src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80"
        alt="Placeholder: community and campus event"
        className="absolute inset-0 w-full h-full object-cover"
        fittingType="fill"
      />
    </section>
  );
}