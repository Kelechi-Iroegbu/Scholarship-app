import React from 'react';
import { Image } from '@/components/ui/image';
import { Play } from 'lucide-react';

export default function TestimonialBand() {
  return (
    <section className="bg-band text-band-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <blockquote className="font-heading text-2xl sm:text-3xl leading-snug">
          "[Placeholder testimonial quote from a scholar about how the foundation changed the
          course of their education and life.]"
          <footer className="mt-6 text-sm font-body text-band-foreground/70 not-italic">
            — [Scholar Name], Class of [YEAR]
          </footer>
        </blockquote>
        <div className="relative rounded-lg overflow-hidden aspect-video group cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
            alt="Placeholder video thumbnail of a scholar sharing their story"
            className="w-full h-full object-cover"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/90">
              <Play className="h-7 w-7 text-band fill-band" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}