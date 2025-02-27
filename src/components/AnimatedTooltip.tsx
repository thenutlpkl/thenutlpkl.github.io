import React, { useState, useRef } from 'react';

interface AnimatedTooltipProps {
  text: string;
  description: string;
  children: React.ReactNode;
}

const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ description, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout[]>([]);

  const clearTimeouts = () => {
    timeoutRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutRef.current = [];
  };

  const startTypewriter = () => {
    clearTimeouts();
    setIsHovered(true);
    setDisplayText('');
    
    description.split('').forEach((char, index) => {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + char);
      }, 30 * index);
      timeoutRef.current.push(timeout);
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    clearTimeouts();
    setDisplayText('');
  };

  return (
    <div className="relative inline-flex">
      <div
        onMouseEnter={startTypewriter}
        onMouseLeave={handleMouseLeave}
        className="relative transition-all duration-200 hover:scale-105 animated-tooltip-trigger"
      >
        {children}
        
        {isHovered && (
          <div 
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 animated-tooltip"
          >
            <div className="relative bg-background/40 backdrop-blur-lg border border-primary/10 
                          text-white p-3 rounded-lg shadow-lg min-w-[200px] max-w-[300px]
                          transition-all duration-300">
              <p className="text-sm whitespace-normal leading-relaxed">
                {displayText}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedTooltip;