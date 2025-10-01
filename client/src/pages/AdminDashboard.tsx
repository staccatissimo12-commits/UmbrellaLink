import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Umbrella, Building2, LogOut, Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { RentalApplication, AdvertiserApplication } from "@shared/schema";
import { format } from "date-fns";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  const { data: rentalApplications = [], isLoading: isLoadingRentals } = useQuery<RentalApplication[]>({
    queryKey: ["/api/rental-applications"],
  });

  const { data: advertiserApplications = [], isLoading: isLoadingAdvertisers } = useQuery<AdvertiserApplication[]>({
    queryKey: ["/api/advertiser-applications"],
  });

  const handleLogout = () => {
    setLocation("/admin/login");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">관리자 대시보드</h1>
            <p className="text-sm text-muted-foreground">캠퍼스 우산 대여 관리</p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="rentals" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="rentals" data-testid="tab-rentals">
              <Umbrella className="w-4 h-4 mr-2" />
              우산 대여 신청
            </TabsTrigger>
            <TabsTrigger value="advertisers" data-testid="tab-advertisers">
              <Building2 className="w-4 h-4 mr-2" />
              광고 신청
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rentals">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                우산 대여 신청 목록
              </h2>
              
              {isLoadingRentals ? (
                <div className="text-center py-12">
                  <Loader2 className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground">
                    데이터를 불러오는 중...
                  </p>
                </div>
              ) : rentalApplications.length === 0 ? (
                <div className="text-center py-12">
                  <Umbrella className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    아직 신청된 대여 건이 없습니다.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>이름</TableHead>
                        <TableHead>이메일</TableHead>
                        <TableHead>학과</TableHead>
                        <TableHead>학번</TableHead>
                        <TableHead>전화번호</TableHead>
                        <TableHead>대여 날짜</TableHead>
                        <TableHead>반납 날짜</TableHead>
                        <TableHead>신청 시간</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rentalApplications.map((app, index) => (
                        <TableRow key={app.id} data-testid={`row-rental-${index}`}>
                          <TableCell data-testid={`text-rental-name-${index}`}>{app.name}</TableCell>
                          <TableCell data-testid={`text-rental-email-${index}`}>{app.email}</TableCell>
                          <TableCell data-testid={`text-rental-major-${index}`}>{app.major}</TableCell>
                          <TableCell data-testid={`text-rental-studentid-${index}`}>{app.studentId}</TableCell>
                          <TableCell data-testid={`text-rental-phone-${index}`}>{app.phone}</TableCell>
                          <TableCell data-testid={`text-rental-rentaldate-${index}`}>{app.rentalDate}</TableCell>
                          <TableCell data-testid={`text-rental-returndate-${index}`}>{app.returnDate}</TableCell>
                          <TableCell data-testid={`text-rental-createdat-${index}`}>
                            {app.createdAt ? format(new Date(app.createdAt), 'yyyy-MM-dd HH:mm:ss') : '-'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="advertisers">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                광고 신청 목록
              </h2>
              
              {isLoadingAdvertisers ? (
                <div className="text-center py-12">
                  <Loader2 className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground">
                    데이터를 불러오는 중...
                  </p>
                </div>
              ) : advertiserApplications.length === 0 ? (
                <div className="text-center py-12">
                  <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    아직 신청된 광고 건이 없습니다.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>기업명</TableHead>
                        <TableHead>대표자명</TableHead>
                        <TableHead>전화번호</TableHead>
                        <TableHead>이메일</TableHead>
                        <TableHead>신청 시간</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {advertiserApplications.map((app, index) => (
                        <TableRow key={app.id} data-testid={`row-advertiser-${index}`}>
                          <TableCell data-testid={`text-advertiser-company-${index}`}>{app.companyName}</TableCell>
                          <TableCell data-testid={`text-advertiser-representative-${index}`}>{app.representative}</TableCell>
                          <TableCell data-testid={`text-advertiser-phone-${index}`}>{app.phone}</TableCell>
                          <TableCell data-testid={`text-advertiser-email-${index}`}>{app.email}</TableCell>
                          <TableCell data-testid={`text-advertiser-createdat-${index}`}>
                            {app.createdAt ? format(new Date(app.createdAt), 'yyyy-MM-dd HH:mm:ss') : '-'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
