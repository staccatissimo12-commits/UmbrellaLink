import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
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
import { insertAdvertiserApplicationSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

type AdvertiserFormData = typeof insertAdvertiserApplicationSchema._type;

export default function AdvertiserSection() {
  const { toast } = useToast();
  
  const form = useForm<AdvertiserFormData>({
    resolver: zodResolver(insertAdvertiserApplicationSchema),
    defaultValues: {
      companyName: "",
      representative: "",
      phone: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: AdvertiserFormData) => {
      return await apiRequest("POST", "/api/advertiser-applications", data);
    },
    onSuccess: () => {
      toast({
        title: "신청 완료!",
        description: "광고 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "신청 실패",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (data: AdvertiserFormData) => {
    mutation.mutate(data);
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
                  disabled={mutation.isPending}
                  data-testid="button-submit-advertiser"
                >
                  {mutation.isPending ? "신청 중..." : "광고 신청하기"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
