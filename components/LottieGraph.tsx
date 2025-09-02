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
                loop: false,
                autoplay: true,
                path: 'https://cdn.prod.website-files.com/66b09aac8872a8a0bf7addd4/6709098dc82d60ff5c237971_illustration-graph-%5Bremix%5D.json'
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
        <div className={`bg-black/20 border border-white/10 rounded-3xl p-4 sm:p-6 backdrop-blur-sm shadow-2xl shadow-violet-500/10 ${className}`}>
            <div ref={containerRef}></div>
        </div>
    );
};

export default LottieGraph;