import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StartScreenProps {
  onStartTest: () => void;
}

export default function StartScreen({ onStartTest }: StartScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="rounded-3xl shadow-2xl card-hover">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                🪑
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">학창시절 내가 앉던 자리</h1>
              <p className="text-gray-600 text-sm">10개의 질문으로 알아보는 나의 진짜 성향</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>10개의 재미있는 질문</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>9가지 자리 유형 분석</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>성향 그래프 제공</span>
              </div>
            </div>

            <Button 
              onClick={onStartTest}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-auto"
            >
              테스트 시작하기
            </Button>
            
            <p className="text-xs text-gray-500 mt-4">약 2분 소요</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
