import { Card } from "@/components/ui/card";
import { CloudRain, DollarSign, MapPin, Leaf } from "lucide-react";

const benefits = [
  {
    icon: CloudRain,
    title: "갑작스런 비에 걱정 없이",
    description: "예보에 없던 비가 와도 괜찮아요. 캠퍼스 내 편의점과 도서관에서 바로 대여하세요."
  },
  {
    icon: DollarSign,
    title: "저렴한 대여료",
    description: "하루 1,000원, 일주일 5,000원. 부담 없는 가격으로 이용하세요."
  },
  {
    icon: MapPin,
    title: "캠퍼스 곳곳 반납 가능",
    description: "빌린 곳이 아니어도 괜찮아요. 가까운 반납함에 반납하면 끝!"
  },
  {
    icon: Leaf,
    title: "친환경 공유 경제",
    description: "일회용 우산 대신 공유 우산으로 환경도 지키고 비용도 절약하세요."
  }
];

export default function WhyRentSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              왜 우산을 빌려야 할까요?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              비 올 때마다 편의점에서 비닐우산 사는 거 이제 그만! 
              우산을 사면 잃어버리기 일쑤고, 들고 다니기도 불편하죠. 
              <span className="font-semibold text-foreground"> 필요할 때만 빌려 쓰면 되니까 훨씬 편해요.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover-elevate">
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
