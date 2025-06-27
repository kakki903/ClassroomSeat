import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/data/questions";
import type { UseQuizReturn } from "@/hooks/use-quiz";

interface QuestionScreenProps {
  quiz: UseQuizReturn;
  onComplete: () => void;
}

export default function QuestionScreen({ quiz, onComplete }: QuestionScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  const currentQuestion = questions[quiz.currentQuestion];
  const progress = ((quiz.currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    
    quiz.answerQuestion(selectedAnswer);
    setSelectedAnswer(null);
    
    if (quiz.currentQuestion >= questions.length - 1) {
      onComplete();
    }
  };

  const handlePrevious = () => {
    quiz.previousQuestion();
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">진행상황</span>
            <span className="text-sm font-medium text-primary">
              {quiz.currentQuestion + 1}/{questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="rounded-3xl shadow-2xl fade-in">
          <CardContent className="p-8">
            <div className="mb-8">
              <div className="text-lg font-semibold text-gray-800 mb-4">
                {currentQuestion.question}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-xl transition-all duration-300 border-2 ${
                    selectedAnswer === index
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-50 hover:bg-primary hover:text-white border-transparent hover:border-primary'
                  }`}
                >
                  {answer.text}
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <Button
                onClick={handlePrevious}
                variant="ghost"
                className={`px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors ${
                  quiz.currentQuestion === 0 ? 'invisible' : ''
                }`}
              >
                ← 이전
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-xl font-medium ${
                  selectedAnswer !== null
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                다음 →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
