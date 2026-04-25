import { Button } from "@/components/ui/button";
import { Sparkles, Coffee, Users, Cake } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/cafe";

const offers = [
  {
    icon: Coffee,
    code: "BREW20",
    title: "20% off your first brew",
    desc: "On any coffee, when you order from our website. Just mention the code on WhatsApp.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    code: "TABLE4",
    title: "Free dessert for tables of 4+",
    desc: "Reserve through our form and your group gets a complimentary signature dessert.",
    accent: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Cake,
    code: "WEEKEND",
    title: "Weekend Brunch · ₹599",
    desc: "Sat & Sun · Coffee + main + dessert. Website-only price, all-inclusive.",
    accent: "bg-leaf/15 text-leaf",
  },
];

export const Offers = () => {
  return (
    <section id="offers" className="relative overflow-hidden bg-bark py-20 text-cream md:py-32">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(hsl(36 45% 94%) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream/90">
            <Sparkles className="h-3.5 w-3.5" /> Website-only offers
          </div>
          <h2 className="font-serif text-4xl font-medium md:text-5xl text-balance">
            Little extras for our regulars.
          </h2>
          <p className="mt-4 text-cream/70">
            Save these codes — they only work when you order or reserve directly with us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <article key={o.code} className="group relative flex flex-col rounded-3xl bg-cream/5 p-7 backdrop-blur transition-smooth hover:bg-cream/10 hover:-translate-y-1">
              <span className={`mb-5 grid h-12 w-12 place-items-center rounded-full ${o.accent}`}>
                <o.icon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl">{o.title}</h3>
              <p className="mt-2 flex-1 text-sm text-cream/70">{o.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-cream/15 pt-5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-cream/50">Code</p>
                  <p className="font-serif text-xl text-accent">{o.code}</p>
                </div>
                <Button asChild size="sm" variant="ghost" className="rounded-full text-cream hover:bg-cream/10 hover:text-cream">
                  <a href={buildWhatsAppLink(`Hi Tamtara! I'd like to use the offer ${o.code}.`)} target="_blank" rel="noopener noreferrer">
                    Use offer →
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};