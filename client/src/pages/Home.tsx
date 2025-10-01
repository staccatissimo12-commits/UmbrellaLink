import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import WhyRentSection from "@/components/WhyRentSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RentalForm from "@/components/RentalForm";
import CampusLocations from "@/components/CampusLocations";
import AdvertiserSection from "@/components/AdvertiserSection";
import Footer from "@/components/Footer";

export default function Home() {
  const rentalFormRef = useRef<HTMLDivElement>(null);

  const scrollToRentalForm = () => {
    rentalFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onRentalClick={scrollToRentalForm} />
      <WhyRentSection />
      <HowItWorksSection />
      <div ref={rentalFormRef}>
        <RentalForm />
      </div>
      <CampusLocations />
      <AdvertiserSection />
      <Footer />
    </div>
  );
}
