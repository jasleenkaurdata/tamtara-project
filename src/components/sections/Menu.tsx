import { useState } from "react";
import { Button } from "@/components/ui/button";
import menuImg from "@/assets/menu-feature.jpg";
import { buildWhatsAppLink } from "@/lib/cafe";
import { cn } from "@/lib/utils";

type Item = { name: string; desc: string; price: number; tag?: string };
type Category = { id: string; label: string; items: Item[] };

const categories: Category[] = [
  {
    id: "coffee",
    label: "Coffee",
    items: [
      { name: "Hand-poured Filter", desc: "Single origin, Chikmagalur beans", price: 180 },
      { name: "Hazelnut Cappuccino", desc: "House roast, micro-foam, hazelnut syrup", price: 220, tag: "Loved" },
      { name: "Iced Mocha Doon", desc: "Cold brew, dark cocoa, mountain mint", price: 260 },
      { name: "Cardamom Latte", desc: "Steamed milk, freshly cracked elaichi", price: 240 },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Himalayan Lemonade", desc: "Wild lemon, basil, pink salt", price: 180 },
      { name: "Rose Kombucha", desc: "Small-batch fermented, locally crafted", price: 220 },
      { name: "Masala Chai", desc: "Slow-simmered with whole spices", price: 120, tag: "Classic" },
      { name: "Apple Cinnamon Cooler", desc: "Pressed Doon apples, cinnamon", price: 200 },
    ],
  },
  {
    id: "food",
    label: "Food",
    items: [
      { name: "Sourdough Avocado Toast", desc: "Smashed avo, chilli flakes, microgreens", price: 360, tag: "Bestseller" },
      { name: "Doon Valley Bowl", desc: "Quinoa, roasted veg, tahini, seeds", price: 420 },
      { name: "Truffle Mushroom Pasta", desc: "Hand-rolled tagliatelle, cream, herbs", price: 480 },
      { name: "Pahadi Wood-fired Pizza", desc: "Bhutta, jakhya, smoked cheese", price: 460 },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Dark Chocolate Tart", desc: "70% Belgian, sea salt flake", price: 280 },
      { name: "Tiramisu Jar", desc: "Espresso-soaked sponge, mascarpone", price: 260 },
      { name: "Banoffee Pie", desc: "Salted caramel, fresh banana", price: 240 },
      { name: "Honey & Walnut Cheesecake", desc: "Doon honey, baked New York style", price: 300 },
    ],
  },
];

export const Menu = () => {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="bg-background py-20 md:py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Our Menu</p>
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl text-balance">
            Brewed slowly. Plated lovingly.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From single-origin pours to seasonal plates — every item is made fresh, in-house.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-smooth",
                active === c.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-foreground/70 hover:bg-muted/70",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          <ul className="divide-y divide-border">
            {current.items.map((item) => (
              <li key={item.name} className="flex items-start justify-between gap-6 py-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                    {item.tag && (
                      <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-xl text-primary">₹{item.price}</span>
                </div>
              </li>
            ))}
          </ul>

          <aside className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-3xl shadow-warm">
              <img
                src={menuImg}
                alt="Latte art with croissant and fresh berries"
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="space-y-4 bg-primary p-6 text-primary-foreground">
                <h4 className="font-serif text-2xl">Skip the wait</h4>
                <p className="text-sm text-primary-foreground/80">
                  Order ahead on WhatsApp. We'll have it warm and ready.
                </p>
                <Button asChild variant="secondary" className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href={buildWhatsAppLink("Hi Tamtara! I'd like to place an order from your menu.")} target="_blank" rel="noopener noreferrer">
                    Order on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};