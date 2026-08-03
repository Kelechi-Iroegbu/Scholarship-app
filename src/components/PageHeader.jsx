import React from 'react';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-band text-band-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-band-foreground/75 text-base sm:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}