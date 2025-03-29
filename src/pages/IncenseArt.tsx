
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowRight, Sparkles, Wind, Book } from 'lucide-react';
import IncenseAnimation from '../components/IncenseAnimation';
import { useNavigate } from 'react-router-dom';

const IncenseArt = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-brown-DEFAULT text-center mb-8">
            The Art of Incense
          </h1>
          
          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                For thousands of years, incense has been used in spiritual practices, healing rituals, and daily life across diverse cultures. At Scent Serene, we honor these ancient traditions while bringing modern craftsmanship to our handmade incense collections.
              </p>
              
              <h2 className="font-serif text-2xl text-brown-DEFAULT mt-8 mb-4">
                Our Incense Making Process
              </h2>
              <p className="text-muted-foreground mb-6">
                Each stick of incense begins with carefully selected raw materials—aromatic woods, herbs, resins, and essential oils. These ingredients are meticulously ground, mixed, and shaped by hand using techniques passed down through generations.
              </p>
              
              <div className="my-12">
                <div className="glass-card p-6 w-full h-[300px] flex items-center justify-center overflow-hidden rounded-xl">
                  <IncenseAnimation />
                </div>
              </div>
              
              <h2 className="font-serif text-2xl text-brown-DEFAULT mt-8 mb-4">
                Benefits of Natural Incense
              </h2>
              
              <div className="space-y-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-brown-DEFAULT" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brown-DEFAULT mb-2">Stress Reduction & Relaxation</h4>
                    <p className="text-muted-foreground">The ritual of lighting incense and the aromatic compounds released can help calm the nervous system, reduce cortisol levels, and create a peaceful environment for meditation, yoga, or simply unwinding after a busy day.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                    <Wind className="text-brown-DEFAULT" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brown-DEFAULT mb-2">Space Purification</h4>
                    <p className="text-muted-foreground">Many natural incense ingredients have antibacterial and antiviral properties. The smoke can help purify the air, reduce airborne pathogens, and eliminate unpleasant odors, creating a cleaner, more pleasant living environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                    <Book className="text-brown-DEFAULT" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brown-DEFAULT mb-2">Spiritual Connection</h4>
                    <p className="text-muted-foreground">In many traditions, incense serves as a bridge between the physical and spiritual realms. The rising smoke symbolizes prayers and intentions ascending to the heavens, helping deepen spiritual practices and create sacred space.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/products?category=Incense')}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Shop Incense Collection <ArrowRight className="ml-2" size={16} />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => navigate('/resources')}
              >
                Discover More Incense Guides
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default IncenseArt;
