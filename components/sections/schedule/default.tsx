import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  badge?: string;
  color: string;
}

interface TimelineDay {
  day: string;
  date: string;
  events: TimelineEvent[];
}

const SCHEDULE_DATA: TimelineDay[] = [
  {
    day: "DAY 1",
    date: "SATURDAY, JUNE 13",
    events: [
      {
        time: "03:00 PM",
        title: "Opening Ceremony",
        description: "Orientation session, platform rules overview, and introductory talks.",
        badge: "LIVE",
        color: "text-primary border-primary/30",
      },
      {
        time: "04:00 PM",
        title: "Hacking Begins",
        description: "Official timer starts! Teams begin working on their retro arcade web apps.",
        badge: "START",
        color: "text-brand border-brand/30",
      },
      {
        time: "08:00 PM",
        title: "Mentor Session #1",
        description: "Progress review and technical assistance from industry experts.",
        color: "text-brand-foreground border-brand-foreground/30",
      },
      {
        time: "11:59 PM",
        title: "Midnight Progress Check",
        description: "Mandatory check-in for teams to submit their progress updates on Discord.",
        color: "text-brand border-brand/30",
      },
    ],
  },
  {
    day: "DAY 2",
    date: "SUNDAY, JUNE 14",
    events: [
      {
        time: "09:00 AM",
        title: "Mentor Session #2",
        description: "Final project polishing, hosting assist, and presentation prep.",
        color: "text-brand-foreground border-brand-foreground/30",
      },
      {
        time: "04:00 PM",
        title: "Hacking Ends & Submit",
        description: "Hacking window closes! Submit your GitHub link and live deployed URL.",
        badge: "DEADLINE",
        color: "text-brand border-brand/30",
      },
      {
        time: "05:00 PM",
        title: "Project Pitching",
        description: "Teams showcase their projects to the panel of judges online.",
        badge: "EVAL",
        color: "text-brand-foreground border-brand-foreground/30",
      },
      {
        time: "08:00 PM",
        title: "Results & Closing",
        description: "Announcement of the prize winners and closing remarks.",
        badge: "FINALE",
        color: "text-primary border-primary/30",
      },
    ],
  },
];

export default function Schedule() {
  return (
    <Section id="schedule" className="relative overflow-hidden">
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-16 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-arcade text-glow-cyan text-3xl leading-tight font-extrabold text-primary sm:text-5xl sm:leading-tight">
            QUEST TIMELINE
          </h2>
          <p className="font-retro text-lg text-muted-foreground max-w-[600px] tracking-wide mt-2">
            Stay on track. Complete the milestones to achieve the high score.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4 relative">
          {SCHEDULE_DATA.map((dayData) => (
            <div
              key={dayData.day}
              className="bg-[#110a2b]/30 border border-border/20 p-6 md:p-8 rounded-2xl neon-border-cyan flex flex-col gap-6"
            >
              <div className="flex justify-between items-baseline border-b border-border/20 pb-4">
                <h3 className="font-arcade text-lg text-primary text-glow-cyan">
                  {dayData.day}
                </h3>
                <span className="font-retro text-lg text-brand-foreground text-glow-amber">
                  {dayData.date}
                </span>
              </div>

              {/* Timeline Container */}
              <div className="flex flex-col gap-8 relative border-l border-border/20 pl-6 ml-3">
                {dayData.events.map((event, index) => (
                  <div key={`${event.title}-${index}`} className="relative group">
                    {/* Event Dot */}
                    <div className="absolute -left-[31px] top-1 size-3 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform" />
                    
                    <div className="flex flex-col gap-1.5 text-left">
                      <div className="flex items-center gap-3">
                        <span className="font-arcade text-xs text-brand text-glow-pink">
                          {event.time}
                        </span>
                        {event.badge && (
                          <Badge
                            variant="outline"
                            className={`font-arcade text-[7px] tracking-widest px-1.5 py-0.5 bg-background ${event.color}`}
                          >
                            {event.badge}
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-retro text-xl font-bold text-foreground mt-0.5 group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-foreground/85 text-xs leading-relaxed max-w-[450px]">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
