import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  { q: 'Who can apply for this scholarship?', a: 'Indigent, first-year indigenes of Ovim who are resident in Ovim, completed secondary school in Isuikwuato LGA, and sat for the 2026 JAMB examination.' },
  { q: "Can I apply if I haven't gained admission yet?", a: 'You may start your application, but a university admission letter will be required to complete your submission.' },
  { q: 'Is the scholarship renewable?', a: 'This scholarship supports your first year of undergraduate study. Renewal for subsequent years is not guaranteed and depends on future foundation decisions.' },
  { q: 'How will I be informed if I am selected?', a: 'Selected applicants will be notified via email and can also check their status on their applicant dashboard.' },
  { q: 'Can I edit my application after submission?', a: 'No. Once submitted, applications cannot be edited. Please review carefully before submitting.' },
];

export default function CommonQuestions() {
  return (
    <div>
      <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
        Frequently Asked Questions
      </p>
      <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-foreground">
        Common Questions
      </h2>

      <div className="mt-8 rounded-lg border border-border bg-card px-6">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-foreground">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}