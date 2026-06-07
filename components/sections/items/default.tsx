import {
  Clock,
  Code2,
  Gamepad2,
  Globe,
  HelpCircle,
  ShieldAlert,
  Trophy,
  Users2,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

const DEFAULT_ITEMS: ItemProps[] = [
  {
    title: "24-Hour Timeline",
    description: "Design, code, and deploy strictly within the 24-hour hacking period starting June 13th, 4:00 PM.",
    icon: <Clock className="size-5 stroke-1 text-brand text-glow-pink" />,
  },
  {
    title: "Teams of 3-4",
    description: "Collaborate in teams of 3 to 4 members. Solo participations or larger teams are disqualified.",
    icon: <Users2 className="size-5 stroke-1 text-brand-foreground text-glow-amber" />,
  },
  {
    title: "Open Tech Stack",
    description: "Use any frontend or backend frameworks (Next.js, React, Vue, Python, Node, Tailwind, etc.).",
    icon: <Code2 className="size-5 stroke-1 text-primary text-glow-cyan" />,
  },
  {
    title: "Code Originality",
    description: "All project code must be written during the hackathon. Plagiarism or pre-existing apps will be disqualified.",
    icon: <ShieldAlert className="size-5 stroke-1 text-brand text-glow-pink" />,
  },
  {
    title: "Interactive Submissions",
    description: "Provide a working link to your deployed web app/site and your public GitHub repository.",
    icon: <Globe className="size-5 stroke-1 text-brand-foreground text-glow-amber" />,
  },
  {
    title: "₹2 Lakhs Prize Pool",
    description: "Top 3 teams win rewards. All participants who participate will receive official certificates.",
    icon: <Trophy className="size-5 stroke-1 text-primary text-glow-cyan" />,
  },
  {
    title: "24/7 Coordinator Help",
    description: "Get assistance from our student coordinators and leads anytime during the 24-hour hack.",
    icon: <HelpCircle className="size-5 stroke-1 text-brand text-glow-pink" />,
  },
];

export default function Items({
  title = "RULES & GUIDELINES",
  items = DEFAULT_ITEMS,
  className,
}: ItemsProps) {
  return (
    <Section className={className} id="rules">
      <div className="max-w-container mx-auto flex flex-col items-center gap-10 sm:gap-16">
        <h2 className="font-arcade text-glow-cyan text-center text-2xl leading-tight font-extrabold text-primary sm:text-4xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <Item 
                key={item.title} 
                className="bg-card border border-border/20 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 neon-border-cyan flex flex-col gap-3 justify-between"
              >
                <div className="flex flex-col gap-3">
                  <ItemTitle className="font-retro text-2xl flex items-center gap-3 font-semibold text-foreground">
                    <ItemIcon className="bg-primary/5 p-2 rounded-lg border border-primary/20 shrink-0">
                      {item.icon}
                    </ItemIcon>
                    {item.title}
                  </ItemTitle>
                  <ItemDescription className="font-sans text-muted-foreground text-sm max-w-full leading-relaxed">
                    {item.description}
                  </ItemDescription>
                </div>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
