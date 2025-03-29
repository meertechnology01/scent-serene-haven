
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";
import { Product } from '@/data/products';
import { Link } from 'react-router-dom';

interface ProductCardProps extends Omit<Product, 'category'> {
  className?: string;
  whatsappLink?: string;
  showDetailButton?: boolean;
}

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  className,
  whatsappLink,
  showDetailButton = true
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
      <Link to={`/product/${id}`} className="block">
        <AspectRatio ratio={16/9}>
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </AspectRatio>
      </Link>
      <div className="p-6">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-serif text-xl font-medium text-primary mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        </Link>
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
            {showDetailButton && (
              <Button 
                variant="default" 
                size="sm" 
                asChild
              >
                <Link to={`/product/${id}`} className="flex items-center gap-1">
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
