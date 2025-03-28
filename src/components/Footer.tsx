
import React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone, MailIcon } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={cn("bg-sepia-dark text-muted-foreground", className)}>
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-medium text-primary mb-4">
              Scent<span className="text-gold-DEFAULT">Serene</span>
            </h3>
            <p className="mb-6">
              Luxury handcrafted scents from the heart of Nigeria. Elevate your space and soul with our exotic blends.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/scentserene_ng/" className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://m.facebook.com/profile.php?id=100004563871288&ref=ig_profile_ac&funlid=k6MWTHuWpwqfMKe3&wtsid=rdr_0g0KyB2dlU0BfEfN2#" className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="mailto:nafeesahms74@gmail.com" className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
                <MailIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gold-DEFAULT transition-colors duration-300 underline-hover">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-DEFAULT transition-colors duration-300 underline-hover">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-DEFAULT transition-colors duration-300 underline-hover">Products</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-DEFAULT transition-colors duration-300 underline-hover">Testimonials</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-primary mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-gold-DEFAULT" />
                <span>Zaria, Kaduna State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-gold-DEFAULT" />
                <span>nafeesahms74@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-gold-DEFAULT" />
                <span>+2347039739790</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {currentYear} Scent Serene. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-DEFAULT transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-gold-DEFAULT transition-colors duration-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
