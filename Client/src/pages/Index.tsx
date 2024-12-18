import { Hero } from "@/components/Hero";
import { BookingForm } from "@/components/BookingForm";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { WellBeingAI } from "@/components/WellBeingAI";

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;