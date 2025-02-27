import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isOverTooltip, setIsOverTooltip] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over buttons, links or their children
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      }
      
      // Check if hovering over tooltip elements
      if (
        target.classList.contains('animated-tooltip-trigger') || 
        target.closest('.animated-tooltip-trigger') ||
        target.classList.contains('animated-tooltip') || 
        target.closest('.animated-tooltip')
      ) {
        setIsOverTooltip(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // For buttons and links
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(false);
      }
      
      // For tooltip elements
      if (
        target.classList.contains('animated-tooltip-trigger') || 
        target.closest('.animated-tooltip-trigger') ||
        target.classList.contains('animated-tooltip') || 
        target.closest('.animated-tooltip')
      ) {
        setIsOverTooltip(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Create combined class names for cursor styling
  const cursorClasses = [
    'custom-cursor',
    isHovering ? 'hover' : '',
    isClicking ? 'clicking' : '',
    isOverTooltip ? 'over-tooltip' : ''
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;