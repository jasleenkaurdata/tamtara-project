import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-cafe.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Cozy Tamtara cafe interior with warm lighting and hanging plants"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-bark/30" />

      <div className="relative z-10 container flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> Dehradun · Since 2019
          </div>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] text-cream text-balance md:text-7xl lg:text-[5.5rem]">
            Where the hills <em className="not-italic text-accent">brew</em> their finest stories.
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/85 md:text-lg">
            A cozy, nature-inspired hideaway in the heart of Dehradun. Slow coffee,
            soulful food, and the kind of evenings you wish would never end.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-warm">
              <a href="#menu">
                Explore Menu <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-cream/40 bg-cream/10 text-cream backdrop-blur hover:bg-cream/20 hover:text-cream"
            >
              <a href="#reserve">Reserve a Table</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-cream/80 text-sm">
            <div><span className="font-serif text-2xl text-accent">8AM</span> – <span className="font-serif text-2xl text-accent">11PM</span></div>
            <div className="hidden h-8 w-px bg-cream/30 md:block" />
            <div className="font-medium">Open all days · Rajpur Road, Dehradun</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-float md:block">
        <div className="h-10 w-6 rounded-full border-2 border-cream/40 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  );
};