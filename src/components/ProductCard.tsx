
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  className?: string;
  whatsappLink?: string;
}

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  className,
  whatsappLink
}: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      price,
      image
    });
    toast.success(`${title} added to cart!`);
  };

  const handleBuyNow = () => {
    // Add item to cart
    addItem({
      id,
      title,
      price,
      image
    });
    
    // Create WhatsApp message with just this product
    const message = `Hello, I would like to order:\n1x ${title} - ${price}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Extract the base WhatsApp URL
    const baseUrl = whatsappLink && whatsappLink.includes('wa.me') 
      ? whatsappLink.split('?')[0] 
      : 'https://wa.me/8173110051';
    
    // Create the final URL with our item
    const checkoutUrl = `${baseUrl}?text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(checkoutUrl, '_blank');
  };

  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group transition-all duration-500 hover:shadow-xl",
        className
      )}
    >
      <AspectRatio ratio={16/9}>
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </AspectRatio>
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-primary mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-medium text-primary">{price}</span>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleAddToCart}
              className="flex items-center gap-1"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleBuyNow}
              className="flex items-center gap-1"
            >
              Shop Now
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
