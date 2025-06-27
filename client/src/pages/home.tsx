import { useState } from "react";
import StartScreen from "@/components/start-screen";
import QuestionScreen from "@/components/question-screen";
import ResultScreen from "@/components/result-screen";
import VignetteAd from "@/components/VignetteAd";
import AdBanner from "@/components/AdBanner";
import { useQuiz } from "@/hooks/use-quiz";

export default function Home() {
  const [screen, setScreen] = useState<'start' | 'quiz' | 'result'>('start');
  const quiz = useQuiz();

  const handleStartTest = () => {
    quiz.reset();
    setScreen('quiz');
  };

  const handleQuizComplete = () => {
    setScreen('result');
  };

  const handleRestart = () => {
    quiz.reset();
    setScreen('start');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Top Ad Banner */}
      <AdBanner position="top" />
      
      {screen === 'start' && (
        <StartScreen onStartTest={handleStartTest} />
      )}
      
      {screen === 'quiz' && (
        <QuestionScreen 
          quiz={quiz}
          onComplete={handleQuizComplete}
        />
      )}
      
      {screen === 'result' && (
        <ResultScreen 
          result={quiz.getResult()}
          onRestart={handleRestart}
        />
      )}
      
      {/* Bottom Ad Banner */}
      <AdBanner position="bottom" />
      
      {/* Vignette Ad - Shows on start screen */}
      {screen === 'start' && <VignetteAd />}
    </div>
  );
}
