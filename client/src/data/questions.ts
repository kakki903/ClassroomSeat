export interface Answer {
  text: string;
  scores: {
    [key: string]: number;
  };
}

export interface Question {
  question: string;
  answers: Answer[];
}

// Shuffle function for randomizing arrays
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const baseQuestions: Question[] = [
  {
    question: "친구들과 함께 새로운 카페에 갔을 때, 나는 주로...",
    answers: [
      { text: "메뉴판을 꼼꼼히 읽어보며 신중하게 선택한다", scores: { focus: 2, observation: 1 } },
      { text: "친구들 추천을 따라 빠르게 결정한다", scores: { sociability: 2, freedom: 1 } },
      { text: "분위기 좋은 자리부터 먼저 찾아본다", scores: { observation: 2, immersion: 1 } },
      { text: "직원에게 추천 메뉴를 물어본다", scores: { leadership: 1, sociability: 2 } }
    ]
  },
  {
    question: "새로운 프로젝트를 시작할 때, 나의 첫 번째 행동은?",
    answers: [
      { text: "혼자서 조용히 계획을 세운다", scores: { focus: 2, immersion: 1 } },
      { text: "팀원들과 브레인스토밍을 한다", scores: { sociability: 2, leadership: 1 } },
      { text: "비슷한 사례들을 찾아보며 분석한다", scores: { observation: 2, focus: 1 } },
      { text: "일단 시작하면서 감을 잡는다", scores: { freedom: 2, leadership: 1 } }
    ]
  },
  {
    question: "스트레스를 받을 때 나는...",
    answers: [
      { text: "혼자만의 시간을 갖고 싶어한다", scores: { immersion: 2, focus: 1 } },
      { text: "친구들과 수다를 떨며 푼다", scores: { sociability: 2, freedom: 1 } },
      { text: "운동이나 취미활동으로 전환한다", scores: { freedom: 2, immersion: 1 } },
      { text: "문제 해결 방법을 찾기 위해 집중한다", scores: { focus: 2, leadership: 1 } }
    ]
  },
  {
    question: "모임에서 나는 보통...",
    answers: [
      { text: "조용히 앉아서 다른 사람들을 관찰한다", scores: { observation: 2, immersion: 1 } },
      { text: "적극적으로 대화에 참여한다", scores: { sociability: 2, leadership: 1 } },
      { text: "분위기 메이커 역할을 한다", scores: { leadership: 2, sociability: 1 } },
      { text: "편한 사람들과만 깊은 이야기를 나눈다", scores: { focus: 1, immersion: 2 } }
    ]
  },
  {
    question: "새로운 취미를 선택할 때 중요하게 생각하는 것은?",
    answers: [
      { text: "혼자서 할 수 있는 것", scores: { immersion: 2, focus: 1 } },
      { text: "사람들과 함께 즐길 수 있는 것", scores: { sociability: 2, freedom: 1 } },
      { text: "창의성을 발휘할 수 있는 것", scores: { freedom: 2, immersion: 1 } },
      { text: "체계적으로 발전시킬 수 있는 것", scores: { focus: 2, observation: 1 } }
    ]
  },
  {
    question: "팀 프로젝트에서 내가 맡고 싶은 역할은?",
    answers: [
      { text: "전체적인 방향을 제시하는 리더", scores: { leadership: 2, observation: 1 } },
      { text: "세부사항을 꼼꼼히 챙기는 실무자", scores: { focus: 2, observation: 1 } },
      { text: "창의적인 아이디어를 내는 기획자", scores: { freedom: 2, immersion: 1 } },
      { text: "팀 분위기를 좋게 만드는 조율자", scores: { sociability: 2, leadership: 1 } }
    ]
  },
  {
    question: "휴가 계획을 세울 때 나는...",
    answers: [
      { text: "구체적인 일정표를 미리 만든다", scores: { focus: 2, observation: 1 } },
      { text: "대략적인 방향만 정하고 즉흥적으로 움직인다", scores: { freedom: 2, sociability: 1 } },
      { text: "조용하고 평화로운 곳을 선호한다", scores: { immersion: 2, focus: 1 } },
      { text: "친구들과 함께 가는 것을 좋아한다", scores: { sociability: 2, freedom: 1 } }
    ]
  },
  {
    question: "새로운 환경에 적응할 때 나는...",
    answers: [
      { text: "먼저 전체적인 구조를 파악하려고 한다", scores: { observation: 2, focus: 1 } },
      { text: "사람들과 빨리 친해지려고 노력한다", scores: { sociability: 2, leadership: 1 } },
      { text: "나만의 공간을 먼저 확보한다", scores: { immersion: 2, observation: 1 } },
      { text: "자연스럽게 흘러가는 대로 맡긴다", scores: { freedom: 2, immersion: 1 } }
    ]
  },
  {
    question: "중요한 결정을 내려야 할 때 나는...",
    answers: [
      { text: "충분한 시간을 갖고 신중하게 생각한다", scores: { focus: 2, immersion: 1 } },
      { text: "주변 사람들의 의견을 많이 듣는다", scores: { sociability: 2, observation: 1 } },
      { text: "직감을 믿고 빠르게 결정한다", scores: { freedom: 2, leadership: 1 } },
      { text: "다양한 정보를 수집하고 분석한다", scores: { observation: 2, focus: 1 } }
    ]
  },
  {
    question: "이상적인 주말 오후를 보내는 방법은?",
    answers: [
      { text: "집에서 혼자만의 시간을 즐긴다", scores: { immersion: 2, focus: 1 } },
      { text: "친구들과 함께 밖에서 활동한다", scores: { sociability: 2, freedom: 1 } },
      { text: "새로운 것을 배우거나 도전한다", scores: { freedom: 2, leadership: 1 } },
      { text: "좋아하는 일에 몰두한다", scores: { focus: 2, immersion: 1 } }
    ]
  }
];

// Generate shuffled questions - this will be called each time the module is imported
function generateShuffledQuestions(): Question[] {
  return shuffleArray(baseQuestions).map(question => ({
    ...question,
    answers: shuffleArray(question.answers)
  }));
}

export const questions: Question[] = generateShuffledQuestions();
