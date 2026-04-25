import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#offers", label: "Offers" },
  { href: "#reserve", label: "Reserve" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/60 shadow-soft"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-warm text-primary-foreground font-serif text-lg font-semibold">
            T
          </span>
          <span className={cn("font-serif text-xl font-semibold tracking-tight", scrolled ? "text-foreground" : "text-cream")}>
            Tamtara
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-accent",
                  scrolled ? "text-foreground/80" : "text-cream/90",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="default" size="sm" className="rounded-full bg-primary hover:bg-primary/90">
            <a href="#reserve">Book a Table</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className={cn("md:hidden p-2", scrolled ? "text-foreground" : "text-cream")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <ul className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-3 pt-2">
              <Button asChild className="w-full rounded-full">
                <a href="#reserve" onClick={() => setOpen(false)}>Book a Table</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};