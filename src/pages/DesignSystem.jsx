import React from 'react';

// Self-contained design system reference for the Anna Nnenna Egbe Queen Heart of Peace Educational Foundation.
// All colors, spacing, and type live in CSS variables below so they can be
// copied straight into index.css / tailwind.config.js later.

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap');

  .ds-root {
    --ds-cream-50: #FBF8F2;
    --ds-cream-100: #F5EFE3;
    --ds-charcoal-700: #3A352E;
    --ds-charcoal-800: #29251F;
    --ds-charcoal-900: #1C1915;

    --ds-primary-50: #E8EFE9;
    --ds-primary-100: #C6D8C9;
    --ds-primary-300: #6D9A76;
    --ds-primary-500: #2F5D3A;
    --ds-primary-600: #24492D;
    --ds-primary-700: #1B3722;

    --ds-secondary-50: #FBEEE4;
    --ds-secondary-100: #F2D2B8;
    --ds-secondary-300: #D99A5E;
    --ds-secondary-500: #B5622C;
    --ds-secondary-600: #954E22;
    --ds-secondary-700: #743C1B;

    --ds-accent-50: #FBF1DC;
    --ds-accent-300: #E4BE72;
    --ds-accent-500: #C99A3B;
    --ds-accent-600: #A87D2A;

    --ds-neutral-50: #FBF8F2;
    --ds-neutral-100: #F0EBE0;
    --ds-neutral-200: #E1D9C8;
    --ds-neutral-300: #C8BEA9;
    --ds-neutral-500: #8C8272;
    --ds-neutral-700: #5A5348;
    --ds-neutral-900: #1C1915;

    --ds-success-50: #E9F2E6;
    --ds-success-500: #3E7C3B;
    --ds-success-700: #2A5628;

    --ds-error-50: #FBEAE6;
    --ds-error-500: #A13D2B;
    --ds-error-700: #7A2C1E;

    --ds-space-1: 4px;
    --ds-space-2: 8px;
    --ds-space-3: 16px;
    --ds-space-4: 24px;
    --ds-space-5: 32px;
    --ds-space-6: 48px;
    --ds-space-7: 64px;
    --ds-space-8: 96px;

    --ds-font-heading: 'Fraunces', Georgia, serif;
    --ds-font-body: 'Work Sans', ui-sans-serif, system-ui, sans-serif;

    background: var(--ds-cream-50);
    color: var(--ds-charcoal-900);
    font-family: var(--ds-font-body);
    line-height: 1.6;
  }

  .ds-container { max-width: 1120px; margin: 0 auto; padding: 0 var(--ds-space-4); }
  @media (max-width: 640px) { .ds-container { padding: 0 var(--ds-space-3); } }

  .ds-section { padding: var(--ds-space-7) 0; border-bottom: 1px solid var(--ds-neutral-200); }
  .ds-section-title { font-family: var(--ds-font-heading); font-weight: 600; font-size: 28px; margin-bottom: var(--ds-space-1); color: var(--ds-primary-700); }
  .ds-section-sub { color: var(--ds-neutral-700); margin-bottom: var(--ds-space-5); font-size: 15px; }

  .ds-swatch-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--ds-space-3); }
  .ds-swatch { border-radius: 10px; overflow: hidden; border: 1px solid var(--ds-neutral-200); }
  .ds-swatch-color { height: 64px; }
  .ds-swatch-label { padding: var(--ds-space-2) var(--ds-space-3); background: #fff; font-size: 13px; }
  .ds-swatch-label b { display: block; font-size: 13px; }
  .ds-swatch-label span { color: var(--ds-neutral-500); font-size: 12px; letter-spacing: 0.02em; }

  .ds-h1 { font-family: var(--ds-font-heading); font-weight: 700; font-size: 56px; line-height: 1.08; letter-spacing: -0.01em; margin: 0 0 var(--ds-space-3); }
  .ds-h2 { font-family: var(--ds-font-heading); font-weight: 700; font-size: 42px; line-height: 1.12; letter-spacing: -0.01em; margin: 0 0 var(--ds-space-3); }
  .ds-h3 { font-family: var(--ds-font-heading); font-weight: 600; font-size: 32px; line-height: 1.18; margin: 0 0 var(--ds-space-2); }
  .ds-h4 { font-family: var(--ds-font-heading); font-weight: 600; font-size: 24px; line-height: 1.25; margin: 0 0 var(--ds-space-2); }
  .ds-h5 { font-family: var(--ds-font-heading); font-weight: 600; font-size: 20px; line-height: 1.3; margin: 0 0 var(--ds-space-1); }
  .ds-h6 { font-family: var(--ds-font-heading); font-weight: 600; font-size: 16px; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 var(--ds-space-1); }
  .ds-body { font-size: 17px; margin: 0 0 var(--ds-space-3); max-width: 640px; color: var(--ds-charcoal-800); }
  .ds-small { font-size: 13px; color: var(--ds-neutral-500); letter-spacing: 0.01em; }

  .ds-row { display: flex; flex-wrap: wrap; gap: var(--ds-space-3); align-items: center; }

  .ds-btn { font-family: var(--ds-font-body); font-weight: 600; font-size: 15px; letter-spacing: 0.01em; border-radius: 8px; padding: 12px 22px; cursor: pointer; border: none; transition: opacity .15s ease; }
  .ds-btn-primary { background: var(--ds-primary-600); color: var(--ds-cream-50); }
  .ds-btn-primary:hover { opacity: 0.9; }
  .ds-btn-secondary { background: transparent; color: var(--ds-primary-700); border: 1.5px solid var(--ds-primary-600); }
  .ds-btn-secondary:hover { background: var(--ds-primary-50); }
  .ds-link { color: var(--ds-secondary-600); font-weight: 600; text-decoration: underline; text-decoration-color: var(--ds-secondary-300); text-underline-offset: 3px; }

  .ds-field { display: flex; flex-direction: column; gap: 6px; width: 260px; }
  .ds-field label { font-size: 13px; font-weight: 600; color: var(--ds-charcoal-800); }
  .ds-input { font-family: var(--ds-font-body); font-size: 15px; padding: 11px 14px; border-radius: 8px; border: 1.5px solid var(--ds-neutral-300); background: #fff; outline: none; }
  .ds-input:focus { border-color: var(--ds-primary-500); box-shadow: 0 0 0 3px var(--ds-primary-50); }
  .ds-input-error { border-color: var(--ds-error-500); background: var(--ds-error-50); }
  .ds-error-msg { font-size: 12.5px; color: var(--ds-error-700); }
  .ds-success-msg { font-size: 12.5px; color: var(--ds-success-700); }

  .ds-card { background: #fff; border: 1px solid var(--ds-neutral-200); border-radius: 14px; padding: var(--ds-space-4); width: 280px; }
  .ds-card-eyebrow { color: var(--ds-secondary-600); font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: var(--ds-space-1); }

  .ds-badge { display: inline-flex; align-items: center; font-size: 12.5px; font-weight: 600; padding: 5px 12px; border-radius: 999px; }
  .ds-badge-primary { background: var(--ds-primary-50); color: var(--ds-primary-700); }
  .ds-badge-secondary { background: var(--ds-secondary-50); color: var(--ds-secondary-700); }
  .ds-badge-accent { background: var(--ds-accent-50); color: var(--ds-accent-600); }

  .ds-divider { border: none; border-top: 1px solid var(--ds-neutral-200); margin: var(--ds-space-5) 0; }
  .ds-divider-accent { border: none; height: 3px; width: 64px; background: var(--ds-secondary-500); margin: var(--ds-space-4) 0; border-radius: 2px; }

  .ds-space-demo { display: flex; align-items: flex-end; gap: var(--ds-space-3); flex-wrap: wrap; }
  .ds-space-bar { background: var(--ds-primary-300); border-radius: 3px; }
  .ds-space-bar-label { font-size: 12px; color: var(--ds-neutral-500); margin-top: 6px; text-align: center; }

  .ds-grid-demo { display: grid; grid-template-columns: repeat(12, 1fr); gap: 12px; }
  .ds-grid-col { background: var(--ds-primary-50); border: 1px dashed var(--ds-primary-300); border-radius: 6px; height: 48px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: var(--ds-primary-600); }
`;

const colorGroups = [
  { name: 'Primary — Forest Green', items: [
    ['50', 'var(--ds-primary-50)'], ['100', 'var(--ds-primary-100)'], ['300', 'var(--ds-primary-300)'],
    ['500', 'var(--ds-primary-500)'], ['600', 'var(--ds-primary-600)'], ['700', 'var(--ds-primary-700)'],
  ]},
  { name: 'Secondary — Terracotta', items: [
    ['50', 'var(--ds-secondary-50)'], ['100', 'var(--ds-secondary-100)'], ['300', 'var(--ds-secondary-300)'],
    ['500', 'var(--ds-secondary-500)'], ['600', 'var(--ds-secondary-600)'], ['700', 'var(--ds-secondary-700)'],
  ]},
  { name: 'Accent — Ochre Gold', items: [
    ['50', 'var(--ds-accent-50)'], ['300', 'var(--ds-accent-300)'], ['500', 'var(--ds-accent-500)'], ['600', 'var(--ds-accent-600)'],
  ]},
  { name: 'Neutral — Warm Grey', items: [
    ['50', 'var(--ds-neutral-50)'], ['100', 'var(--ds-neutral-100)'], ['200', 'var(--ds-neutral-200)'],
    ['300', 'var(--ds-neutral-300)'], ['500', 'var(--ds-neutral-500)'], ['700', 'var(--ds-neutral-700)'], ['900', 'var(--ds-neutral-900)'],
  ]},
  { name: 'Success', items: [['50', 'var(--ds-success-50)'], ['500', 'var(--ds-success-500)'], ['700', 'var(--ds-success-700)']] },
  { name: 'Error', items: [['50', 'var(--ds-error-50)'], ['500', 'var(--ds-error-500)'], ['700', 'var(--ds-error-700)']] },
];

const spaceScale = [
  ['4px', 'var(--ds-space-1)'], ['8px', 'var(--ds-space-2)'], ['16px', 'var(--ds-space-3)'],
  ['24px', 'var(--ds-space-4)'], ['32px', 'var(--ds-space-5)'], ['48px', 'var(--ds-space-6)'],
  ['64px', 'var(--ds-space-7)'], ['96px', 'var(--ds-space-8)'],
];

export default function DesignSystem() {
  return (
    <div className="ds-root">
      <style>{styles}</style>

      <div className="ds-container" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <div className="ds-h6" style={{ color: 'var(--ds-secondary-600)' }}>AGU EGBE FOUNDATION</div>
        <h1 className="ds-h1">Design System</h1>
        <p className="ds-body">Colors, type, and components for the Hardship Scholarship program — earthy, dignified, rooted in Ovim's Igbo community identity. Fonts: <strong>Fraunces</strong> (headings) + <strong>Work Sans</strong> (body), loaded via Google Fonts.</p>
      </div>

      <div className="ds-section">
        <div className="ds-container">
          <div className="ds-section-title">Color Palette</div>
          <div className="ds-section-sub">Deep greens, terracotta and ochre against warm cream — grounded, optimistic, never generic.</div>
          {colorGroups.map((group) => (
            <div key={group.name} style={{ marginBottom: 28 }}>
              <div className="ds-h6" style={{ color: 'var(--ds-neutral-700)' }}>{group.name}</div>
              <div className="ds-swatch-grid">
                {group.items.map(([label, color]) => (
                  <div className="ds-swatch" key={label}>
                    <div className="ds-swatch-color" style={{ background: color }} />
                    <div className="ds-swatch-label"><b>{label}</b><span>{color.replace('var(--ds-', '').replace(')', '')}</span></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section">
        <div className="ds-container">
          <div className="ds-section-title">Typography</div>
          <div className="ds-section-sub">Fraunces brings warmth and character to headings; Work Sans keeps body copy and forms highly legible.</div>
          <h1 className="ds-h1">H1 — Opportunity rooted in Ovim</h1>
          <h2 className="ds-h2">H2 — Supporting first-year scholars</h2>
          <h3 className="ds-h3">H3 — Application timeline</h3>
          <h4 className="ds-h4">H4 — Eligibility requirements</h4>
          <h5 className="ds-h5">H5 — Document checklist</h5>
          <h6 className="ds-h6">H6 — Section Label</h6>
          <p className="ds-body">Body text — The Hardship Scholarship supports first-year undergraduate indigenes of Ovim, Isuikwuato LGA, as they begin their studies. This paragraph shows real line-height and measure for comfortable reading.</p>
          <p className="ds-small">Small print — Applications open annually; see the eligibility page for full criteria and deadlines.</p>
          <button className="ds-btn ds-btn-primary">Button Text</button>
        </div>
      </div>

      <div className="ds-section">
        <div className="ds-container">
          <div className="ds-section-title">Components</div>
          <div className="ds-section-sub">Buttons, links, form states, cards, badges, and dividers.</div>

          <div className="ds-row" style={{ marginBottom: 32 }}>
            <button className="ds-btn ds-btn-primary">Apply Now</button>
            <button className="ds-btn ds-btn-secondary">Learn More</button>
            <a href="#" className="ds-link">View eligibility criteria →</a>
          </div>

          <div className="ds-row" style={{ marginBottom: 32 }}>
            <div className="ds-field">
              <label>Full Name</label>
              <input className="ds-input" placeholder="Default state" />
            </div>
            <div className="ds-field">
              <label>Email Address</label>
              <input className="ds-input" style={{ borderColor: 'var(--ds-primary-500)', boxShadow: '0 0 0 3px var(--ds-primary-50)' }} placeholder="Focused state" />
              <span className="ds-success-msg">Looks good</span>
            </div>
            <div className="ds-field">
              <label>School</label>
              <input className="ds-input ds-input-error" placeholder="Error state" />
              <span className="ds-error-msg">This field is required</span>
            </div>
          </div>

          <div className="ds-row" style={{ marginBottom: 32 }}>
            <div className="ds-card">
              <div className="ds-card-eyebrow">2026/2027 Cycle</div>
              <div className="ds-h5">Hardship Scholarship</div>
              <p className="ds-body" style={{ fontSize: 14, marginBottom: 12 }}>For first-year indigenes of Ovim beginning undergraduate study.</p>
              <span className="ds-badge ds-badge-primary">Applications Open</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="ds-badge ds-badge-primary">Open</span>
              <span className="ds-badge ds-badge-secondary">Under Review</span>
              <span className="ds-badge ds-badge-accent">Awarded</span>
            </div>
          </div>

          <div className="ds-h6" style={{ color: 'var(--ds-neutral-700)' }}>Section Divider</div>
          <hr className="ds-divider" />
          <hr className="ds-divider-accent" />
        </div>
      </div>

      <div className="ds-section" style={{ borderBottom: 'none' }}>
        <div className="ds-container">
          <div className="ds-section-title">Spacing &amp; Grid</div>
          <div className="ds-section-sub">8pt-based spacing scale and a 12-column responsive container (max-width 1120px).</div>

          <div className="ds-space-demo" style={{ marginBottom: 40 }}>
            {spaceScale.map(([label, val]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div className="ds-space-bar" style={{ width: 28, height: val }} />
                <div className="ds-space-bar-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="ds-grid-demo">
            {Array.from({ length: 12 }).map((_, i) => (
              <div className="ds-grid-col" key={i}>{i + 1}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}