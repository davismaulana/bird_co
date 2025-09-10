
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
                canvas.width = parent.getBoundingClientRect().width;
                canvas.height = parent.getBoundingClientRect().height;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
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
                ctx.fillStyle = 'rgba(39, 1, 61, 0.6)';
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

                this.x += this.speedX;
                this.y += this.speedY;
            }
        }

        const init = () => {
            resizeCanvas();
            particles = [];
            // Decreased number of particles for a sparser effect
            const numberOfParticles = (canvas.height * canvas.width) / 25000;
            for (let i = 0; i < numberOfParticles; i++) {
                // Particles are a bit larger and faster for more dynamism
                const size = Math.random() * 1.5 + 1;
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                const speedX = (Math.random() * 0.4) - 0.2;
                const speedY = (Math.random() * 0.4) - 0.2;
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
                    
                    // Increased connection distance for longer lines
                    const connectThreshold = (canvas.width / 4) * (canvas.height / 4);
                    if (distance < connectThreshold) {
                        opacityValue = 1 - (distance / connectThreshold);
                        // Made connecting lines more visible
                        ctx.strokeStyle = `rgba(39, 1, 61, ${opacityValue * 0.5})`;
                        ctx.lineWidth = 1;
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
            ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        <div className="absolute inset-0 w-full h-full opacity-80">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
};

export default HeroAnimation;
