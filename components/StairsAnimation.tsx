import React from 'react';

const StairsAnimation: React.FC = () => {
    const steps = 6;
    const baseDelay = 250; // Slower stagger

    const styles = `
        .stair-step {
            opacity: 0;
        }

        .reveal.is-visible .stair-step {
            /* Slower, smoother animation */
            animation: fadeInScaleUp 2.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            transform-origin: bottom left;
        }

        @keyframes fadeInScaleUp {
            from {
                opacity: 0;
                /* More subtle transform */
                transform: scale(0.9) translateY(5px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
    `;

    return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
            <style>{styles}</style>
            {/* The viewBox height has been reduced to make the animation object shorter. */}
            <svg viewBox="0 0 120 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="stair-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#27013D" />
                        <stop offset="100%" stopColor="#6D0037" />
                    </linearGradient>
                </defs>

                {/* The "stairs" y and height values are adjusted for the new viewBox. */}
                {Array.from({ length: steps }).map((_, i) => (
                    <rect
                        key={`stair-${i}`}
                        className="stair-step"
                        x={i * 20}
                        y={(steps - 1 - i) * 10}
                        width="20"
                        height={(i + 1) * 10}
                        fill="url(#stair-grad)"
                        rx="2"
                        ry="2"
                        style={{ animationDelay: `${i * baseDelay}ms` }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default StairsAnimation;