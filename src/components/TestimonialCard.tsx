
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  location,
  rating,
  className
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 md:p-8 hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={cn(
              "mr-1",
              i < rating ? "text-gold-DEFAULT fill-gold-DEFAULT" : "text-muted"
            )}
          />
        ))}
      </div>
      <p className="text-brown-DEFAULT italic mb-6 text-lg">"{quote}"</p>
      <div className="flex flex-col">
        <span className="font-serif text-brown-DEFAULT font-medium">{author}</span>
        <span className="text-sm text-muted-foreground">{location}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
