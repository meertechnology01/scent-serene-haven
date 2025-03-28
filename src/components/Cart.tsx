
import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from "sonner";

interface CartProps {
  whatsappLink: string;
}

const Cart = ({ whatsappLink }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, clearCart } = useCart();
  
  // Calculate total cost
  const totalCost = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return sum + (isNaN(price) ? 0 : price * item.quantity);
  }, 0).toFixed(2);

  // Close cart when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, []);

  const handleProceedToCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Construct message with cart items
    let message = "Hello, I would like to order:\n";
    items.forEach(item => {
      message += `${item.quantity}x ${item.title} - ${item.price}\n`;
    });
    message += `\nTotal: ₦${totalCost}`;
    
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
    
    // Optionally clear cart after checkout
    // clearCart();
    // setIsOpen(false);
  };

  const handleClearCart = () => {
    clearCart();
    toast.info("Cart cleared");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div 
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-xl z-50`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <h2 className="font-medium text-lg">Your Cart</h2>
              {totalItems > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
              <div className="space-y-4">
                {items.map(item => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="p-4 border-t border-border">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">Total Items:</span>
                <span className="font-medium">{totalItems}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-medium">Total Amount:</span>
                <span className="font-serif text-xl font-medium">₦{totalCost}</span>
              </div>
              
              <Button 
                variant="default" 
                className="w-full mb-2"
                onClick={handleProceedToCheckout}
              >
                Proceed to WhatsApp Checkout
              </Button>
              
              <button 
                onClick={handleClearCart}
                className="w-full text-center text-sm text-muted-foreground hover:text-destructive py-2"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </motion.div>
      
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg p-0 z-40 ${totalItems > 0 ? 'animate-bounce' : ''}`}
        variant={totalItems > 0 ? "default" : "outline"}
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>
    </>
  );
};

export default Cart;
