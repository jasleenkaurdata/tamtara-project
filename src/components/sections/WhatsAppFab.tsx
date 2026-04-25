import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/cafe";

export const WhatsAppFab = () => {
  return (
    <a
      href={buildWhatsAppLink("Hi Tamtara! I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[hsl(142_70%_40%)] px-4 py-3 text-white shadow-warm transition-smooth hover:bg-[hsl(142_70%_36%)] hover:scale-105 animate-pulse-glow md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">Order on WhatsApp</span>
    </a>
  );
};