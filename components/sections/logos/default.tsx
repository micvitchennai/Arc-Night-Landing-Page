/* eslint-disable @next/next/no-img-element */
import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

export default function Logos({ className }: { className?: string }) {
  return (
    <Section className={className} id="sponsors">
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-16 text-center px-4">
        
        {/* Presenters / Organizers */}
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline" className="border-brand/40 text-brand bg-brand/5">
            <span className="font-arcade text-[8px] tracking-wider text-glow-pink">ORGANIZERS</span>
          </Badge>
          <h2 className="font-retro text-2xl md:text-3xl font-semibold tracking-wider text-muted-foreground">
            PRESENTED BY
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 bg-card/40 border border-border/20 p-6 md:p-8 rounded-2xl neon-border-cyan max-w-[680px] mx-auto">
            {/* MIC Logo */}
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src="https://h8z6stjynz.ufs.sh/f/nEev6VX4XfKENEfmQvcJYjwsBLCbSNUMGi76gpR4tA0OayfV" 
                alt="MIC" 
                className="h-[38px] md:h-[50px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
            
            <div className="h-8 w-[1px] bg-border/20 hidden sm:block" />

            {/* Microcraft Logo */}
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <img 
                src="https://h8z6stjynz.ufs.sh/f/nEev6VX4XfKEEBFgnrzHSbAfolN0Uc2Ti7Iud45D3KhyjMga" 
                alt="Microcraft" 
                className="h-[17px] md:h-[22px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
              <span className="text-[7px] md:text-[9px] text-muted-foreground tracking-widest font-sans font-bold bg-[#ff007f]/5 border border-brand/20 px-2.5 py-1.5 rounded-md shrink-0">
                10 EVENTS • 2 HACKATHONS
              </span>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline" className="border-brand/40 text-brand bg-brand/5">
            <span className="font-arcade text-[8px] tracking-wider text-glow-pink">LEVEL PARTNERS</span>
          </Badge>
          <h2 className="font-retro text-2xl md:text-3xl font-semibold tracking-wider text-muted-foreground">
            OUR SPONSORS
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 bg-card/40 border border-border/20 p-8 md:p-10 rounded-2xl neon-border-pink max-w-[900px] mx-auto">
            {/* Gemini */}
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src="https://h8z6stjynz.ufs.sh/f/nEev6VX4XfKEui3jPuz4GRJyS3pjE8dT6PNtDZVeIqY7LOAF" 
                alt="Gemini" 
                className="h-[17px] md:h-[22px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
            
            {/* HackerRank */}
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src="https://h8z6stjynz.ufs.sh/f/nEev6VX4XfKEkhQQMccaHF5hwn3uCcqPm4ORVQJW8SBvgpL0" 
                alt="HackerRank" 
                className="h-[14px] md:h-[19px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>

            {/* XYZ */}
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src="https://h8z6stjynz.ufs.sh/f/nEev6VX4XfKEQEDVFkl1Hn7zksoqKEgIFuwlcDyadAj6SP0V" 
                alt="XYZ" 
                className="h-[34px] md:h-[45px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>

            {/* Devfolio */}
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src="https://h8z6stjynz.ufs.sh/f/nEev6VX4XfKEkjsjQpaHF5hwn3uCcqPm4ORVQJW8SBvgpL0A" 
                alt="Devfolio" 
                className="h-[20px] md:h-[27px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
