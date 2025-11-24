import React, { useRef, useEffect } from 'react';

interface HeroAnimationProps {
  color?: 'dark' | 'light' | 'grey';
}

// Utility to interpolate between two colors
const interpolateColor = (color1: [number, number, number], color2: [number, number, number], factor: number) => {
    const result = color1.slice() as [number, number, number];
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
    }
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
};

// Utility to parse hex color
const hexToRgb = (hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
};


const HeroAnimation: React.FC<HeroAnimationProps> = ({ color = 'dark' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // --- Configuration ---
        const GRID_COLS = 150; // Length of the ribbon (increased to fill screen)
        const GRID_ROWS = 15; // Thickness of the ribbon (increased)
        const PARTICLE_BASE_SIZE = 1.6; // Particle size (increased)
        const SPACING_X = 18; // Horizontal spacing (increased)
        const SPACING_Y = 18; // Vertical spacing (increased)
        const TWIST_ANIMATION_SPEED = 0.0005; // Speed of the in-place twist
        const ROTATION_SPEED_Y = 0; // No global rotation
        const ROTATION_X_ANGLE = 0.4; // Static tilt for better viewing angle (slightly reduced)

        const [COLOR_START_RGB, COLOR_END_RGB] = (() => {
            switch (color) {
                case 'light':
                    return [hexToRgb('#FFD700'), hexToRgb('#B8860B')];
                case 'grey':
                    return [hexToRgb('#E5E7EB'), hexToRgb('#6B7280')];
                case 'dark':
                default:
                    return [hexToRgb('#6D0037'), hexToRgb('#27013D')];
            }
        })();

        let animationFrameId: number;
        let points: { ox: number, oy: number }[] = [];
        let gridWidth = (GRID_COLS - 1) * SPACING_X;

        // --- Canvas and Particle Logic ---
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const rect = parent.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                canvas.style.width = `${rect.width}px`;
                canvas.style.height = `${rect.height}px`;
                ctx.scale(dpr, dpr);
            }
        };

        const init = () => {
            resizeCanvas();
            points = [];
            gridWidth = (GRID_COLS - 1) * SPACING_X;
            const gridHeight = (GRID_ROWS - 1) * SPACING_Y;

            // Create a flat grid of points in the XY plane
            for (let i = 0; i < GRID_ROWS; i++) {
                for (let j = 0; j < GRID_COLS; j++) {
                    const x = j * SPACING_X - gridWidth / 2;
                    const y = i * SPACING_Y - gridHeight / 2;
                    points.push({ ox: x, oy: y });
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            const parent = canvas.parentElement;
            if(!parent) return;
            
            const rect = parent.getBoundingClientRect();
            const canvasWidth = rect.width;
            const canvasHeight = rect.height;
            const time = Date.now();
            const perspective = canvasWidth * 0.6; // Decreased for a "bigger" look

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            const globalAngleY = time * ROTATION_SPEED_Y; // Will be 0

            // Process and sort points by Z for proper 3D rendering
            const projectedPoints = points.map(p => {
                const x = p.ox;
                const y = p.oy;
                
                const normalizedX = (x + gridWidth / 2) / gridWidth;
                const baseTwistAngle = normalizedX * Math.PI * 2;
                
                const animatedRotation = time * TWIST_ANIMATION_SPEED;
                
                const twistAngle = baseTwistAngle + animatedRotation;
                
                const twistedY = y * Math.cos(twistAngle);
                const twistedZ = y * Math.sin(twistAngle);
                
                // Since ROTATION_SPEED_Y is 0, globalAngleY is 0, cos(0) is 1, sin(0) is 0.
                // This block simplifies, but we'll keep it for clarity.
                let rotatedX = x * Math.cos(globalAngleY) + twistedZ * Math.sin(globalAngleY);
                let rotatedZ = -x * Math.sin(globalAngleY) + twistedZ * Math.cos(globalAngleY);
                
                const finalY = twistedY * Math.cos(ROTATION_X_ANGLE) - rotatedZ * Math.sin(ROTATION_X_ANGLE);
                const finalZ = twistedY * Math.sin(ROTATION_X_ANGLE) + rotatedZ * Math.cos(ROTATION_X_ANGLE);
                const finalX = rotatedX;

                return { ...p, finalX, finalY, finalZ };
            });

            // Sort points so that distant points are drawn first
            projectedPoints.sort((a, b) => a.finalZ - b.finalZ);

            for (const p of projectedPoints) {
                // Apply perspective projection
                if (p.finalZ > perspective) continue;

                const scale = perspective / (perspective - p.finalZ);
                const screenX = canvasWidth / 2 + p.finalX * scale;
                const screenY = canvasHeight / 2 + p.finalY * scale;
                const particleSize = PARTICLE_BASE_SIZE * scale;

                // Color based on depth for a fading effect
                const colorFactor = (p.finalZ + perspective * 0.6) / (perspective * 1.6);
                const clampedFactor = Math.max(0, Math.min(1, colorFactor));
                
                if (particleSize > 0.1) {
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, particleSize, 0, Math.PI * 2);
                    ctx.fillStyle = interpolateColor(COLOR_START_RGB, COLOR_END_RGB, clampedFactor);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();
        
        window.addEventListener('resize', init);

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color]);

    return (
        <div className="absolute inset-0 w-full h-full">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
};

export default HeroAnimation;