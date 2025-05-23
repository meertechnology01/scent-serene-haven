
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'right',
  as = 'button',
  href,
  target,
  rel,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 transform hover:-translate-y-1 hover:shadow-lg",
    secondary: "bg-accent text-primary hover:bg-accent/90 transform hover:-translate-y-1 hover:shadow-lg",
    outline: "border border-primary/30 text-primary bg-transparent hover:bg-primary hover:text-white",
    link: "bg-transparent text-primary hover:text-accent underline-hover py-0 px-0"
  };
  
  const sizes = {
    sm: "text-sm px-3 py-2 rounded-md",
    md: "text-base px-6 py-3 rounded-md",
    lg: "text-lg px-8 py-4 rounded-md"
  };
  
  const iconSpacing = iconPosition === 'left' ? 'mr-2' : 'ml-2';
  
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    variant !== 'link' && sizes[size],
    className
  );

  if (as === 'a') {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
      >
        {icon && iconPosition === 'left' && <span className={iconSpacing}>{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className={iconSpacing}>{icon}</span>}
      </a>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className={iconSpacing}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={iconSpacing}>{icon}</span>}
    </button>
  );
};

export default Button;
