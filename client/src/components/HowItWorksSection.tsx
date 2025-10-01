import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "온라인 신청",
    description: "웹사이트에서 간편하게 대여 신청을 하세요."
  },
  {
    number: "2",
    title: "캠퍼스 내 수령",
    description: "편의점이나 지정된 장소에서 우산을 수령하세요."
  },
  {
    number: "3",
    title: "자유롭게 반납",
    description: "사용 후 가까운 반납함에 반납하시면 됩니다."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          이용 방법
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          세 단계로 끝나는 간단한 대여 과정
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover-elevate">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
