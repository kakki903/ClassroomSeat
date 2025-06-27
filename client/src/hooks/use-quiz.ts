import { useState } from "react";
import { questions } from "@/data/questions";
import { calculateSeatType, type SeatResult } from "@/data/seat-types";

export interface UseQuizReturn {
  currentQuestion: number;
  userScores: Record<string, number>;
  answerQuestion: (answerIndex: number) => void;
  previousQuestion: () => void;
  getResult: () => SeatResult;
  reset: () => void;
}

export function useQuiz(): UseQuizReturn {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userScores, setUserScores] = useState<Record<string, number>>({
    focus: 0,
    observation: 0,
    immersion: 0,
    sociability: 0,
    leadership: 0,
    freedom: 0
  });

  const answerQuestion = (answerIndex: number) => {
    const selectedAnswer = questions[currentQuestion].answers[answerIndex];
    
    // Add selected answer scores to user totals
    const newScores = { ...userScores };
    Object.keys(selectedAnswer.scores).forEach(trait => {
      newScores[trait] = (newScores[trait] || 0) + selectedAnswer.scores[trait];
    });
    
    setUserScores(newScores);
    setCurrentQuestion(prev => prev + 1);
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const getResult = (): SeatResult => {
    return calculateSeatType(userScores);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setUserScores({
      focus: 0,
      observation: 0,
      immersion: 0,
      sociability: 0,
      leadership: 0,
      freedom: 0
    });
  };

  return {
    currentQuestion,
    userScores,
    answerQuestion,
    previousQuestion,
    getResult,
    reset
  };
}
