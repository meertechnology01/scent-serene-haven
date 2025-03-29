import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { useMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4',
        {
          'py-2 bg-white/90 backdrop-blur-md shadow-sm': isScrolled,
          'py-4 bg-transparent': !isScrolled && location.pathname === '/',
          'py-2 bg-white shadow-sm': !isScrolled && location.pathname !== '/',
        }
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center font-serif text-2xl font-semibold tracking-tight">
          <img src="/sclogo.png" alt="Scent Serene Logo" className="h-12 w-auto mr-2" />
          <span className={cn({
            'text-white': !isScrolled && location.pathname === '/',
            'text-primary': isScrolled || location.pathname !== '/',
          })}>Scent Serene</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a key={link.name} href={link.href} className="font-medium text-primary hover:text-accent transition-colors">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="font-medium text-primary hover:text-accent transition-colors">
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Cart Button */}
        <Button
          variant="ghost"
          size="icon"
          className="relative hidden md:flex text-primary hover:bg-primary/10"
          onClick={() => window.dispatchEvent(new CustomEvent('toggle-cart'))}
        >
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 pt-16 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a key={link.name} href={link.href} className="text-xl text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="text-xl text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            )
          ))}
          <Button
            variant="outline"
            className="w-full max-w-xs"
            onClick={() => {
              setIsMenuOpen(false);
              window.dispatchEvent(new CustomEvent('toggle-cart'));
            }}
          >
            Cart ({totalItems})
          </Button>
          <Button className="w-full max-w-xs" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
