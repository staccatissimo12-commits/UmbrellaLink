import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const campuses = [
  { name: "서울대학교", status: "운영중" },
  { name: "연세대학교", status: "운영중" },
  { name: "고려대학교", status: "운영중" },
  { name: "성균관대학교", status: "운영중" },
  { name: "한양대학교", status: "운영중" },
  { name: "중앙대학교", status: "운영중" },
  { name: "경희대학교", status: "운영중" },
  { name: "이화여자대학교", status: "운영중" },
  { name: "서강대학교", status: "준비중" },
  { name: "건국대학교", status: "준비중" },
];

export default function CampusLocations() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            운영 캠퍼스
          </h2>
          <p className="text-muted-foreground">
            현재 10개 캠퍼스에서 서비스를 이용하실 수 있습니다
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {campuses.map((campus, index) => (
            <Card key={index} className="p-6 text-center hover-elevate">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{campus.name}</h3>
              <Badge 
                variant={campus.status === "운영중" ? "default" : "secondary"}
                data-testid={`badge-status-${index}`}
              >
                {campus.status}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
