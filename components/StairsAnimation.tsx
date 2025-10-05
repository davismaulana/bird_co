import React from 'react';

const StairsAnimation: React.FC = () => {
    const steps = 24; // More stairs
    const baseDelay = 100; // Adjusted for more steps

    const styles = `
        .stair-step {
            opacity: 0;
            transform-origin: bottom left;
        }

        .reveal.is-visible .stair-step {
            animation: fadeInScaleUp 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
    `;

    const viewBoxWidth = 120;
    const viewBoxHeight = 60;
    const stepWidth = viewBoxWidth / steps;

    // Color interpolation logic
    const hexToRgb = (hex: string): { r: number, g: number, b: number } | null => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    const rgbToHex = (r: number, g: number, b: number): string => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0');
    };
    
    const colorStops = [
        hexToRgb('#FFFFFF'), // white
        hexToRgb('#D1D5DB'), // grey
        hexToRgb('#881337'), // burgundy
        hexToRgb('#5B21B6'), // purple
        hexToRgb('#27013D'), // dark purple
        hexToRgb('#000000'), // black
    ].filter(c => c !== null) as { r: number, g: number, b: number }[];

    const getStepColor = (index: number): string => {
        const ratio = index / (steps - 1);
        
        const colorSegment = ratio * (colorStops.length - 1);
        const startIndex = Math.floor(colorSegment);
        const endIndex = Math.min(startIndex + 1, colorStops.length - 1);
        
        const segmentRatio = colorSegment - startIndex;

        const startColor = colorStops[startIndex];
        const endColor = colorStops[endIndex];

        const r = Math.round(startColor.r * (1 - segmentRatio) + endColor.r * segmentRatio);
        const g = Math.round(startColor.g * (1 - segmentRatio) + endColor.g * segmentRatio);
        const b = Math.round(startColor.b * (1 - segmentRatio) + endColor.b * segmentRatio);

        return rgbToHex(r, g, b);
    };

    return (
        <div className="w-full h-full bg-white flex items-center justify-center">
            <style>{styles}</style>
            <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <g>
                    {/* Main solid steps */}
                    {Array.from({ length: steps }).map((_, i) => {
                        const stepHeight = ((i + 1) / steps) * viewBoxHeight;
                        const color = getStepColor(i);
                        return (
                            <rect
                                key={`stair-step-${i}`}
                                className="stair-step"
                                x={i * stepWidth}
                                y={viewBoxHeight - stepHeight}
                                width={stepWidth + 0.2}
                                height={stepHeight}
                                fill={color}
                                style={{ animationDelay: `${i * baseDelay}ms` }}
                            />
                        );
                    })}
                </g>
            </svg>
        </div>
    );
};

export default StairsAnimation;