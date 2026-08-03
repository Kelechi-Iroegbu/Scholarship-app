import React, { useState } from 'react';
import { Image } from '@/components/ui/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { programTabs } from './programTabsData';

function TabPanelContent({ tab }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-muted-foreground leading-relaxed">{tab.paragraph}</p>
        <ul className="mt-5 space-y-2">
          {tab.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={tab.photo}
        alt={`Placeholder photo for ${tab.label}`}
        className="w-full aspect-[4/3] rounded-lg object-cover"
        fittingType="fill"
      />
    </div>
  );
}

export default function ProgramTabs() {
  const [active, setActive] = useState(programTabs[0].key);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-center">
        Our Programs
      </h2>

      {/* Tabs — tablet and up */}
      <div className="hidden md:block mt-10">
        <Tabs value={active} onValueChange={setActive}>
          <TabsList className="flex w-full flex-wrap justify-center gap-2 bg-transparent h-auto">
            {programTabs.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-4 py-2 text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {programTabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key} className="mt-8">
              <TabPanelContent tab={tab} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Accordion — below tablet */}
      <div className="md:hidden mt-8">
        <Accordion type="single" collapsible>
          {programTabs.map((tab) => (
            <AccordionItem key={tab.key} value={tab.key}>
              <AccordionTrigger className="text-left font-medium">{tab.label}</AccordionTrigger>
              <AccordionContent>
                <TabPanelContent tab={tab} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}