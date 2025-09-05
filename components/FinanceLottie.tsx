import React, { useEffect, useRef } from 'react';

// Make lottie available globally
declare global {
    interface Window {
        lottie: any;
    }
}

const FinanceLottie: React.FC<{ className?: string }> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<any>(null);

    useEffect(() => {
        if (containerRef.current && window.lottie) {
            animRef.current = window.lottie.loadAnimation({
                container: containerRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'https://lottie.host/8a719f56-11f4-491a-823c-f37b1d62e153/lWq5f939w8.json'
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
        <div className={`w-full h-full ${className}`}>
            <div ref={containerRef} className="w-full h-full"></div>
        </div>
    );
};

export default FinanceLottie;
