import { Section } from "../../ui/section";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

const DEFAULT_STATS: StatItemProps[] = [
  {
    label: "DURATION",
    value: "24",
    suffix: "hr",
    description: "Continuous hacking window",
  },
  {
    label: "PRIZE POOL",
    value: "2L",
    suffix: "Worth",
    description: "Cash prizes + certificates",
  },
  {
    label: "TEAM SIZE",
    value: "3-4",
    suffix: "devs",
    description: "Collaborative participation",
  },
  {
    label: "LOCATION",
    value: "ONLINE",
    description: "Participate from anywhere",
  },
];

export default function Stats({
  items = DEFAULT_STATS,
  className,
}: StatsProps) {
  return (
    <Section className={className} id="stats">
      <div className="container mx-auto max-w-[960px]">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 bg-[#110a2b]/40 border border-border/20 p-8 rounded-2xl neon-border-pink">
            {items.map((item) => (
              <div
                key={`${item.label}-${item.description}`}
                className="flex flex-col items-center text-center gap-2"
              >
                {item.label && (
                  <div className="font-arcade text-[9px] text-muted-foreground tracking-widest">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <div className="font-arcade text-glow-cyan bg-clip-text text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                    {item.value}
                  </div>
                  {item.suffix && (
                    <div className="font-arcade text-brand text-xs font-semibold tracking-wider">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="font-sans text-muted-foreground text-xs font-medium max-w-[150px]">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
