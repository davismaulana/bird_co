import React, { useRef, useEffect } from 'react';

interface HeroAnimationProps {
  color?: 'dark' | 'light';
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
        const GRID_COLS = 30;
        const GRID_ROWS = 30;
        const PARTICLE_BASE_SIZE = 1.2;
        const PERSPECTIVE = 350;
        const WAVE_AMPLITUDE = 50;
        const ANIMATION_SPEED = 0.0005;

        const [COLOR_START_RGB, COLOR_END_RGB] = color === 'dark'
            ? [hexToRgb('#6D0037'), hexToRgb('#27013D')]
            : [hexToRgb('#FFD700'), hexToRgb('#B8860B')];

        let animationFrameId: number;
        let points: { x: number, y: number, z: number, initialX: number, initialY: number }[][] = [];

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
            const canvasWidth = canvas.getBoundingClientRect().width;
            const canvasHeight = canvas.getBoundingClientRect().height;

            points = [];
            const gridWidth = canvasWidth * 0.9;
            const gridHeight = canvasHeight * 0.9;
            const startX = (canvasWidth - gridWidth) / 2;
            const startY = (canvasHeight - gridHeight) / 2;

            for (let i = 0; i < GRID_ROWS; i++) {
                const row = [];
                for (let j = 0; j < GRID_COLS; j++) {
                    const x = startX + (j / (GRID_COLS - 1)) * gridWidth;
                    const y = startY + (i / (GRID_ROWS - 1)) * gridHeight;
                    row.push({
                        x: x,
                        y: y,
                        z: 0,
                        initialX: x,
                        initialY: y,
                    });
                }
                points.push(row);
            }
        };

        const animate = () => {
            if (!ctx) return;
            const canvasWidth = canvas.getBoundingClientRect().width;
            const canvasHeight = canvas.getBoundingClientRect().height;
            const time = Date.now();

            const VANISHING_POINT_X = canvasWidth / 2;
            const VANISHING_POINT_Y = canvasHeight / 2;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            for (let i = 0; i < GRID_ROWS; i++) {
                for (let j = 0; j < GRID_COLS; j++) {
                    const point = points[i][j];

                    // Calculate Z-coordinate for wave effect
                    const dx = point.initialX - VANISHING_POINT_X;
                    const dy = point.initialY - VANISHING_POINT_Y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    point.z = Math.sin(dist * 0.03 - time * ANIMATION_SPEED * 1.5) * WAVE_AMPLITUDE;

                    // Perspective projection
                    const scale = PERSPECTIVE / (PERSPECTIVE + point.z);
                    const screenX = VANISHING_POINT_X + (point.initialX - VANISHING_POINT_X) * scale;
                    const screenY = VANISHING_POINT_Y + (point.initialY - VANISHING_POINT_Y) * scale;
                    const particleSize = PARTICLE_BASE_SIZE * scale;

                    // Color based on Z
                    const colorFactor = (point.z + WAVE_AMPLITUDE) / (WAVE_AMPLITUDE * 2);
                    const clampedFactor = Math.max(0, Math.min(1, colorFactor));
                    
                    if(particleSize > 0) {
                        ctx.beginPath();
                        ctx.arc(screenX, screenY, particleSize, 0, Math.PI * 2);
                        ctx.fillStyle = interpolateColor(COLOR_START_RGB, COLOR_END_RGB, clampedFactor);
                        ctx.fill();
                    }
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