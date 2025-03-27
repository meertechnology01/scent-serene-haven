
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRevealAnimation } from './IntersectionObserver';

interface ImageGalleryProps {
  className?: string;
}

const ImageGallery = ({ className }: ImageGalleryProps) => {
  useRevealAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1616461046003-2d398fc01ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Aromatic oils",
      title: "Premium Turaren Wuta"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Body spray collection",
      title: "Luxury Body Sprays"
    },
    {
      src: "https://images.unsplash.com/photo-1617219803255-68d45dd0b2dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Incense sticks",
      title: "Handcrafted Incense"
    },
    {
      src: "https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Room fresheners",
      title: "Mopping Mists"
    },
    {
      src: "https://images.unsplash.com/photo-1601295863388-29c130e8d5e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Gift collections",
      title: "Gift Collections"
    }
  ];
  
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'left' ? -container.clientWidth : container.clientWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
  
  useEffect(() => {
    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      
      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={cn("py-16 bg-white", className)}>
      <div className="container-custom">
        <div className="text-center mb-8 reveal">
          <span className="text-sm font-medium tracking-wider text-gold-dark uppercase">Explore Our World</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-DEFAULT mt-2 mb-6">
            Fragrance Gallery
          </h2>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 snap-center reveal transform translate-y-4"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="glass-card overflow-hidden group h-[300px] relative rounded-xl">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 to-transparent flex items-end">
                    <div className="p-4 w-full text-white">
                      <h3 className="font-serif text-lg font-medium">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brown-DEFAULT p-2 rounded-full shadow-lg z-10"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brown-DEFAULT p-2 rounded-full shadow-lg z-10"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
