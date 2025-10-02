import React from 'react';

const StairsAnimation: React.FC = () => {
    const steps = 12; // Increased number of steps for more detail
    const baseDelay = 100; // Faster stagger for more objects

    const styles = `
        .stair-step, .stair-outline {
            opacity: 0;
            transform-origin: bottom left;
        }

        .reveal.is-visible .stair-step {
            animation: fadeInScaleUp 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .reveal.is-visible .stair-outline {
            animation: fadeIn 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeInScaleUp {
            from {
                opacity: 0;
                transform: scale(0.95) translateY(3px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;

    const viewBoxWidth = 120;
    const viewBoxHeight = 60;
    const stepWidth = viewBoxWidth / steps;

    return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
            <style>{styles}</style>
            <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="stair-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#27013D" />
                        <stop offset="100%" stopColor="#6D0037" />
                    </linearGradient>
                </defs>

                <g>
                    {/* Background/filled steps for refinement */}
                    {Array.from({ length: steps }).map((_, i) => {
                        const stepHeight = ((i + 1) / steps) * viewBoxHeight;
                        return (
                            <rect
                                key={`stair-outline-${i}`}
                                className="stair-outline"
                                x={i * stepWidth}
                                y={viewBoxHeight - stepHeight}
                                width={stepWidth}
                                height={stepHeight}
                                fill="url(#stair-grad)"
                                fillOpacity="0.2"
                                rx="1"
                                ry="1"
                                style={{ animationDelay: `${i * baseDelay}ms` }}
                            />
                        );
                    })}
                </g>
                
                <g>
                    {/* Main solid steps */}
                    {Array.from({ length: steps }).map((_, i) => {
                        const stepHeight = ((i + 1) / steps) * viewBoxHeight;
                        return (
                            <rect
                                key={`stair-step-${i}`}
                                className="stair-step"
                                x={i * stepWidth}
                                y={viewBoxHeight - stepHeight}
                                width={stepWidth}
                                height={stepHeight}
                                fill="url(#stair-grad)"
                                rx="2"
                                ry="2"
                                style={{ animationDelay: `${i * baseDelay + 100}ms` }} // Slightly offset delay from outlines
                            />
                        );
                    })}
                </g>
            </svg>
        </div>
    );
};

export default StairsAnimation;