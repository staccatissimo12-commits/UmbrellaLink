import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Building2, Users, TrendingUp } from "lucide-react";

const advertiserFormSchema = z.object({
  companyName: z.string().min(2, "기업명을 입력해주세요"),
  representative: z.string().min(2, "대표자명을 입력해주세요"),
  phone: z.string().min(10, "전화번호를 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
});

type AdvertiserFormData = z.infer<typeof advertiserFormSchema>;

interface AdvertiserSectionProps {
  onSubmit?: (data: AdvertiserFormData) => void;
}

export default function AdvertiserSection({ onSubmit }: AdvertiserSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<AdvertiserFormData>({
    resolver: zodResolver(advertiserFormSchema),
    defaultValues: {
      companyName: "",
      representative: "",
      phone: "",
      email: "",
    },
  });

  const handleSubmit = async (data: AdvertiserFormData) => {
    setIsSubmitting(true);
    console.log("Advertiser form submitted:", data);
    
    if (onSubmit) {
      onSubmit(data);
    }
    
    toast({
      title: "신청 완료!",
      description: "광고 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "hsl(260 60% 97%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            광고주 모집 안내
          </h2>
          <p className="text-muted-foreground text-lg">
            2만 명 이상의 대학생들에게 브랜드를 알리세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              왜 우산 광고인가요?
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">대학생 타겟 마케팅</h4>
                  <p className="text-muted-foreground">
                    20대 초반 대학생들에게 직접 도달하는 효과적인 광고 매체입니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">프리미엄 노출</h4>
                  <p className="text-muted-foreground">
                    우산에 로고를 부착하여 캠퍼스 전역에서 자연스럽게 브랜드를 노출시킬 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">합리적인 비용</h4>
                  <p className="text-muted-foreground">
                    다양한 광고 패키지를 통해 예산에 맞는 마케팅을 진행하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-card rounded-xl p-8 shadow-sm border border-card-border">
            <h3 className="text-2xl font-bold mb-6">광고 신청하기</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>기업명</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(주)회사명"
                          data-testid="input-company-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="representative"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>대표자명</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="홍길동"
                          data-testid="input-representative"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>전화번호</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="02-1234-5678"
                          data-testid="input-advertiser-phone"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="contact@company.com"
                          data-testid="input-advertiser-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg h-14"
                  disabled={isSubmitting}
                  data-testid="button-submit-advertiser"
                >
                  {isSubmitting ? "신청 중..." : "광고 신청하기"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
