
import React from 'react';
import IncenseAnimation from './IncenseAnimation';
import { sparkles, wind } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductFeatureProps {
  className?: string;
}

const ProductFeature = ({ className }: ProductFeatureProps) => {
  return (
    <div className={cn("bg-sepia-light py-16 overflow-hidden", className)}>
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-medium tracking-wider text-gold-dark uppercase">Featured Experience</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-DEFAULT mt-2 mb-6">
            The Art of Incense
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the calming ritual of our handcrafted incense, carefully blended using ancient techniques and premium ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal transform translate-y-8 h-[400px] flex items-center justify-center">
            <div className="relative glass-card p-6 w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
              <IncenseAnimation />
            </div>
          </div>
          
          <div className="reveal transform translate-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-serif text-2xl text-brown-DEFAULT mb-6">Benefits of Our Premium Incense</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                    <sparkles className="text-brown-DEFAULT" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brown-DEFAULT mb-2">Natural Aromatherapy</h4>
                    <p className="text-muted-foreground">Our incense creates a serene atmosphere that helps reduce stress and anxiety, promoting mental clarity and focus.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                    <wind className="text-brown-DEFAULT" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brown-DEFAULT mb-2">Long-lasting Fragrance</h4>
                    <p className="text-muted-foreground">Each stick burns slowly for up to 60 minutes, releasing consistent aromatic notes that linger in your space long after use.</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary mt-8">
                Explore Incense Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
