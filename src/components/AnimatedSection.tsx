import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'right' | 'left';
}

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = 'up' 
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  // Add subtle initial transform based on direction
  const directionClass = 
    direction === 'up' ? 'translate-y-8' : 
    direction === 'right' ? '-translate-x-8' : 
    direction === 'left' ? 'translate-x-8' : 'translate-y-8';

  return (
    <div 
      ref={sectionRef} 
      className={`animate-on-scroll opacity-0 transform ${directionClass} transition-all duration-700 ease-out`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
