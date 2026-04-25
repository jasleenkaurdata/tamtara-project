import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ishita R.",
    role: "Regular · Dehradun",
    text: "Tamtara feels like the cafe you'd dream up — slow mornings, great coffee, and the kindest staff. The cardamom latte is unreal.",
    rating: 5,
  },
  {
    name: "Karan M.",
    role: "Visitor · Mumbai",
    text: "Stumbled in on a hill trip and ended up coming back three times. The wood-fired pahadi pizza alone is worth a Dehradun detour.",
    rating: 5,
  },
  {
    name: "Neha & Arjun",
    role: "Couple · Doon",
    text: "We booked through their site for an anniversary — they gave us the corner table with fairy lights and a free dessert. Pure magic.",
    rating: 5,
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-background py-20 md:py-32">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Kind Words</p>
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl text-balance">
            Loved by the Doon valley.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <span className="text-sm text-muted-foreground">4.9 · 1,200+ reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-warm"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/30" />
              <div className="mb-4 flex gap-0.5 text-accent">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="flex-1 font-serif text-lg leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-medium text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};