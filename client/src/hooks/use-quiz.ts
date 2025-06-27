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
  const [answerHistory, setAnswerHistory] = useState<number[]>([]);

  const answerQuestion = (answerIndex: number) => {
    const selectedAnswer = questions[currentQuestion].answers[answerIndex];
    
    // Store answer history
    setAnswerHistory(prev => {
      const newHistory = [...prev];
      newHistory[currentQuestion] = answerIndex;
      return newHistory;
    });
    
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
      // Remove the score from the current question we're going back from
      const prevAnswer = answerHistory[currentQuestion - 1];
      if (prevAnswer !== undefined) {
        const prevSelectedAnswer = questions[currentQuestion - 1].answers[prevAnswer];
        const newScores = { ...userScores };
        Object.keys(prevSelectedAnswer.scores).forEach(trait => {
          newScores[trait] = Math.max(0, (newScores[trait] || 0) - prevSelectedAnswer.scores[trait]);
        });
        setUserScores(newScores);
      }
      
      // Remove answer from history
      setAnswerHistory(prev => {
        const newHistory = [...prev];
        newHistory[currentQuestion - 1] = undefined as any;
        return newHistory;
      });
      
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const getResult = (): SeatResult => {
    return calculateSeatType(userScores);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswerHistory([]);
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
