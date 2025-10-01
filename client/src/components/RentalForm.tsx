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
import { Calendar } from "lucide-react";

const rentalFormSchema = z.object({
  rentalDate: z.string().min(1, "대여 날짜를 입력해주세요"),
  returnDate: z.string().min(1, "반납 날짜를 입력해주세요"),
  name: z.string().min(2, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  major: z.string().min(2, "학과를 입력해주세요"),
  studentId: z.string().min(1, "학번을 입력해주세요"),
  phone: z.string().min(10, "전화번호를 입력해주세요"),
});

type RentalFormData = z.infer<typeof rentalFormSchema>;

interface RentalFormProps {
  onSubmit?: (data: RentalFormData) => void;
}

export default function RentalForm({ onSubmit }: RentalFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<RentalFormData>({
    resolver: zodResolver(rentalFormSchema),
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

  const handleSubmit = async (data: RentalFormData) => {
    setIsSubmitting(true);
    console.log("Rental form submitted:", data);
    
    if (onSubmit) {
      onSubmit(data);
    }
    
    toast({
      title: "신청 완료!",
      description: "우산 대여 신청이 접수되었습니다.",
    });
    
    form.reset();
    setIsSubmitting(false);
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
              disabled={isSubmitting}
              data-testid="button-submit-rental"
            >
              {isSubmitting ? "신청 중..." : "대여 신청하기"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
