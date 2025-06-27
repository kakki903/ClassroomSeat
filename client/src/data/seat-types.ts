export interface Traits {
  focus: number;
  observation: number;
  immersion: number;
  sociability: number;
  leadership: number;
  freedom: number;
}

export interface SeatResult {
  key: string;
  emoji: string;
  title: string;
  subtitle: string;
  school: string;
  job: string;
  mbti: string;
  compatible: string;
  incompatible: string;
  traits: Traits;
}

export const seatTypes: Record<string, SeatResult> = {
  'front-window': {
    key: 'front-window',
    emoji: '🪟',
    title: '맨 앞 창문 자리',
    subtitle: '몽상가형 집중러',
    school: '혼자만의 시간을 즐기며 창밖을 자주 보던 몽상가 스타일. 수업 중에도 상상의 나래를 펼치며 자신만의 세계에 빠져들곤 했어요. 선생님이 "○○야, 집중해!"라고 부를 때가 많았지만, 정작 창작 수업이나 미술 시간에는 누구보다 집중했던 신비로운 매력의 소유자입니다.',
    job: '감성적이고 집중력이 좋아 디자이너, 작가, 연구직에 종사하는 경우가 많습니다. 창의적인 아이디어가 필요한 분야에서 빛을 발해요. 특히 혼자서 깊이 생각할 수 있는 환경에서 최고의 퍼포먼스를 보입니다. 회사에서도 조용한 구석자리를 선호하며, 창가 자리가 있다면 무조건 그곳을 차지합니다.',
    mbti: 'INFP, ISFP 유형이 주로 이 자리에 앉습니다. 내향적이면서도 감수성이 풍부한 성격의 소유자예요. 겉으로는 조용해 보이지만 속으로는 엄청난 상상력과 창의력을 품고 있는 숨은 예술가 기질을 가지고 있습니다.',
    compatible: '맨 뒤 중앙 자리 - 서로의 영역을 존중하며 편안한 관계를 유지해요.',
    incompatible: '맨 앞 복도 자리 - 에너지가 충돌하여 서로 불편할 수 있어요.',
    traits: { focus: 85, observation: 75, immersion: 90, sociability: 30, leadership: 40, freedom: 65 }
  },
  'front-center': {
    key: 'front-center',
    emoji: '📚',
    title: '맨 앞 중앙 자리',
    subtitle: '모범생형 리더',
    school: '항상 선생님과 눈을 맞추며 수업에 집중하던 모범생. 질문도 많이 하고 반장이나 부반장을 자주 맡았던 타입이에요. "○○이가 대답해봐" 하면 언제나 준비된 답변으로 선생님을 만족시켰고, 과제 마감일을 어기는 일은 절대 없었죠. 다른 친구들에게 필기 빌려주는 것도 일상이었습니다.',
    job: '교육자, 관리자, 컨설턴트 등 사람들을 이끌고 가르치는 직업에 적성이 맞습니다. 체계적이고 책임감이 강해요. 회사에서는 신뢰받는 팀리더가 되는 경우가 많고, 프로젝트 관리나 인사 업무에서도 뛰어난 능력을 발휘합니다. 상사들이 가장 믿고 맡기는 직원 1순위예요.',
    mbti: 'ESTJ, ENFJ 유형이 많이 앉는 자리입니다. 외향적이고 계획적인 성격을 가지고 있어요. 타고난 리더십으로 주변 사람들을 자연스럽게 이끌어가며, 목표 달성을 위해서는 체계적인 계획을 반드시 세우는 완벽주의 성향을 보입니다.',
    compatible: '중간 중앙 자리 - 서로를 보완하며 좋은 파트너십을 만들어가요.',
    incompatible: '맨 뒤 창문 자리 - 너무 다른 성향으로 이해하기 어려울 수 있어요.',
    traits: { focus: 95, observation: 70, immersion: 75, sociability: 85, leadership: 95, freedom: 45 }
  },
  'front-aisle': {
    key: 'front-aisle',
    emoji: '⚡',
    title: '맨 앞 복도 자리',
    subtitle: '활동가형 자유인',
    school: '수업 시간에도 복도 쪽을 보며 뭔가 일어나기를 기대하던 활동적인 학생. 쉬는 시간이 되면 제일 먼저 밖으로 나가던 타입이에요. "복도에서 뛰지 마세요!"라는 말을 가장 많이 들었을 법한 에너지 덩어리. 체육 시간이나 현장학습 같은 활동적인 수업을 가장 좋아했고, 앉아있는 수업은 답답해했죠.',
    job: '영업, 마케팅, 이벤트 기획 등 역동적이고 변화가 많은 직업을 선호합니다. 사람들과의 만남을 즐겨해요. 사무실에 갇혀있는 것보다는 밖에서 고객을 만나거나 현장을 뛰어다니는 일을 좋아합니다. 네트워킹의 달인이며, 어디를 가든 금세 사람들과 친해지는 능력자예요.',
    mbti: 'ESTP, ESFP 유형이 주로 이 자리를 선택합니다. 즉흥적이고 에너지가 넘치는 성격이에요. 계획보다는 직감을 믿고 행동하며, 새로운 경험과 모험을 추구하는 타고난 엔터테이너입니다. 파티나 모임에서는 분위기 메이커 역할을 톡톡히 해내죠.',
    compatible: '중간 복도 자리 - 비슷한 에너지로 서로를 이해하고 함께 즐길 수 있어요.',
    incompatible: '맨 앞 창문 자리 - 정반대 성향으로 서로 스트레스를 줄 수 있어요.',
    traits: { focus: 50, observation: 60, immersion: 40, sociability: 95, leadership: 75, freedom: 95 }
  },
  'middle-window': {
    key: 'middle-window',
    emoji: '🌤️',
    title: '중간 창문 자리',
    subtitle: '균형잡힌 관찰자',
    school: '적당히 집중하면서도 창밖 풍경을 즐기던 여유로운 학생. 너무 튀지도 않고 너무 숨지도 않는 균형감각의 소유자예요.',
    job: '상담사, 기획자, 연구원 등 사람과 일의 균형을 잘 맞출 수 있는 직업에 적합합니다. 관찰력이 뛰어나요.',
    mbti: 'ISFJ, INFJ 유형이 많이 앉는 자리입니다. 차분하면서도 통찰력이 있는 성격이에요.',
    compatible: '중간 중앙 자리 - 서로 다른 장점으로 완벽한 조화를 이룰 수 있어요.',
    incompatible: '맨 앞 복도 자리 - 너무 다른 템포로 피로감을 느낄 수 있어요.',
    traits: { focus: 70, observation: 90, immersion: 75, sociability: 55, leadership: 50, freedom: 70 }
  },
  'middle-center': {
    key: 'middle-center',
    emoji: '🎯',
    title: '중간 중앙 자리',
    subtitle: '안정형 올라운더',
    school: '어떤 상황에서도 무난하게 적응하던 안정적인 학생. 친구들 사이에서 중재자 역할을 자주 맡았던 타입이에요.',
    job: '일반 사무직, 기획, 인사 등 다양한 분야에서 두루 활약할 수 있습니다. 협업 능력이 뛰어나요.',
    mbti: 'ISFP, ESFJ 유형이 주로 이 자리에 앉습니다. 조화롭고 협력적인 성격을 가지고 있어요.',
    compatible: '모든 자리 - 누구와도 잘 어울리는 만능 친화형이에요.',
    incompatible: '특별히 없음 - 대부분의 사람들과 무난하게 지낼 수 있어요.',
    traits: { focus: 75, observation: 75, immersion: 65, sociability: 75, leadership: 65, freedom: 60 }
  },
  'middle-aisle': {
    key: 'middle-aisle',
    emoji: '🤝',
    title: '중간 복도 자리',
    subtitle: '사교형 네트워커',
    school: '쉬는 시간마다 여러 반 친구들과 교류하던 인싸 학생. 복도에서 일어나는 모든 일을 먼저 알고 있던 정보통이에요.',
    job: '홍보, 마케팅, 영업, 서비스업 등 사람들과의 만남이 많은 직업에 천부적 재능을 보입니다.',
    mbti: 'ESFP, ENFP 유형이 많이 앉는 자리입니다. 외향적이고 친화력이 뛰어난 성격이에요.',
    compatible: '맨 앞 복도 자리 - 비슷한 에너지로 시너지 효과를 낼 수 있어요.',
    incompatible: '맨 뒤 창문 자리 - 정반대 성향으로 서로 이해하기 어려울 수 있어요.',
    traits: { focus: 55, observation: 70, immersion: 50, sociability: 90, leadership: 70, freedom: 85 }
  },
  'back-window': {
    key: 'back-window',
    emoji: '🌙',
    title: '맨 뒤 창문 자리',
    subtitle: '철학자형 사색가',
    school: '조용히 뒤에서 모든 것을 지켜보던 깊이 있는 학생. 창밖을 보며 인생을 생각하고 자신만의 철학을 키워나가던 타입이에요.',
    job: '연구원, 작가, 철학자, 예술가 등 깊은 사고가 필요한 직업에 적합합니다. 독창적인 아이디어의 소유자예요.',
    mbti: 'INTJ, INTP 유형이 주로 이 자리를 선택합니다. 내성적이면서도 독립적인 성격이에요.',
    compatible: '맨 앞 창문 자리 - 서로의 내적 세계를 존중하며 깊은 교감을 나눌 수 있어요.',
    incompatible: '중간 복도 자리 - 너무 다른 에너지로 서로 부담스러울 수 있어요.',
    traits: { focus: 80, observation: 95, immersion: 95, sociability: 25, leadership: 35, freedom: 75 }
  },
  'back-center': {
    key: 'back-center',
    emoji: '🛡️',
    title: '맨 뒤 중앙 자리',
    subtitle: '신중형 전략가',
    school: '뒤에서 전체 상황을 파악하며 신중하게 행동하던 전략적 사고의 소유자. 필요할 때만 나서던 숨은 실력자 타입이에요.',
    job: '전략기획, 분석가, 컨설턴트 등 전체적인 관점에서 판단하는 직업에 뛰어납니다. 통찰력이 깊어요.',
    mbti: 'ISTJ, INTJ 유형이 많이 앉는 자리입니다. 신중하고 계획적인 성격을 가지고 있어요.',
    compatible: '맨 앞 창문 자리 - 서로 다른 방식으로 깊이를 추구하며 좋은 관계를 만들어요.',
    incompatible: '맨 앞 복도 자리 - 접근 방식이 너무 달라 충돌할 가능성이 높아요.',
    traits: { focus: 90, observation: 85, immersion: 80, sociability: 45, leadership: 70, freedom: 55 }
  },
  'back-aisle': {
    key: 'back-aisle',
    emoji: '🎭',
    title: '맨 뒤 복도 자리',
    subtitle: '자유로운 개성인',
    school: '자신만의 스타일을 고집하며 남들과는 다른 길을 걸어가던 독특한 매력의 소유자. 규칙보다는 자유를 추구하던 반항아 기질이 있어요.',
    job: '예술가, 프리랜서, 창업가 등 자유로운 환경에서 창의성을 발휘할 수 있는 직업을 선호합니다.',
    mbti: 'ISTP, ISFP 유형이 주로 이 자리에 앉습니다. 독립적이고 유연한 사고를 가진 성격이에요.',
    compatible: '맨 뒤 창문 자리 - 서로의 개성을 인정하며 편안한 관계를 유지할 수 있어요.',
    incompatible: '맨 앞 중앙 자리 - 가치관이 너무 달라 서로 답답함을 느낄 수 있어요.',
    traits: { focus: 60, observation: 80, immersion: 70, sociability: 40, leadership: 45, freedom: 95 }
  }
};

export function calculateSeatType(userScores: Record<string, number>): SeatResult {
  let bestMatch = 'middle-center';
  let bestScore = -Infinity;

  // First, determine which trait is the highest for the user
  const maxUserScore = Math.max(...Object.values(userScores));
  const dominantTraits = Object.keys(userScores).filter(
    trait => userScores[trait] === maxUserScore
  );

  console.log('User scores:', userScores);
  console.log('Dominant traits:', dominantTraits);

  Object.keys(seatTypes).forEach(seatKey => {
    const seatTraits = seatTypes[seatKey].traits;
    let matchScore = 0;

    // Calculate similarity score for each trait
    Object.keys(userScores).forEach(trait => {
      const userScore = userScores[trait];
      const seatScore = seatTraits[trait as keyof Traits];
      
      // Normalize both scores to 0-100 scale for comparison
      const normalizedUserScore = Math.min((userScore / 20) * 100, 100);
      const normalizedSeatScore = seatScore;
      
      // Calculate inverse distance (higher = more similar)
      const distance = Math.abs(normalizedUserScore - normalizedSeatScore);
      const similarity = 100 - distance;
      
      // Give extra weight to dominant traits
      const weight = dominantTraits.includes(trait) ? 2 : 1;
      matchScore += similarity * weight;
    });

    console.log(`${seatKey}: score ${matchScore}`);

    if (matchScore > bestScore) {
      bestScore = matchScore;
      bestMatch = seatKey;
    }
  });

  console.log('Best match:', bestMatch, 'with score:', bestScore);
  return seatTypes[bestMatch];
}
