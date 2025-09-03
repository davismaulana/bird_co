import React, { useEffect, useRef } from 'react';
import Animate from './Animate';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let points: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const numPoints = window.innerWidth < 768 ? 40 : 80;
    const maxDist = 150;

    const setup = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        points = [];
        for (let i = 0; i < numPoints; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: Math.random() * 0.4 - 0.2,
                vy: Math.random() * 0.4 - 0.2,
                radius: Math.random() * 1.5 + 1,
            });
        }
    };
    
    const draw = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        points.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(150, 150, 150, 0.5)`;
            ctx.fill();
        });

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dist = Math.sqrt(Math.pow(points[i].x - points[j].x, 2) + Math.pow(points[i].y - points[j].y, 2));
                if (dist < maxDist) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.strokeStyle = `rgba(150, 150, 150, ${1 - dist / maxDist})`;
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    window.addEventListener('resize', setup);

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', setup);
    };
}, []);

  return (
    <section id="accueil" className="relative bg-white text-gray-900 flex items-center min-h-screen overflow-hidden">
      
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="absolute inset-x-0 bottom-0 overflow-hidden z-0 pointer-events-none">
        <svg className="w-full h-auto" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
            <defs>
                <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0"></stop>
                    <stop offset="20%" stopColor="#cbd5e1"></stop>
                    <stop offset="80%" stopColor="#cbd5e1"></stop>
                    <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0"></stop>
                </linearGradient>
                <filter id="hero-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"></feGaussianBlur>
                </filter>
            </defs>
            <path d="M-200,200 C400,0 1040,0 1640,200" stroke="url(#hero-line-gradient)" strokeWidth="5" fill="none" filter="url(#hero-glow-filter)" strokeOpacity="0.5"></path>
            <path d="M-200,200 C400,0 1040,0 1640,200" stroke="url(#hero-line-gradient)" strokeWidth="2" fill="none"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          
          {/* Left side: Text content */}
          <div className="text-center lg:text-left relative z-10">
            <Animate variant="pop">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                <span className="text-black">Bras droit</span><br />
                <span className="gradient-text whitespace-nowrap">stratégique et financier</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-800 max-w-xl mx-auto lg:mx-0">
                Sollicitez une <span className="gradient-text font-semibold">ressource experte, ingénieuse et polyvalente</span> dédiée au succès de votre organisation.
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-10 flex justify-center lg:justify-start">
                <a
                  href="https://calendly.com/contact-birdandco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-[#27013D] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-colors transform hover:scale-105 text-base sm:text-lg"
                >
                  Prenons rendez-vous
                </a>
              </div>
            </Animate>
          </div>

          {/* Vertical gradient line */}
          <div className="hidden lg:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none lg:-ml-4 xl:-ml-8">
              <div className="relative w-1 h-80">
                  <div 
                      className="absolute inset-0 rounded-full"
                      style={{ 
                          backgroundImage: 'linear-gradient(to bottom, #27013D, #A41752)',
                      }}
                  ></div>
              </div>
          </div>

          {/* Right side: Image */}
          <Animate variant="pop" delay={300} className="relative z-10">
            <div>
              <img 
                src="https://images2.imgbox.com/2b/ac/rVShk4iB_o.jpg" 
                alt="Équipe de professionnels collaborant dans un bureau moderne" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </Animate>

        </div>
      </div>
    </section>
  );
};

export default Hero;