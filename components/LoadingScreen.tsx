import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC<{ onLoaded: () => void }> = ({ onLoaded }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const animationDuration = 1500; // ms for the fill animation
    const initialDelay = 500;       // ms before animation starts
    const fadeOutDelay = 200;       // ms after animation before fade-out
    
    const totalVisibleTime = animationDuration + initialDelay + fadeOutDelay;

    // Start fading out before the component is fully removed
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, totalVisibleTime);

    // Call onLoaded when the fade-out animation is complete
    const loadedTimer = setTimeout(() => {
      onLoaded();
    }, totalVisibleTime + 500); // 500ms is the fade-out duration from tailwind

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadedTimer);
    };
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#27013D] transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="loading-logo-container" aria-label="BIRD&">
        <h1 className="loading-logo-outline" aria-hidden="true">BIRD&</h1>
        <div className="loading-logo-fill-wrapper">
          <h1 className="loading-logo-fill">BIRD&</h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
