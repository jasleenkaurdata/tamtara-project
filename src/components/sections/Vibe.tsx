import vibeImg from "@/assets/cafe-vibe.jpg";
import { Coffee, Leaf, Music } from "lucide-react";

const items = [
  { icon: Coffee, title: "Slow-brewed coffee", desc: "Single-origin beans roasted in the foothills, poured with care." },
  { icon: Leaf, title: "Garden-grown food", desc: "Seasonal plates inspired by Doon valley produce and herbs." },
  { icon: Music, title: "Acoustic evenings", desc: "Live unplugged sets every Friday & Saturday after sundown." },
];

export const Vibe = () => {
  return (
    <section className="bg-gradient-cream py-20 md:py-32">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <div className="relative">
          <img
            src={vibeImg}
            alt="Tamtara cafe outdoor terrace with string lights overlooking Dehradun mountains"
            width={1600}
            height={1000}
            loading="lazy"
            className="rounded-3xl shadow-warm aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-background p-5 shadow-soft md:block">
            <p className="font-serif text-3xl text-primary">5+ yrs</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">brewing in Doon</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Our Vibe</p>
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl text-balance">
            A little corner of the mountains, in your day.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Tamtara was born from long Himalayan mornings and longer conversations.
            We brew with intention, cook with seasons, and design every corner to feel
            like an exhale.
          </p>

          <ul className="mt-10 space-y-6">
            {items.map((it) => (
              <li key={it.title} className="flex gap-4">
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};