
import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { AspectRatio } from './ui/aspect-ratio';

interface CartItemProps {
  id: number;
  title: string;
  price: string;
  quantity: number;
  image: string;
}

const CartItem = ({ id, title, price, quantity, image }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 py-3 border-b border-border">
      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
        <AspectRatio ratio={1/1} className="h-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </AspectRatio>
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{price}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => updateQuantity(id, quantity - 1)}
          className="w-6 h-6 rounded-full flex items-center justify-center bg-background border border-border hover:bg-muted transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={14} />
        </button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <button 
          onClick={() => updateQuantity(id, quantity + 1)}
          className="w-6 h-6 rounded-full flex items-center justify-center bg-background border border-border hover:bg-muted transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={14} />
        </button>
      </div>
      
      <button 
        onClick={() => removeItem(id)}
        className="ml-2 text-muted-foreground hover:text-destructive transition-colors"
        aria-label="Remove item"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default CartItem;
