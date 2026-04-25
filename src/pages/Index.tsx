import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Vibe } from "@/components/sections/Vibe";
import { Menu } from "@/components/sections/Menu";
import { Offers } from "@/components/sections/Offers";
import { Reservation } from "@/components/sections/Reservation";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFab } from "@/components/sections/WhatsAppFab";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Vibe />
      <Menu />
      <Offers />
      <Reservation />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
