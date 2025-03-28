
import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import Button from './Button';

interface CartProps {
  whatsappLink: string;
}

const Cart = ({ whatsappLink }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, clearCart } = useCart();

  const handleProceedToCheckout = () => {
    // Construct message with cart items
    let message = "Hello, I would like to order:\n";
    items.forEach(item => {
      message += `${item.quantity}x ${item.title} - ${item.price}\n`;
    });
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Extract the base WhatsApp URL from the provided link
    const baseUrl = whatsappLink.includes('wa.me') 
      ? whatsappLink.split('?')[0] 
      : 'https://wa.me/8173110051';
    
    // Create the final URL with our cart items
    const checkoutUrl = `${baseUrl}?text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(checkoutUrl, '_blank');
  };

  if (items.length === 0 && !isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all z-50"
      >
        <ShoppingBag size={20} />
      </button>
    );
  }

  return (
    <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <h2 className="font-medium text-lg">Your Cart</h2>
            {totalItems > 0 && (
              <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-muted"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <ShoppingBag size={64} className="text-muted-foreground mb-4 opacity-30" />
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">Add some products to your cart to proceed to checkout.</p>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {items.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="p-4 border-t border-border">
            <Button 
              variant="primary" 
              className="w-full"
              onClick={handleProceedToCheckout}
            >
              Proceed to WhatsApp Checkout
            </Button>
            <button 
              onClick={clearCart}
              className="w-full text-center text-sm text-muted-foreground hover:text-destructive py-2"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
