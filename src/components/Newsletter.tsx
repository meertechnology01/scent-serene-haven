
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { toast } from 'sonner';

interface NewsletterProps {
  className?: string;
}

const Newsletter = ({ className }: NewsletterProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // In a real app, you would send this to your backend
    toast.success('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className={cn("glass-card p-8 md:p-12", className)}>
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-brown-DEFAULT mb-4">
          Join Our Fragrance Journey
        </h3>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter for exclusive fragrance tips, special offers, and be the first to know about new arrivals.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brown-light"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" variant="primary">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
