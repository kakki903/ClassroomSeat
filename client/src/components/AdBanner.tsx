import { useEffect, useRef } from 'react';

interface AdBannerProps {
  position: 'top' | 'bottom';
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdBanner({ position }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && adRef.current && !adRef.current.hasAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isLoaded.current = true;
        }
      } catch (error) {
        console.error('AdBanner error:', error);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const adSlot = position === 'top' ? '1111111111' : '2222222222';

  return (
    <div className={`w-full ${position === 'top' ? 'top-0 z-50' : 'mt-8'} bg-white/5 backdrop-blur-sm border-t border-white/10`}>
      <div className="max-w-4xl mx-auto p-2">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', height: '90px' }}
          data-ad-client="ca-pub-5063634047102858"
          data-ad-slot={adSlot}
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
