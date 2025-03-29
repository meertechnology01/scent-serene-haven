
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, items } = useCart();
  const location = useLocation();
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Resources', path: '/resources' },
  ];

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
        <Link
          to="/"
          className="font-serif text-2xl font-semibold text-primary tracking-tight z-10"
        >
          <span className={cn({
            'text-white': !isScrolled && location.pathname === '/',
            'text-primary': isScrolled || location.pathname !== '/',
          })}>
            Scent Serene
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'font-medium transition-colors hover:text-accent',
                {
                  'text-white/90 hover:text-white': !isScrolled && location.pathname === '/',
                  'text-primary/80 hover:text-primary': isScrolled || location.pathname !== '/',
                  'text-primary font-semibold': location.pathname === item.path,
                }
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4 z-10">
          <button
            onClick={toggleMenu}
            className={cn(
              'p-2 rounded-md focus:outline-none transition-colors',
              {
                'text-white': !isScrolled && location.pathname === '/',
                'text-primary': isScrolled || location.pathname !== '/',
              }
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
        
        {/* Cart Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'relative hidden md:flex',
            {
              'text-white hover:bg-white/20': !isScrolled && location.pathname === '/',
              'text-primary hover:bg-primary/10': isScrolled || location.pathname !== '/',
            }
          )}
          onClick={() => {
            const event = new CustomEvent('toggle-cart');
            window.dispatchEvent(event);
          }}
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
        <div className="md:hidden fixed inset-0 bg-background z-40 pt-16">
          <nav className="container mx-auto py-8 flex flex-col items-center space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-xl font-medium transition-colors hover:text-accent',
                  {
                    'text-primary font-semibold': location.pathname === item.path,
                  }
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="w-full border-t border-muted my-4"></div>
            
            <div className="flex flex-col gap-4 w-full max-w-xs">
              {/* Additional mobile links */}
              <Link to="/incense-art" className="text-lg text-muted-foreground hover:text-primary">
                The Art of Incense
              </Link>
              <Link to="/scent-pairing" className="text-lg text-muted-foreground hover:text-primary">
                Scent Pairing Guide
              </Link>
              <Link to="/diy-aromatherapy" className="text-lg text-muted-foreground hover:text-primary">
                DIY Aromatherapy
              </Link>
              
              <div className="flex gap-4 mt-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => {
                    const event = new CustomEvent('toggle-cart');
                    window.dispatchEvent(event);
                    setIsMenuOpen(false);
                  }}
                >
                  Cart ({totalItems})
                </Button>
                <Button className="flex-1" asChild>
                  <Link to="/products">Shop Now</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
