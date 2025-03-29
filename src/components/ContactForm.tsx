import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      // Replace with your EmailJS Service ID, Template ID, and Public Key
      const serviceId = 'service_dva8d4c';
      const templateId = 'template_contact';
      const publicKey = '4BHQ1Uhaec2gqsH4N';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        { user_name: name, user_email: email, user_message: message },
        publicKey
      );

      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send your message. Please try again later.');
    }
  };

  return (
    <div className={cn("glass-card p-8 md:p-12", className)}>
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-brown-DEFAULT mb-4">
          Get in Touch
        </h3>
        <p className="text-muted-foreground mb-8">
          Have questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brown-light"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brown-light"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brown-light"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <Button type="submit" variant="primary">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;