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

        // --- Configuration ---
        const particleFillColor = color === 'dark' ? 'rgba(39, 1, 61, 0.9)' : 'rgba(255, 255, 255, 0.9)';
        const lineStrokeColorRGB = color === 'dark' ? '39, 1, 61' : '255, 255, 255';
        const BACKGROUND_PARTICLE_COUNT = 50; // More unconnected dots
        const MAX_SPEED = 0.2; // Slower animation

        // --- Constellation Definition (based on a 100x100 grid) ---
        const birdPointsDefinition = [
            { x: 15, y: 5 },   // 0: Top wing tip
            { x: 50, y: 25 },  // 1: Back
            { x: 75, y: 30 },  // 2: Head
            { x: 85, y: 35 },  // 3: Upper beak joint
            { x: 90, y: 40 },  // 4: Mid beak
            { x: 95, y: 38 },  // 5: Beak tip
            { x: 80, y: 45 },  // 6: Lower beak joint
            { x: 60, y: 50 },  // 7: Neck
            { x: 70, y: 70 },  // 8: Underbelly
            { x: 35, y: 65 },  // 9: Lower wing
            { x: 5, y: 95 },   // 10: Tail tip
        ];

        const birdLinesDefinition = [
            [0, 9], [9, 10], [10, 8], [8, 9], [0, 1], [1, 9], [1, 7],
            [7, 8], [1, 2], [2, 3], [3, 4], [4, 5], [3, 6], [6, 4], [6, 7]
        ];

        let animationFrameId: number;
        let constellationParticles: Particle[] = [];
        let backgroundParticles: Particle[] = [];
        let scale = 1; // Variable to hold the scale factor

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

        class Particle {
            x: number;
            y: number;
            initialX: number;
            initialY: number;
            size: number;
            speedX: number;
            speedY: number;
            isConstellation: boolean;
            index: number;

            constructor(x: number, y: number, size: number, speedX: number, speedY: number, isConstellation = false, index = -1) {
                this.x = x;
                this.y = y;
                this.initialX = x;
                this.initialY = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
                this.isConstellation = isConstellation;
                this.index = index;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = particleFillColor;
                ctx.fill();
            }

            update(canvasWidth: number, canvasHeight: number, time?: number) {
                if (this.isConstellation && time) {
                    const restoringForce = 0.003;
                    const wanderStrength = 0.01;
                    
                    // --- Flapping motion for wings ---
                    const flapAmplitude = 8 * scale; // Scaled amplitude
                    const flapSpeed = 0.003;
                    const flapTime = time * flapSpeed;
                    
                    let flapOffsetY = 0;
                    if (this.index === 0) { // Top wing tip
                        flapOffsetY = -Math.sin(flapTime) * flapAmplitude;
                    } else if (this.index === 9) { // Lower wing
                        flapOffsetY = Math.sin(flapTime + Math.PI / 4) * flapAmplitude * 0.8;
                    } else if (this.index === 10) { // Tail tip
                        flapOffsetY = Math.sin(flapTime + Math.PI / 2) * flapAmplitude * 0.5;
                    }

                    const targetY = this.initialY + flapOffsetY;

                    // Apply a restoring force towards the (potentially animated) target position
                    const dx = this.initialX - this.x;
                    const dy = targetY - this.y;

                    this.speedX += dx * restoringForce + (Math.random() - 0.5) * wanderStrength;
                    this.speedY += dy * restoringForce + (Math.random() - 0.5) * wanderStrength;

                    // Apply damping/friction
                    this.speedX *= 0.85;
                    this.speedY *= 0.85;

                    this.x += this.speedX;
                    this.y += this.speedY;
                } else {
                    // For background particles, bounce off the walls
                    if (this.x + this.size > canvasWidth || this.x - this.size < 0) {
                        this.speedX = -this.speedX;
                    }
                    if (this.y + this.size > canvasHeight || this.y - this.size < 0) {
                        this.speedY = -this.speedY;
                    }
                    this.x += this.speedX;
                    this.y += this.speedY;
                }
            }
        }
        
        const init = () => {
            resizeCanvas();
            const canvasWidth = canvas.getBoundingClientRect().width;
            const canvasHeight = canvas.getBoundingClientRect().height;

            // --- Initialize Constellation Particles ---
            scale = Math.min(canvasWidth, canvasHeight) / 110;
            const offsetX = (canvasWidth - 100 * scale) / 2;
            const offsetY = (canvasHeight - 100 * scale) / 2 + 15 * scale;

            constellationParticles = birdPointsDefinition.map((p, index) => {
                const size = color === 'dark' ? 1.5 : 2; // Constellation points are slightly larger
                const x = p.x * scale + offsetX;
                const y = p.y * scale + offsetY;
                const speedX = (Math.random() * MAX_SPEED) - (MAX_SPEED / 2);
                const speedY = (Math.random() * MAX_SPEED) - (MAX_SPEED / 2);
                return new Particle(x, y, size, speedX, speedY, true, index);
            });
            
            // --- Initialize Background Particles ---
            backgroundParticles = [];
            for (let i = 0; i < BACKGROUND_PARTICLE_COUNT; i++) {
                const size = Math.random() * 1.2 + 0.3;
                const x = Math.random() * canvasWidth;
                const y = Math.random() * canvasHeight;
                const speedX = (Math.random() * MAX_SPEED) - (MAX_SPEED / 2);
                const speedY = (Math.random() * MAX_SPEED) - (MAX_SPEED / 2);
                backgroundParticles.push(new Particle(x, y, size, speedX, speedY, false));
            }
        };

        const drawBirdLines = () => {
            if (!ctx) return;
            ctx.lineWidth = 1;
            ctx.strokeStyle = `rgba(${lineStrokeColorRGB}, 0.6)`;

            birdLinesDefinition.forEach(line => {
                const pA = constellationParticles[line[0]];
                const pB = constellationParticles[line[1]];
                if (pA && pB) {
                    ctx.beginPath();
                    ctx.moveTo(pA.x, pA.y);
                    ctx.lineTo(pB.x, pB.y);
                    ctx.stroke();
                }
            });
        };

        const animate = () => {
            if (!ctx) return;
            const canvasWidth = canvas.getBoundingClientRect().width;
            const canvasHeight = canvas.getBoundingClientRect().height;
            const time = Date.now();

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            
            backgroundParticles.forEach(particle => {
                particle.update(canvasWidth, canvasHeight);
                particle.draw();
            });

            constellationParticles.forEach(particle => {
                particle.update(canvasWidth, canvasHeight, time);
                particle.draw();
            });
            
            drawBirdLines();

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