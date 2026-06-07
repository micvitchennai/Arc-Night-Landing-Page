import { Award, CheckCircle2,Medal, Trophy } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

interface PrizeCardProps {
  place: string;
  amount: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  borderColor: string;
  glowColor: string;
  textColor: string;
  badgeColor?: string;
  isPopular?: boolean;
}

function PrizeCard({
  place,
  amount,
  title,
  description,
  icon,
  features,
  borderColor,
  glowColor,
  textColor,
  badgeColor,
  isPopular = false,
}: PrizeCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 overflow-hidden rounded-2xl p-6 md:p-8 bg-[#110a2b]/70 border shadow-2xl transition-all duration-300 hover:scale-[1.03]",
        borderColor,
        glowColor,
        isPopular && "scale-105 md:scale-105 border-2"
      )}
    >
      {isPopular && (
        <span className={cn("absolute top-3 right-3 font-arcade text-[8px] tracking-widest px-2 py-1 rounded-full text-[#100a25]", badgeColor)}>
          CHAMPION
        </span>
      )}
      
      {/* Laser header separator */}
      <hr className={cn("absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent via-primary", isPopular && "via-brand-foreground")} />

      <header className="flex flex-col gap-2">
        <h3 className={cn("font-arcade text-xs tracking-widest uppercase flex items-center gap-2", textColor)}>
          {icon}
          {place}
        </h3>
        <p className="font-retro text-2xl text-foreground font-semibold mt-1">
          {title}
        </p>
        <p className="text-muted-foreground text-xs leading-relaxed mt-1">
          {description}
        </p>
      </header>

      <section className="flex flex-col gap-2 my-2">
        <div className="flex items-baseline gap-1">
          <span className="font-arcade text-glow-cyan text-primary text-xl font-bold">₹</span>
          <span className={cn("font-arcade text-3xl md:text-4xl font-bold tracking-tight", textColor)}>
            {amount}
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground tracking-widest font-arcade">CASH PRIZE VALUE</span>
      </section>

      <hr className="border-border/30" />

      <div className="flex-grow">
        <ul className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <li
              key={`${feature}-${index}`}
              className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed"
            >
              <CheckCircle2 className="text-primary size-4 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button variant={isPopular ? "default" : "glow"} size="lg" className="w-full mt-4 font-arcade text-[10px] tracking-widest" asChild>
        <a href="#register">LEVEL UP NOW</a>
      </Button>
    </div>
  );
}

export default function Pricing({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Section className={cn(className)} id="prizes">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 text-center">
          <h2 className="font-arcade text-glow-cyan text-3xl leading-tight font-extrabold text-primary sm:text-5xl sm:leading-tight">
            LEADERBOARD PRIZES
          </h2>
          <p className="font-retro text-lg text-muted-foreground max-w-[600px] tracking-wide mt-2">
            Claim your spot on the high scores list. Over ₹2 Lakhs in total value to be won.
          </p>
        </div>

        <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 pt-4 items-center">
          {/* 2nd Prize */}
          <PrizeCard
            place="2ND PLACE"
            title="Silver Runners"
            amount="60,000"
            description="Awarded to the second-highest scoring team."
            icon={<Award className="size-4 text-primary" />}
            features={[
              "₹60,000 Worth Tech Credits and Prices",
              "Runner Up Certificates",
              "HackerRank & Gemini Exclusice Certificates",
              "Access to MIC Outer Circle Community",
            ]}
            borderColor="border-border/20"
            glowColor="neon-border-cyan"
            textColor="text-primary text-glow-cyan"
          />

          {/* 1st Prize */}
          <PrizeCard
            place="1ST PLACE"
            title="Arcade Champions"
            amount="1,00,000"
            description="Awarded to the ultimate high-scorer project of the hackathon."
            icon={<Trophy className="size-5 text-brand-foreground" />}
            features={[
              "₹1,00,000 Worth Tech Credits and Prices",
              "Winner Certificates",
              "Exclusive HackerRank & Gemini Certificates",
              "Featured on Arcnight Hall of Fame",
              "Access to MIC Outer Circle Community",
            ]}
            borderColor="border-brand-foreground/30"
            glowColor="neon-border-amber shadow-[0_0_25px_rgba(255,176,0,0.15)]"
            textColor="text-brand-foreground text-glow-amber"
            badgeColor="bg-brand-foreground"
            isPopular={true}
          />

          {/* 3rd Prize */}
          <PrizeCard
            place="3RD PLACE"
            title="Bronze Runners"
            amount="40,000"
            description="Awarded to the third-highest scoring team."
            icon={<Medal className="size-4 text-brand" />}
            features={[
              "₹40,000 Worth Tech Credits and Prices",
              "Second Runner Up Certificates",
              "HackerRank & Gemini Exclusice Certificates",
              "Access to MIC Outer Circle Community",
            ]}
            borderColor="border-border/20"
            glowColor="neon-border-pink"
            textColor="text-brand text-glow-pink"
          />
        </div>
      </div>
    </Section>
  );
}
