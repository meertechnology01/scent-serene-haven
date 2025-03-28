
import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { AspectRatio } from './ui/aspect-ratio';
import { toast } from "sonner";

interface CartItemProps {
  id: number;
  title: string;
  price: string;
  quantity: number;
  image: string;
}

const CartItem = ({ id, title, price, quantity, image }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  const handleRemoveItem = () => {
    removeItem(id);
    toast.info(`${title} removed from cart`);
  };

  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      handleRemoveItem();
    } else {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  // Calculate numeric price for subtotal
  const numericPrice = parseFloat(price.replace(/[^\d.]/g, ''));
  const subtotal = !isNaN(numericPrice) ? (numericPrice * quantity).toFixed(2) : price;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-border hover:bg-muted/20 transition-colors rounded-md p-2">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border border-border">
        <AspectRatio ratio={1/1} className="h-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </AspectRatio>
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{price} × {quantity}</p>
        <p className="text-sm font-medium mt-1">Subtotal: ₦{subtotal}</p>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <button 
          onClick={handleRemoveItem}
          className="text-muted-foreground hover:text-destructive transition-colors"
          aria-label="Remove item"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mt-2">
          <button 
            onClick={handleDecreaseQuantity}
            className="w-7 h-7 rounded-full flex items-center justify-center bg-background border border-border hover:bg-muted transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          
          <span className="w-8 text-center">{quantity}</span>
          
          <button 
            onClick={handleIncreaseQuantity}
            className="w-7 h-7 rounded-full flex items-center justify-center bg-background border border-border hover:bg-muted transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
