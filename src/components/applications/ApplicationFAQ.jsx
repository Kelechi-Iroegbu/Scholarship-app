import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: "What if I don't have a JAMB result yet?",
    a: '[Confirm answer]',
  },
  {
    q: 'Can I apply if I schooled outside Isuikwuato LGA?',
    a: '[Confirm answer]',
  },
  {
    q: 'What counts as proof of indigeneship?',
    a: '[Confirm answer]',
  },
  {
    q: 'Can I submit some documents online and others in person?',
    a: '[Confirm answer]',
  },
  {
    q: 'Will I be notified if my application is incomplete?',
    a: '[Confirm answer]',
  },
];

export default function ApplicationFAQ() {
  return (
    <section className="py-14 sm:py-16 bg-muted">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 rounded-lg border border-border bg-card px-6 sm:px-8">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="font-heading text-base text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}