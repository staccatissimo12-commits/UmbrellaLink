import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">유니버슈룹</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              대학생을 위한 우산 대여 서비스로<br />
              더 이상 우산 때문에 고민하지 마세요.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">사업자 정보</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p>사업자명: 유니버슈룹</p>
              </div>
              <div>
                <p>개인정보책임자: 최성준</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>성북구 정릉로 77 국민대학교 N11 체육관</span>
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
          <p>© 2024 유니버슈룹. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
