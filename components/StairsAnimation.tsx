
import React from 'react';

const StairsAnimation: React.FC = () => {
    const steps = 6;
    const baseDelay = 150; // Slower stagger

    const styles = `
        .stair-step {
            opacity: 0;
        }

        .reveal.is-visible .stair-step {
            /* Slower, smoother animation */
            animation: fadeInScaleUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
        <div className="w-full h-full bg-gray-50 flex items-center justify-center p-8">
            <style>{styles}</style>
            <svg viewBox="0 0 120 120" className="w-2/3 h-2/3" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="stair-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#27013D" />
                        <stop offset="100%" stopColor="#6D0037" />
                    </linearGradient>
                </defs>

                {/* The "stairs" */}
                {Array.from({ length: steps }).map((_, i) => (
                    <rect
                        key={`stair-${i}`}
                        className="stair-step"
                        x={i * 20}
                        y={(steps - 1 - i) * 20}
                        width="20"
                        height={(i + 1) * 20}
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
