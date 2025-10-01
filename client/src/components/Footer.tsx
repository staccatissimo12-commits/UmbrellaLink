import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">캠퍼스 우산 대여</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              대학생을 위한 우산 대여 서비스로<br />
              더 이상 우산 때문에 고민하지 마세요.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@umbrella.ac.kr</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>서울시 강남구 테헤란로 123</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">서비스 안내</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>자주 묻는 질문</li>
              <li>제휴 문의</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 캠퍼스 우산 대여. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
