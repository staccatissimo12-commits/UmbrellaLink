import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/university_campus_st_d6ba6361.jpg";

interface HeroSectionProps {
  onRentalClick: () => void;
}

export default function HeroSection({ onRentalClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="대학 캠퍼스"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          갑작스런 비에도<br />걱정 없이
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          캠퍼스 곳곳에서 간편하게 빌리고 반납하는<br />우산 대여 서비스
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 h-14"
            onClick={onRentalClick}
            data-testid="button-rental-hero"
          >
            우산 대여 신청하기
          </Button>
          <p className="text-white/80 text-sm">
            ✨ 10개 캠퍼스 운영 중
          </p>
        </div>
      </div>
    </section>
  );
}
