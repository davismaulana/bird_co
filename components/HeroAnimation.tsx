
import React, { useRef, useEffect } from 'react';

interface HeroAnimationProps {
    color?: 'dark' | 'light';
}

const HeroAnimation: React.FC<HeroAnimationProps> = ({ color = 'dark' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particleFillColor = color === 'dark' ? 'rgba(39, 1, 61, 0.8)' : 'rgba(255, 255, 255, 0.8)';
        const lineStrokeColorRGB = color === 'dark' ? '109, 0, 55' : '255, 255, 255';

        let animationFrameId: number;
        let particleSections: Particle[][] = [];
        const gridConfig = { rows: 1, cols: 1 };

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

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            canConnect: boolean;

            constructor(x: number, y: number, size: number, speedX: number, speedY: number, canConnect: boolean) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
                this.canConnect = canConnect;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = particleFillColor;
                ctx.fill();
            }

            update(minX: number, maxX: number, minY: number, maxY: number) {
                if (this.x + this.size > maxX || this.x - this.size < minX) {
                    this.speedX = -this.speedX;
                }
                if (this.y + this.size > maxY || this.y - this.size < minY) {
                    this.speedY = -this.speedY;
                }

                if (this.x + this.size > maxX) this.x = maxX - this.size;
                if (this.x - this.size < minX) this.x = minX + this.size;
                if (this.y + this.size > maxY) this.y = maxY - this.size;
                if (this.y - this.size < minY) this.y = minY + this.size;

                this.x += this.speedX;
                this.y += this.speedY;
            }
        }

        const init = () => {
            resizeCanvas();
            particleSections = [];

            const parentWidth = canvas.getBoundingClientRect().width;
            const parentHeight = canvas.getBoundingClientRect().height;
            const sectionWidth = parentWidth / gridConfig.cols;
            const sectionHeight = parentHeight / gridConfig.rows;

            for (let r = 0; r < gridConfig.rows; r++) {
                for (let c = 0; c < gridConfig.cols; c++) {
                    const sectionParticles: Particle[] = [];
                    const minX = c * sectionWidth;
                    const minY = r * sectionHeight;
                    const totalParticles = 60;

                    for (let i = 0; i < totalParticles; i++) {
                        const size = Math.random() * 1.5 + 0.5;
                        const x = Math.random() * (sectionWidth - size * 2) + minX + size;
                        const y = Math.random() * (sectionHeight - size * 2) + minY + size;
                        const speedX = (Math.random() * 0.2) - 0.1;
                        const speedY = (Math.random() * 0.2) - 0.1;
                        const canConnect = Math.random() > 0.5;
                        sectionParticles.push(new Particle(x, y, size, speedX, speedY, canConnect));
                    }
                    particleSections.push(sectionParticles);
                }
            }
        };

        const connectParticles = (particleArray: Particle[]) => {
            if (!ctx) return;

            const parentWidth = canvas.getBoundingClientRect().width;
            const connectThreshold = (parentWidth / 5) * (parentWidth / 5);

            for (let i = 0; i < particleArray.length; i++) {
                for (let j = i + 1; j < particleArray.length; j++) {
                    const pA = particleArray[i];
                    const pB = particleArray[j];
                    
                    if (!pA.canConnect || !pB.canConnect) continue;

                    const distance = ((pA.x - pB.x) * (pA.x - pB.x)) + ((pA.y - pB.y) * (pA.y - pB.y));

                    if (distance < connectThreshold) {
                        const opacityValue = 1 - (distance / connectThreshold);
                        ctx.strokeStyle = `rgba(${lineStrokeColorRGB}, ${opacityValue * 0.4})`;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.moveTo(pA.x, pA.y);
                        ctx.lineTo(pB.x, pB.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const connect = () => {
            if (!particleSections) return;
            particleSections.forEach(connectParticles);
        };

        const animate = () => {
            if (!ctx || !particleSections) return;
            const parentWidth = canvas.getBoundingClientRect().width;
            const parentHeight = canvas.getBoundingClientRect().height;
            const sectionWidth = parentWidth / gridConfig.cols;
            const sectionHeight = parentHeight / gridConfig.rows;

            ctx.clearRect(0, 0, parentWidth, parentHeight);

            particleSections.forEach((section, index) => {
                const c = index % gridConfig.cols;
                const r = Math.floor(index / gridConfig.cols);
                const minX = c * sectionWidth;
                const maxX = (c + 1) * sectionWidth;
                const minY = r * sectionHeight;
                const maxY = (r + 1) * sectionHeight;

                for (const particle of section) {
                    particle.update(minX, maxX, minY, maxY);
                    particle.draw();
                }
            });

            connect();
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
