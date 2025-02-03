import React, { useRef, useEffect, useState } from 'react';

interface SketchCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

export const SketchCanvas: React.FC<SketchCanvasProps> = ({ 
  width = '100%', 
  height = 300, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const startDrawing = (e: MouseEvent) => {
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
        setIsDrawing(true);
      };

      const draw = (e: MouseEvent) => {
        if (!isDrawing) return;
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
      };

      const stopDrawing = () => {
        context.closePath();
        setIsDrawing(false);
      };

      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('mouseleave', stopDrawing);

      return () => {
        canvas.removeEventListener('mousedown', startDrawing);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopDrawing);
        canvas.removeEventListener('mouseleave', stopDrawing);
      };
    }
  }, [isDrawing]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div>
      <canvas 
        ref={canvasRef} 
        className={`w-full h-[${height}px] ${className}`}
      />
      <div className="mt-4 text-center">
        <button 
          onClick={clearCanvas} 
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Clear Sketch
        </button>
      </div>
    </div>
  );
};