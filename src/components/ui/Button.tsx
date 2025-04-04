import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg focus:outline-none focus:ring-2 transition-colors';
  
  const variantClasses = {
    primary: 'bg-vermelho-portugues text-white hover:bg-opacity-90 focus:ring-vermelho-portugues/50',
    secondary: 'bg-azul-maritimo text-white hover:bg-opacity-90 focus:ring-azul-maritimo/50',
    outline: 'border-2 border-vermelho-portugues text-vermelho-portugues hover:bg-vermelho-portugues/10 focus:ring-vermelho-portugues/50',
  };
  
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 