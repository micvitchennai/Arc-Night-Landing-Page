/* eslint-disable @next/next/no-img-element */
"use client";

import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../../ui/sheet";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"] | "glow";
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  className?: string;
}

export default function Navbar({
  logo = <img src="/favicon.png" alt="MIC" className="size-6 object-contain animate-pulse" />,
  name = "ARCNIGHT",
  homeUrl = "#",
  mobileLinks = [
    { text: "About", href: "#about" },
    { text: "Prizes", href: "#prizes" },
    { text: "Rules", href: "#rules" },
    { text: "Schedule", href: "#schedule" },
    { text: "FAQ", href: "#faq" },
    { text: "Contacts", href: "#contact" },
  ],
  actions = [
    {
      text: "REGISTER NOW",
      href: "#register",
      isButton: true,
      variant: "glow",
    },
  ],
  showNavigation = true,
  className,
}: NavbarProps) {
  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div className="fade-bottom bg-background/25 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent className="border-b border-border/20 px-4">
          <NavbarLeft>
            <a
              href={homeUrl}
              className="font-arcade text-glow-cyan flex items-center gap-2 text-lg font-bold tracking-wider uppercase text-primary"
            >
              {logo}
              <span>{name}</span>
            </a>
            {showNavigation && (
              <div className="hidden items-center gap-6 text-sm font-medium md:flex ml-8">
                {mobileLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="font-retro text-foreground/95 hover:text-primary text-xl tracking-wide transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </NavbarLeft>
          <NavbarRight>
            {actions.map((action) => (
              <Button
                key={`${action.href}-${action.text}`}
                variant={action.variant || "default"}
                asChild
                className="font-arcade text-[10px] tracking-widest neon-border-cyan"
              >
                <a href={action.href}>
                  {action.icon}
                  {action.text}
                  {action.iconRight}
                </a>
              </Button>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden border border-border/20"
                >
                  <Menu className="size-5 text-primary" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 border-l border-border/20 backdrop-blur-md">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <nav className="grid gap-6 text-lg font-medium pt-8">
                  <a
                    href={homeUrl}
                    className="font-arcade text-glow-cyan flex items-center gap-2 text-lg font-bold text-primary mb-4"
                  >
                    {logo}
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link) => (
                    <a
                      key={`${link.href}-${link.text}`}
                      href={link.href}
                      className="font-retro text-muted-foreground hover:text-primary hover:text-glow-cyan text-2xl tracking-wide transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}

