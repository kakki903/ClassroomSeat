import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RadarChart from "@/components/radar-chart";
import type { SeatResult } from "@/data/seat-types";

interface ResultScreenProps {
  result: SeatResult;
  onRestart: () => void;
}

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '학창시절 내가 앉던 자리 테스트 결과',
          text: `나는 ${result.title}! 나의 자리 유형을 확인해보세요!`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Sharing failed:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('결과 링크가 복사되었습니다!');
      } catch (error) {
        console.log('Copy failed:', error);
      }
    }
  };

  return (
    <div className="min-h-screen result-bg text-white p-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Result Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{result.emoji}</div>
          <h1 className="text-4xl font-bold mb-2">{result.title}</h1>
          <p className="text-xl text-indigo-200">{result.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personality Chart */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-white">성향 분석</h2>
              <div className="flex justify-center">
                <RadarChart traits={result.traits} />
              </div>
            </CardContent>
          </Card>

          {/* Result Details */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <span className="mr-2">🎓</span> 학창시절
                </h3>
                <p className="text-indigo-100">{result.school}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <span className="mr-2">💼</span> 현재 직업
                </h3>
                <p className="text-indigo-100">{result.job}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <span className="mr-2">🧠</span> MBTI 성향
                </h3>
                <p className="text-indigo-100">{result.mbti}</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-green-500/20 backdrop-blur-lg border-green-500/30 rounded-2xl">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 flex items-center text-white">
                    <span className="mr-2">✅</span> 잘 맞는 자리
                  </h4>
                  <p className="text-sm text-green-100">{result.compatible}</p>
                </CardContent>
              </Card>

              <Card className="bg-red-500/20 backdrop-blur-lg border-red-500/30 rounded-2xl">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 flex items-center text-white">
                    <span className="mr-2">❌</span> 안 맞는 자리
                  </h4>
                  <p className="text-sm text-red-100">{result.incompatible}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="text-center mt-12">
          <div className="space-y-4">
            <Button
              onClick={handleShare}
              className="bg-white text-indigo-900 px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-50 transition-colors mr-4 h-auto"
            >
              결과 공유하기
            </Button>
            <Button
              onClick={onRestart}
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-indigo-900 transition-colors bg-transparent h-auto"
            >
              다시 테스트하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
