
import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  title: string;
}

const AnimatedCounter = ({ 
  endValue, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  title 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let start = 0;
    let animationFrameId: number;
    
    if (isVisible) {
      // Get a timestamp of when the animation starts
      const startTime = Date.now();
      
      const updateCount = () => {
        // Get current timestamp
        const now = Date.now();
        // Calculate progress (0 to 1)
        const progress = Math.min((now - startTime) / duration, 1);
        // Calculate the current count
        const currentCount = Math.floor(progress * endValue);
        
        setCount(currentCount);
        
        // If we're not at the end value, continue the animation
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        }
      };
      
      updateCount();
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [endValue, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
        {prefix}{count}{suffix}
      </div>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default AnimatedCounter;
