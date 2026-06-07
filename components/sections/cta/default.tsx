"use client";

import { cn } from "@/lib/utils";

import { DevfolioButton } from "../../ui/devfolio-button";
import Glow from "../../ui/glow";
import { LinkButton } from "../../ui/link-button";
import { Section } from "../../ui/section";

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: "default" | "glow" | "outline" | "secondary" | "link" | "destructive" | "ghost";
}

interface CTAProps {
  title?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

const DEFAULT_CTA_BUTTONS: CTAButtonProps[] = [
  {
    href: "https://discord.gg/arcnight",
    text: "JOIN DISCORD",
    variant: "default",
  },
];

export default function CTA({
  title = "READY TO ENTER THE ARCADE?",
  buttons = DEFAULT_CTA_BUTTONS,
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)} id="register">
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8 px-4 py-8">
        <h2 className="font-arcade text-glow-cyan max-w-[720px] text-2xl leading-tight font-extrabold text-primary sm:text-4xl sm:leading-tight">
          {title}
        </h2>
        <p className="font-retro text-lg text-muted-foreground max-w-[500px] tracking-wide leading-relaxed">
          Insert your coin. Join the player lobby. Code the future of retro design.
        </p>
        
        {/* Devfolio Apply Button Card */}
        <div className="w-full max-w-[480px] bg-[#110a2b]/80 border border-border/20 p-8 rounded-2xl neon-border-pink my-4 flex flex-col gap-6 items-center">
          <span className="font-arcade text-[9px] text-brand-foreground text-glow-amber tracking-widest uppercase">
            REGISTRATION INTERFACE
          </span>
          
          <div className="w-full flex justify-center py-2">
            <DevfolioButton theme="dark-inverted" />
          </div>

          <p className="text-[10px] text-muted-foreground font-sans text-center max-w-[320px] leading-relaxed">
            Applications are securely processed via Devfolio. Ensure your team profile and project tracks are updated.
          </p>
        </div>

        {buttons !== false && buttons.length > 0 && (
          <div className="flex justify-center gap-4 mt-2">
            {buttons.map((button) => (
              <LinkButton
                key={`${button.href}-${button.text}`}
                variant={button.variant || "default"}
                size="lg"
                href={button.href}
                className="font-arcade text-[10px] tracking-widest"
              >
                {button.text}
              </LinkButton>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[2rem] opacity-60 transition-all duration-500 ease-in-out group-hover:translate-y-[-1rem] group-hover:opacity-80">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
