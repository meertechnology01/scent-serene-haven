
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <h1 className="font-serif text-2xl font-medium tracking-tight text-primary">
            Scent<span className="text-gold-dark">Serene</span>
          </h1>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-primary hover:text-gold-dark transition-colors duration-300 underline-hover"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            className="inline-flex items-center justify-center p-3 rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            <ShoppingCart size={20} />
          </a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 rounded-md text-primary hover:text-gold-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-serif text-primary hover:text-gold-dark transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#" 
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-md text-white bg-primary hover:bg-primary/90 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart size={20} />
              <span>Shop Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
