export const Footer = () => {
  return (
    <footer className="bg-bark py-12 text-cream/80">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-warm font-serif text-sm font-semibold text-primary-foreground">T</span>
          <span className="font-serif text-lg text-cream">Tamtara</span>
          <span className="text-xs text-cream/50">· Dehradun</span>
        </div>
        <p className="text-xs text-cream/60">© {new Date().getFullYear()} Tamtara Cafe. Brewed with love in the Doon valley.</p>
      </div>
    </footer>
  );
};