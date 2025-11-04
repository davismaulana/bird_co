
import React, { useEffect, useState, useRef } from 'react';
import Animate from './Animate';

// A reusable component for counting up numbers with animation when it becomes visible.
const CountUp: React.FC<{
  end: number;
  suffix?: string;
  duration?: number;
}> = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const easeOutCubic = (t: number) => (--t) * t * t + 1;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure it ends on the exact number
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// A reusable component for a calendar-style scroll-up animation for numbers.
const ScrollUpAnimator: React.FC<{ end: number }> = ({ end }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const digits = String(end).split('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={ref} className="flex justify-center" aria-label={String(end)}>
            {digits.map((digit, i) => (
                <div
                    key={i}
                    className="h-[1.1em] overflow-hidden"
                    style={{ lineHeight: '1.1em' }}
                >
                    <div
                        className="transition-transform duration-[1500ms]"
                        style={{
                            transform: isVisible ? `translateY(-${parseInt(digit) * 1.1}em)` : 'translateY(0)',
                            transitionDelay: `${i * 100}ms`,
                            transitionTimingFunction: 'cubic-bezier(0.2, 1, 0.4, 1)',
                        }}
                    >
                        {Array.from({ length: 10 }).map((_, num) => (
                            <div key={num} aria-hidden="true">{num}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};


const stats = [
  {
    icon: <img src="https://images2.imgbox.com/87/dd/sN3rtZQi_o.png" alt="Naissance du réseau Bird& icon" className="w-20 h-20 object-contain" />,
    value: "2024",
    label: "Naissance du réseau Bird&",
  },
  {
    icon: <img src="https://images2.imgbox.com/0e/6d/ydTjAfbc_o.png" alt="Dirigeants et actionnaires accompagnés icon" className="w-24 h-24 object-contain" />,
    value: "20+",
    label: <>Dirigeants et actionnaires<br />accompagnés</>,
  },
  {
    icon: <img src="https://images2.imgbox.com/80/73/qtj75VEW_o.png" alt="Experts partenaires icon" className="w-24 h-24 object-contain" />,
    value: "10+",
    valueSubtitle: "années d'expérience",
    label: "Un réseau d'experts : anciens consultants de cabinets de renom, dirigeants et entrepreneurs",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center py-12 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Un impact qui <span className="gradient-text">fait la différence</span>
            </h2>
          </Animate>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-6xl mx-auto stagger">
          {stats.map((stat, index) => {
            const match = stat.value.match(/^(\d+)(\+?)$/);
            const isCountUp = match && match[2] === '+';
            const isScrollUp = !isCountUp && /^\d+$/.test(stat.value);

            const pClassName = 'text-5xl md:text-6xl font-extrabold text-[#27013D] tracking-tighter';
            
            return (
              <Animate key={index} variant="pop">
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center h-24 md:h-28">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col items-center justify-center min-h-[5rem]">
                    <p className={pClassName}>
                      {isCountUp ? (
                        <CountUp 
                          end={parseInt(match![1], 10)} 
                          suffix={match![2]}
                        />
                      ) : isScrollUp ? (
                        <ScrollUpAnimator end={parseInt(stat.value, 10)} />
                      ) : (
                        stat.value
                      )}
                    </p>
                    { 'valueSubtitle' in stat && (
                        <p className="text-[#27013D] mt-1 text-xl font-semibold">
                            {(stat as any).valueSubtitle}
                        </p>
                    )}
                  </div>
                  <p className="text-gray-800 mt-4 text-base font-medium max-w-xs">{stat.label}</p>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;