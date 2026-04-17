import heroVenue from "@/assets/hero-venue.jpg";
import { SearchBar } from "./SearchBar";

export const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroVenue}
          alt="Stunning industrial loft venue with golden hour light"
          className="w-full h-full object-cover scale-105 animate-[fade-in_1.2s_ease-out]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/95" />
      </div>

      <div className="container relative z-10 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          <p className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-5 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-sm border border-border/40 animate-fade-up">
            Spaces with stories
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight text-balance animate-fade-up [animation-delay:120ms]">
            Find a venue<br />
            <span className="italic text-primary">worth remembering.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed animate-fade-up [animation-delay:240ms]">
            Hand-picked lofts, studios, rooftops, and gardens for shoots, events,
            and gatherings that don't feel ordinary.
          </p>
        </div>

        <div className="mt-10 md:mt-14 animate-fade-up [animation-delay:360ms]">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};
