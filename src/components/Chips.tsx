import React from 'react';

// Define prop types for different chip variations
interface ChipsProps {
  label: string;
  variant?: 'default' | 'outlined' | 'filled' | 'notification' | 'gradient';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'pink-purple';
  size?: 'small' | 'medium' | 'large' | 'tiny';
  onClick?: () => void;
  className?: string;
}

const Chips: React.FC<ChipsProps> = ({
  label,
  variant = 'default',
  color = 'primary',
  size = 'medium',
  onClick,
  className = ''
}) => {
  // Define base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-300';
  
  // Variant styles
  const variantStyles = {
    default: 'bg-gray-200 text-gray-800',
    outlined: 'border border-gray-300 bg-transparent text-gray-800',
    filled: 'text-white',
    notification: 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
    gradient: 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gradient-to-r'
  };

  // Size styles
  const sizeStyles = {
    tiny: 'text-[10px] px-1 py-0.5 min-w-[16px] h-[16px]',
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-1.5',
    large: 'text-base px-4 py-2'
  };

  // Color styles
  const colorStyles = {
    primary: {
      default: 'bg-blue-500 text-white',
      outlined: 'border-blue-500 text-blue-500',
      filled: 'bg-blue-500 text-white',
      notification: 'bg-red-500 text-white',
      gradient: ''
    },
    secondary: {
      default: 'bg-purple-500 text-white',
      outlined: 'border-purple-500 text-purple-500',
      filled: 'bg-purple-500 text-white',
      notification: 'bg-red-500 text-white',
      gradient: ''
    },
    'pink-purple': {
      default: 'bg-pink-500 text-white',
      outlined: 'border-pink-500 text-pink-500',
      filled: 'bg-pink-500 text-white',
      notification: 'bg-red-500 text-white',
      gradient: 'from-pink-500 to-purple-500'
    },
    success: {
      default: 'bg-green-500 text-white',
      outlined: 'border-green-500 text-green-500',
      filled: 'bg-green-500 text-white',
      notification: 'bg-red-500 text-white',
      gradient: ''
    },
    warning: {
      default: 'bg-yellow-500 text-white',
      outlined: 'border-yellow-500 text-yellow-500',
      filled: 'bg-yellow-500 text-white',
      notification: 'bg-red-500 text-white',
      gradient: ''
    },
    error: {
      default: 'bg-red-500 text-white',
      outlined: 'border-red-500 text-red-500',
      filled: 'bg-red-500 text-white',
      notification: 'bg-red-500 text-white',
      gradient: ''
    }
  };

  // Hover and interactive styles
  const interactiveStyles = onClick 
    ? 'cursor-pointer hover:opacity-80 active:scale-95' 
    : '';

  // Combine styles
  const chipClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${colorStyles[color][variant]} 
    ${interactiveStyles} 
    ${className}
  `.trim();

  return (
    <span 
      className={chipClasses} 
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default Chips;