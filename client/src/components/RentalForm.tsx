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
import { Calendar } from "lucide-react";
import { insertRentalApplicationSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

type RentalFormData = typeof insertRentalApplicationSchema._type;

export default function RentalForm() {
  const { toast } = useToast();
  
  const form = useForm<RentalFormData>({
    resolver: zodResolver(insertRentalApplicationSchema),
    defaultValues: {
      rentalDate: "",
      returnDate: "",
      name: "",
      email: "",
      major: "",
      studentId: "",
      phone: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: RentalFormData) => {
      return await apiRequest("POST", "/api/rental-applications", data);
    },
    onSuccess: () => {
      toast({
        title: "신청 완료!",
        description: "우산 대여 신청이 접수되었습니다.",
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

  const handleSubmit = (data: RentalFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="rental-form" className="py-20 md:py-32 px-4 bg-accent/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            우산 대여 신청
          </h2>
          <p className="text-muted-foreground">
            아래 정보를 입력하고 대여 신청을 완료하세요
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="rentalDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>대여 날짜</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="date"
                          placeholder="대여 날짜"
                          data-testid="input-rental-date"
                          {...field}
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="returnDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>반납 날짜</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="date"
                          placeholder="반납 날짜"
                          data-testid="input-return-date"
                          {...field}
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="홍길동"
                      data-testid="input-name"
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
                      placeholder="example@university.ac.kr"
                      data-testid="input-email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="major"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>학과</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="컴퓨터공학과"
                        data-testid="input-major"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>학번</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="20231234"
                        data-testid="input-student-id"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>전화번호</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="010-1234-5678"
                      data-testid="input-phone"
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
              data-testid="button-submit-rental"
            >
              {mutation.isPending ? "신청 중..." : "대여 신청하기"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
