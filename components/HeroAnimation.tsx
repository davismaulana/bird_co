
import React, { useRef, useEffect } from 'react';

const HeroAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[];
        
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                // Use devicePixelRatio for sharper rendering on high-DPI displays
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

            constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(39, 1, 61, 0.7)';
                ctx.fill();
            }

            update() {
                const parentWidth = canvas.getBoundingClientRect().width;
                const parentHeight = canvas.getBoundingClientRect().height;
                if (this.x > parentWidth || this.x < 0) this.speedX = -this.speedX;
                if (this.y > parentHeight || this.y < 0) this.speedY = -this.speedY;

                this.x += this.speedX;
                this.y += this.speedY;
            }
        }

        const init = () => {
            resizeCanvas();
            particles = [];
            
            const parentWidth = canvas.getBoundingClientRect().width;
            const parentHeight = canvas.getBoundingClientRect().height;

            // Significantly fewer particles to increase the gap between them
            const numberOfParticles = (parentHeight * parentWidth) / 40000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 1.5 + 0.5;
                const x = Math.random() * (parentWidth - size * 2) + size;
                const y = Math.random() * (parentHeight - size * 2) + size;
                const speedX = (Math.random() * 0.3) - 0.15;
                const speedY = (Math.random() * 0.3) - 0.15;
                particles.push(new Particle(x, y, size, speedX, speedY));
            }
        };

        const connect = () => {
            if (!ctx) return;
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                                     ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    
                    const parentWidth = canvas.getBoundingClientRect().width;

                    // Further increased connection distance for very long lines
                    const connectThreshold = (parentWidth / 2.5) * (parentWidth / 2.5);
                    if (distance < connectThreshold) {
                        opacityValue = 1 - (distance / connectThreshold);
                        // More visible lines, even at a distance
                        ctx.strokeStyle = `rgba(39, 1, 61, ${opacityValue * 0.6})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx || !particles) return;
            const parentWidth = canvas.getBoundingClientRect().width;
            const parentHeight = canvas.getBoundingClientRect().height;

            ctx.clearRect(0, 0, parentWidth, parentHeight);
            for (const particle of particles) {
                particle.update();
                particle.draw();
            }
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
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
};

export default HeroAnimation;
