/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { DevfolioButton } from "../../ui/devfolio-button";
import Glow from "../../ui/glow";
import { LinkButton } from "../../ui/link-button";
import { Section } from "../../ui/section";

interface HeroProps {
  title?: string;
  description?: string;
  className?: string;
}

function CountdownTimer() {
  const targetDate = new Date("2026-06-13T16:00:00+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, targetDate]);

  if (!mounted) return null;

  const formatNum = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="font-arcade flex items-center justify-center gap-3 md:gap-4 text-center select-none py-2">
      {[
        { label: "DAYS", val: timeLeft.days },
        { label: "HOURS", val: timeLeft.hours },
        { label: "MINS", val: timeLeft.minutes },
        { label: "SECS", val: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-[#110a2b] border border-brand/40 neon-border-pink text-brand text-glow-pink px-3 py-2 md:px-4 md:py-3 rounded-lg text-xl md:text-3xl font-bold min-w-[60px] md:min-w-[80px]">
            {formatNum(item.val)}
          </div>
          <span className="text-[8px] md:text-[9px] text-muted-foreground mt-2 tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function ArcadeConsole() {
  const [coins, setCoins] = useState(0);
  const [hacked, setHacked] = useState(false);

  return (
    <div className="scanlines relative mx-auto w-full max-w-[760px] bg-[#110826] border-4 border-primary rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(0,240,255,0.25)] p-4 md:p-6 flex flex-col gap-4 md:gap-6 select-none">
      {/* Cabinet Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-3 md:pb-4">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-brand animate-ping" />
          <span className="font-arcade text-[8px] md:text-[10px] text-primary tracking-widest uppercase">
            ARCNIGHT // SYS_READY
          </span>
        </div>
        <div className="font-arcade text-[8px] md:text-[10px] text-brand tracking-widest uppercase">
          CREDITS: {coins}
        </div>
      </div>

      {/* Screen */}
      <div className="relative bg-[#060310] border border-primary/20 rounded-xl p-4 md:p-6 min-h-[260px] md:min-h-[300px] flex flex-col justify-between overflow-hidden">
        {/* Retro Grid Background */}
        <div className="absolute inset-0 retro-grid opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />

        {/* Screen Text */}
        <div className="relative z-10 flex flex-col gap-3 font-retro text-lg md:text-2xl text-left leading-relaxed">
          {hacked ? (
            <div className="flex flex-col gap-3 text-glow-cyan text-primary font-arcade text-center py-6 md:py-8 items-center">
              <span className="text-xl md:text-3xl">ACCESS GRANTED</span>
              <span className="text-[10px] md:text-xs tracking-widest text-brand-foreground text-glow-amber mt-1 uppercase">
                Ready Player One
              </span>
              <div className="w-full flex justify-center mt-4">
                <DevfolioButton theme="dark-inverted" />
              </div>
            </div>
          ) : (
            <>
              <p className="text-primary text-glow-cyan font-arcade text-xs md:text-sm mb-1">
                &gt; INITIALIZING ARCNIGHT...
              </p>
              <p className="text-foreground">
                &gt; MISSION: <span className="text-brand-foreground text-glow-amber">BUILD A WEB APP IN 24H</span>
              </p>
              <p className="text-foreground">
                &gt; STATUS: <span className="text-brand text-glow-pink">STARTING JUNE 13</span>
              </p>
              <p className="text-foreground">
                &gt; LEVEL THEME: <span className="text-primary text-glow-cyan">RETRO ARCADE</span>
              </p>
              <p className="text-foreground/90 text-sm font-sans mt-2 md:mt-4 leading-normal">
                An online hackathon presented by MIC as part of Microcraft (a series of 10 events & 2 hackathons). Build anything matching the retro arcade aesthetic.
              </p>
            </>
          )}
        </div>

        {/* Screen footer */}
        <div className="relative z-10 flex justify-between items-end mt-4">
          <div className="font-arcade text-[8px] md:text-[9px] text-foreground/80 flex flex-col gap-1 text-left">
            <span>TEAM SIZE: 3-4</span>
            <span>ENTRY: 100% FREE</span>
          </div>
          <div>
            {!hacked ? (
              <button
                onClick={() => {
                  setCoins((c) => c + 1);
                  setHacked(true);
                }}
                className="font-arcade text-[9px] md:text-[11px] bg-brand text-primary-foreground hover:bg-brand/80 font-bold px-4 py-2 rounded-lg border-2 border-brand-foreground animate-pulse tracking-widest cursor-pointer shadow-[0_0_15px_rgba(255,0,127,0.4)]"
              >
                INSERT COIN
              </button>
            ) : (
              <span className="font-arcade text-[8px] md:text-[10px] text-primary text-glow-cyan animate-pulse">
                SYS_ACTIVE
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Controllers block */}
      <div className="flex items-center justify-between border-t border-primary/20 pt-3 md:pt-4 px-2">
        <div className="flex gap-2">
          {/* Directional Pad representation */}
          <div className="grid grid-cols-3 gap-1 size-10 relative bg-primary/5 p-1 rounded-md">
            <div className="col-start-2 bg-primary/20 rounded-sm" />
            <div className="col-start-1 row-start-2 bg-primary/20 rounded-sm" />
            <div className="col-start-2 row-start-2 bg-primary/50 rounded-sm" />
            <div className="col-start-3 row-start-2 bg-primary/20 rounded-sm" />
            <div className="col-start-2 row-start-3 bg-primary/20 rounded-sm" />
          </div>
        </div>
        <div className="flex gap-3">
          {/* Action buttons */}
          <div className="flex flex-col items-center gap-1">
            <div className="size-5 md:size-6 rounded-full bg-brand border border-brand-foreground shadow-[0_0_5px_rgba(255,0,127,0.5)] cursor-pointer active:scale-90" />
            <span className="font-arcade text-[6px] text-muted-foreground">A</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="size-5 md:size-6 rounded-full bg-primary border border-ring shadow-[0_0_5px_rgba(0,240,255,0.5)] cursor-pointer active:scale-90" />
            <span className="font-arcade text-[6px] text-muted-foreground">B</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({
  title = "ARCNIGHT",
  description = "DESIGN, DEVELOP, AND DEPLOY A COMPLETE WEBSITE OR WEB APP WITHIN 24 HOURS.",
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-12 sm:pb-16 md:pb-20 pt-8",
        className,
      )}
      id="about"
    >
      <div className="max-w-container mx-auto flex flex-col gap-8 md:gap-12 pt-8 sm:pt-12">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
          
          {/* Retro badge */}
          <Badge variant="outline" className="border-brand/50 text-brand py-1 px-3 bg-[#ff007f]/5 flex items-center gap-2">
            <img src="/favicon.png" alt="MIC" className="size-3.5 object-contain animate-pulse" />
            <span className="font-arcade text-[8px] md:text-[10px] tracking-widest text-glow-pink">
              SYSTEM ONLINE • HACKING STARTS JUNE 13
            </span>
          </Badge>

          {/* Glowing Retro Title */}
          <h1 className="font-arcade text-glow-cyan relative z-10 inline-block text-4xl leading-normal font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-white via-primary to-brand sm:text-6xl sm:leading-normal md:text-8xl md:leading-normal drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            {title}
          </h1>

          {/* Subtitle Tagline */}
          <p className="font-retro text-lg md:text-3xl tracking-wide max-w-[800px] leading-relaxed text-[#e2dcff] mt-2">
            {description}
          </p>

          {/* Countdown timer */}
          <CountdownTimer />

          {/* Action buttons */}
          <div className="relative z-10 flex justify-center gap-4 mt-4">
            <LinkButton
              variant="glow"
              size="lg"
              href="#register"
              className="font-arcade text-xs tracking-widest px-6 py-4 neon-border-cyan"
            >
              REGISTER NOW
            </LinkButton>
          </div>

          {/* Interactive Arcade cabinet mockup */}
          <div className="relative w-full pt-8 md:pt-12">
            <ArcadeConsole />
            <Glow
              variant="top"
              className="opacity-0 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
