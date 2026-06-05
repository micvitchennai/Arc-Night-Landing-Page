/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  className?: string;
}

export default function FooterSection({
  logo = <img src="/favicon.png" alt="MIC" className="size-6 object-contain animate-pulse" />,
  name = "ARCNIGHT",
  columns = [
    {
      title: "Navigation",
      links: [
        { text: "About", href: "#about" },
        { text: "Sponsors", href: "#sponsors" },
        { text: "Prizes", href: "#prizes" },
        { text: "Rules", href: "#rules" },
        { text: "Schedule", href: "#schedule" },
        { text: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Faculty Coordinators",
      links: [
        { text: "Dr Anusha K", href: "#" },
        { text: "Dr Braveen", href: "#" },
      ],
    },
    {
      title: "Student Coordinators",
      links: [
        { text: "Preeti B R - 7397440445", href: "tel:7397440445" },
        { text: "Tarang - 6206305176", href: "tel:6206305176" },
      ],
    },
  ],
  copyright = "© 2026 Arcnight Hackathon. All rights reserved.",
  policies = [
    { text: "HackerRank Rules", href: "https://hackerrank.com" },
    { text: "Gemini Terms", href: "https://gemini.google" },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-[#070414] w-full px-4 border-t border-border/20 pt-8 pb-12", className)} id="contact">
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 pb-8">
            <FooterColumn className="col-span-1 md:col-span-1 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="font-arcade text-glow-cyan text-lg font-bold text-primary tracking-wider uppercase">{name}</h3>
              </div>
              <p className="font-retro text-sm text-muted-foreground tracking-wide mt-2 max-w-[240px] leading-relaxed">
                Design, develop, and deploy a complete website or web app within 24 hours. Theme: Retro Arcade.
              </p>
            </FooterColumn>
            {columns.map((column) => (
              <FooterColumn key={column.title} className="flex flex-col gap-3">
                <h3 className="font-arcade text-[8px] text-primary tracking-widest uppercase pb-1">{column.title}</h3>
                {column.links.map((link) => (
                  <a
                    key={`${link.href}-${link.text}`}
                    href={link.href}
                    className="font-retro text-muted-foreground hover:text-primary transition-colors text-base tracking-wide"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom className="border-t border-border/10 pt-6 flex flex-col sm:flex-row justify-between gap-4">
            <div className="font-retro text-sm text-muted-foreground tracking-wider">{copyright}</div>
            <div className="flex items-center gap-6">
              {policies.map((policy) => (
                <a 
                  key={`${policy.href}-${policy.text}`} 
                  href={policy.href}
                  className="font-retro text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
                >
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
