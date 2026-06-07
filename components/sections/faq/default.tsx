import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "COMMON QUESTIONS",
  items = [
    {
      question: "What is Arcnight?",
      answer: (
        <>
          <p className="text-foreground/80 mb-4 max-w-[640px] leading-relaxed">
            Arcnight is a 24-hour online hackathon where developers, designers, and creators collaborate to design, develop, and deploy a complete website or web application from scratch. 
          </p>
          <p className="text-foreground/80 mb-4 max-w-[640px] leading-relaxed">
            The design theme for this edition is <strong>Retro Arcade</strong>. Your submissions should draw inspiration from classic 8-bit games, synthwave style, or arcade cabinet interfaces.
          </p>
        </>
      ),
    },
    {
      question: "Who can participate?",
      answer: (
        <p className="text-foreground/80 mb-4 max-w-[640px] leading-relaxed">
          The hackathon is open to students, hobbyists, and professionals from all over. Whether you specialize in UI/UX design, frontend development, backend systems, or writing copy, there is a place for you.
        </p>
      ),
    },
    {
      question: "What is the team size requirement?",
      answer: (
        <p className="text-foreground/80 mb-4 max-w-[640px] leading-relaxed">
          Teams must consist of exactly 3 to 4 members. Solo entries or teams outside this range will not be eligible for the main prizes.
        </p>
      ),
    },
    {
      question: "Is there any registration fee?",
      answer: (
        <p className="text-foreground/80 mb-4 max-w-[640px] leading-relaxed">
          No! Arcnight is 100% free to register and participate. You will also get access to learning resources, community lounges, and mentoring sessions.
        </p>
      ),
    },
    {
      question: "What technology stack can we use?",
      answer: (
        <p className="text-foreground/80 mb-4 max-w-[640px] leading-relaxed">
          You are free to use any tools, libraries, or frameworks (React, Next.js, Vue, Svelte, Tailwind CSS, Python, Node, etc.). The only requirement is that the final project must be hosted online and accessible via a public URL, with code version-controlled in a public GitHub repository.
        </p>
      ),
    },
    {
      question: "How will projects be judged?",
      answer: (
        <p className="text-foreground/80 mb-4 max-w-[640px] leading-relaxed">
          Projects will be evaluated by our panel of judges based on: Adherence to the Retro Arcade UI Theme (30%), Technical execution and performance (30%), Creativity & originality (20%), and Completeness & UX (20%).
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className} id="faq">
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 px-4">
        <h2 className="font-arcade text-glow-cyan text-center text-2xl font-extrabold text-primary sm:text-4xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full decoration-nonemax-w-[800px] bg-card/40 border border-border/20 p-6 rounded-2xl neon-border-cyan">
            {items.map((item, index) => (
              <AccordionItem
                key={item.value ?? item.question}
                value={item.value || `item-${index + 1}`}
                className="border-b border-border/20"
              >
                <AccordionTrigger className="font-retro text-xl font-medium hover:text-primary transition-colors text-left py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-foreground/80 text-sm pt-2 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
