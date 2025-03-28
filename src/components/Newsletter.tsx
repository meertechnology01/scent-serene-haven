import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

interface NewsletterProps {
  className?: string;
}

const Newsletter = ({ className }: NewsletterProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('meertechnology01@gmail.com');
      return;
    }

    try {
      // Replace with your EmailJS Service ID, Template ID, and Public Key
      const serviceId = 'service_dva8d4c';
      const templateId = 'template_zvqnfdr';
      const publicKey = '4BHQ1Uhaec2gqsH4N';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        { user_email: email, project_name: 'Scent Serene Haven' },
        publicKey
      );

      toast.success('Thank you for subscribing to Scent Serene Haven!');
      setEmail('');
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to subscribe. Please try again later.');
    }
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
