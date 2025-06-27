import { useEffect, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function VignetteAd() {
  const [showVignette, setShowVignette] = useState(false);

  useEffect(() => {
    // Show vignette ad after 3 seconds
    const timer = setTimeout(() => {
      setShowVignette(true);
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('Vignette AdSense error:', error);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showVignette) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative bg-white rounded-lg p-4 max-w-sm mx-4">
        <button
          onClick={() => setShowVignette(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
          data-ad-slot="4567890123"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}