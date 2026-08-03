import * as React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Site-wide scroll reveal: every <section> under <main> fades up the first
 * time it enters the viewport, with no per-component wiring required.
 * Opt a section out with the `no-reveal` class — used by above-the-fold
 * hero sections, which are visible without scrolling and (for the home
 * page hero) already have their own on-load entrance.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  // useLayoutEffect, not useEffect: the `reveal` class must land before the
  // browser's first paint of the new route, or sections flash fully visible
  // for a frame and then vanish before IntersectionObserver ever sees them.
  React.useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = document.querySelectorAll('main section:not(.no-reveal)');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
