import React from 'react';

export default function FoundersNote() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        A note from the founder
      </p>
      <div className="mt-6 space-y-5 text-foreground/85 text-lg leading-relaxed font-heading">
        <p>
          I grew up in a home where books were borrowed, not bought. The difference between
          the life I imagined and the one I could afford was a few thousand naira and someone
          willing to bet on me.
        </p>
        <p>
          That bet was made. And it changed everything.
        </p>
        <p className="text-base text-muted-foreground font-body not-italic">
          This foundation exists to make that same bet — for students who have done the work,
          who carry something bigger than themselves, and who simply need the door opened. We
          do not measure success by how many names we add to a list. We measure it by what
          those names go on to build.
        </p>
      </div>
      <p className="mt-8 font-heading text-base text-foreground">
        — Agu Godswill Egbe
        <span className="block text-sm font-body font-normal text-muted-foreground">
          Founder, AGU Godswill Egbe Foundation
        </span>
      </p>
    </section>
  );
}