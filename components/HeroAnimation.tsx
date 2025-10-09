
import React, { useRef, useEffect } from 'react';

interface HeroAnimationProps {
    color?: 'dark' | 'light';
}

const HeroAnimation: React.FC<HeroAnimationProps> = ({ color = 'dark' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const dotColor = color === 'dark' ? 'rgba(39, 1, 61, 0.9)' : 'rgba(255, 255, 255, 0.9)';
        const lineColorRGB = color === 'dark' ? '39, 1, 61' : '255, 255, 255';

        let points: { x: number, y: number, z: number }[] = [];
        let angleY = 0;
        let angleX = 0.2; // Start with a slight tilt

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
            const numLat = 12; // number of latitude lines
            const numLon = 24; // number of longitude lines
            const radius = Math.min(canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height) * 0.35;

            for (let i = 0; i <= numLat; i++) {
                const lat = i * Math.PI / numLat;
                for (let j = 0; j <= numLon; j++) {
                    const lon = j * 2 * Math.PI / numLon;

                    const x = radius * Math.sin(lat) * Math.cos(lon);
                    const y = radius * Math.cos(lat);
                    const z = radius * Math.sin(lat) * Math.sin(lon);
                    
                    points.push({ x, y, z });
                }
            }
        };
        
        const project = (point: { x: number, y: number, z: number }) => {
            // Rotate around Y axis
            const rotatedX_Y = point.x * Math.cos(angleY) - point.z * Math.sin(angleY);
            let rotatedZ_Y = point.x * Math.sin(angleY) + point.z * Math.cos(angleY);
            
            // Rotate around X axis
            const rotatedY_X = point.y * Math.cos(angleX) - rotatedZ_Y * Math.sin(angleX);
            const finalZ = point.y * Math.sin(angleX) + rotatedZ_Y * Math.cos(angleX);

            const parentWidth = canvas.getBoundingClientRect().width;
            const perspective = parentWidth * 0.8;
            const scale = perspective / (perspective + finalZ);

            return {
                x: rotatedX_Y * scale,
                y: rotatedY_X * scale,
                z: finalZ,
                scale: scale,
            };
        };

        const animate = () => {
            const parentWidth = canvas.getBoundingClientRect().width;
            const parentHeight = canvas.getBoundingClientRect().height;
            ctx.clearRect(0, 0, parentWidth, parentHeight);
            ctx.save();
            ctx.translate(parentWidth / 2, parentHeight / 2);

            const projectedPoints = points.map(project);
            
            const numLat = 12;
            const numLon = 24;

            // Draw lines
            for (let i = 0; i < numLat; i++) {
                for (let j = 0; j < numLon; j++) {
                    const p1_index = i * (numLon + 1) + j;
                    const p2_index = (i + 1) * (numLon + 1) + j;
                    const p3_index = i * (numLon + 1) + (j + 1);

                    const p1 = projectedPoints[p1_index];
                    const p2 = projectedPoints[p2_index];
                    const p3 = projectedPoints[p3_index];

                    if(p1 && p2) {
                        const avgZ = (p1.z + p2.z) / 2;
                        const radius = Math.min(parentWidth, parentHeight) * 0.35;
                        const opacity = Math.max(0, 0.7 - (avgZ / radius));
                        ctx.strokeStyle = `rgba(${lineColorRGB}, ${opacity * 0.5})`;
                        ctx.lineWidth = 0.75;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                     if(p1 && p3) {
                        const avgZ = (p1.z + p3.z) / 2;
                        const radius = Math.min(parentWidth, parentHeight) * 0.35;
                        const opacity = Math.max(0, 0.7 - (avgZ / radius));
                        ctx.strokeStyle = `rgba(${lineColorRGB}, ${opacity * 0.5})`;
                        ctx.lineWidth = 0.75;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p3.x, p3.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw dots
            projectedPoints.forEach(p => {
                if (p.z > -Infinity) { // Render all dots
                    const opacity = Math.max(0.1, p.scale * 0.8);
                    const size = 1.5 * p.scale;
                    
                    ctx.globalAlpha = opacity;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, Math.max(0.1, size), 0, Math.PI * 2);
                    ctx.fillStyle = dotColor;
                    ctx.fill();
                }
            });
            
            ctx.globalAlpha = 1;
            ctx.restore();
            
            angleY += 0.003;
            angleX += 0.0005;
            
            animationFrameId.current = requestAnimationFrame(animate);
        };
        
        init();
        animate();

        window.addEventListener('resize', init);
        
        return () => {
            window.removeEventListener('resize', init);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [color]);
    
    return (
        <div className="absolute inset-0 w-full h-full">
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
};

export default HeroAnimation;
