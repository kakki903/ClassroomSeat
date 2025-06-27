declare global {
  interface Window {
    Kakao: any;
  }
}

export const initializeKakao = () => {
  if (typeof window !== 'undefined' && window.Kakao && !window.Kakao.isInitialized()) {
    // Replace with your actual Kakao App Key
    window.Kakao.init('YOUR_KAKAO_APP_KEY');
  }
};

export const shareToKakao = (result: any) => {
  if (typeof window === 'undefined' || !window.Kakao) {
    console.error('Kakao SDK not loaded');
    return;
  }

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `나는 ${result.title}!`,
      description: `${result.subtitle} - 학창시절 자리 성향 테스트 결과`,
      imageUrl: window.location.origin + '/og-image.png',
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    },
    buttons: [
      {
        title: '나도 테스트 해보기',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
    ],
  });
};