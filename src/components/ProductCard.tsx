
import React from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  className?: string;
}

const ProductCard = ({
  image,
  title,
  description,
  price,
  className
}: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group transition-all duration-500 hover:shadow-xl",
        className
      )}
    >
      <div className="h-56 md:h-64 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-brown-DEFAULT mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-medium text-brown-DEFAULT">{price}</span>
          <Button variant="outline" size="sm" icon={<ArrowRight size={16} />}>
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
