import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { buildWhatsAppLink } from "@/lib/cafe";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  guests: z.string().min(1, "Select guests"),
  time: z.string().min(1, "Select a time"),
});

const times = [
  "08:30","09:30","10:30","11:30","12:30","13:30","14:30",
  "16:00","17:00","18:00","19:00","20:00","21:00","22:00",
];

export const Reservation = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please pick a date");
      return;
    }
    const result = schema.safeParse({ name, phone, guests, time });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    const msg = `Hi Tamtara! I'd like to reserve a table.%0A%0AName: ${name}%0APhone: ${phone}%0AGuests: ${guests}%0ADate: ${format(date, "PPP")}%0ATime: ${time}`;
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
    toast.success("Reservation request sent on WhatsApp!");
  };

  return (
    <section id="reserve" className="bg-gradient-cream py-20 md:py-32">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Reservations</p>
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl text-balance">
            Save your seat by the window.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Tell us when you'd like to drop by and we'll have the perfect table waiting —
            sunlight in the morning, fairy lights by night.
          </p>

          <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-accent" /> Open 8 AM – 11 PM, every day</li>
            <li className="flex items-center gap-3"><Users className="h-4 w-4 text-accent" /> Groups of 8+ get a private nook</li>
            <li className="flex items-center gap-3"><CalendarIcon className="h-4 w-4 text-accent" /> Reservations confirmed instantly on WhatsApp</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-background p-7 shadow-warm md:p-9">
          <h3 className="font-serif text-2xl text-foreground">Reserve a table</h3>
          <p className="mt-1 text-sm text-muted-foreground">We'll confirm via WhatsApp within minutes.</p>

          <div className="mt-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Aarav Sharma" maxLength={80} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" maxLength={20} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn("w-full justify-start font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Time</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                  <SelectContent>
                    {times.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Guests</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger><SelectValue placeholder="How many?" /></SelectTrigger>
                <SelectContent>
                  {["1","2","3","4","5","6","7","8+"].map((g) => (
                    <SelectItem key={g} value={g}>{g} {g === "1" ? "guest" : "guests"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90">
              Confirm via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};