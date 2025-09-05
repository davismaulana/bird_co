import React, { useEffect, useRef } from 'react';

// Make lottie available globally
declare global {
    interface Window {
        lottie: any;
    }
}

const LottieGraph: React.FC<{ className?: string }> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<any>(null);

    useEffect(() => {
        if (containerRef.current && window.lottie) {
            animRef.current = window.lottie.loadAnimation({
                container: containerRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'https://lottie.host/01c4f346-723a-43a5-ba7e-c40d6c66c39f/o8i4jYgC4s.json'
            });
        }

        return () => {
            if (animRef.current) {
                animRef.current.destroy();
                animRef.current = null;
            }
        };
    }, []);

    return (
        <div className={`bg-gradient-to-br from-black/30 to-black/10 border border-white/10 rounded-3xl p-4 sm:p-6 backdrop-blur-md shadow-2xl shadow-violet-500/20 ${className}`}>
            <div ref={containerRef}></div>
        </div>
    );
};

export default LottieGraph;