
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-light";
  
  const variants = {
    primary: "bg-brown-DEFAULT text-white hover:bg-brown-dark transform hover:-translate-y-1 hover:shadow-lg",
    secondary: "bg-gold-DEFAULT text-brown-dark hover:bg-gold-dark transform hover:-translate-y-1 hover:shadow-lg",
    outline: "border border-brown-light text-brown-DEFAULT bg-transparent hover:bg-brown-DEFAULT hover:text-white",
    link: "bg-transparent text-brown-DEFAULT hover:text-gold-dark underline-hover py-0 px-0"
  };
  
  const sizes = {
    sm: "text-sm px-3 py-2 rounded-md",
    md: "text-base px-6 py-3 rounded-md",
    lg: "text-lg px-8 py-4 rounded-md"
  };
  
  const iconSpacing = iconPosition === 'left' ? 'mr-2' : 'ml-2';
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        variant !== 'link' && sizes[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className={iconSpacing}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={iconSpacing}>{icon}</span>}
    </button>
  );
};

export default Button;
