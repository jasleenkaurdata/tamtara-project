import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-cream py-20 md:py-32">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Visit Us</p>
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl text-balance">
            Find your way to Tamtara.
          </h2>
          <p className="mt-4 text-muted-foreground">Tucked away on Rajpur Road — easy to find, hard to leave.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-3xl bg-background p-8 shadow-soft">
            <h3 className="font-serif text-2xl text-foreground">Get in touch</h3>

            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground">123 Rajpur Road,<br />Dehradun, Uttarakhand 248001</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+919999999999" className="text-muted-foreground hover:text-accent">+91 99999 99999</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:hello@tamtara.cafe" className="text-muted-foreground hover:text-accent">hello@tamtara.cafe</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Hours</p>
                  <p className="text-muted-foreground">Open daily · 8:00 AM – 11:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3 border-t border-border pt-6">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground transition-smooth hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground transition-smooth hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-warm">
            <iframe
              title="Tamtara Cafe location"
              src="https://www.google.com/maps?q=Rajpur+Road+Dehradun&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 480 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};