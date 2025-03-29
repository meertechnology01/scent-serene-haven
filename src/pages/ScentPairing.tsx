
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ScentPairing = () => {
  const navigate = useNavigate();
  
  const pairingCategories = [
    {
      title: "Mood Enhancement",
      pairs: [
        { primary: "Lavender", secondary: "Cedarwood", benefit: "Relaxation & Stress Relief" },
        { primary: "Citrus", secondary: "Mint", benefit: "Energy & Focus" },
        { primary: "Frankincense", secondary: "Sandalwood", benefit: "Meditation & Spiritual Practice" }
      ]
    },
    {
      title: "Room Pairing",
      pairs: [
        { primary: "Sweet Orange", secondary: "Cinnamon", benefit: "Kitchen & Living Areas" },
        { primary: "Jasmine", secondary: "Ylang Ylang", benefit: "Bedroom & Relaxation Spaces" },
        { primary: "Eucalyptus", secondary: "Tea Tree", benefit: "Bathroom & Spa Areas" }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="container mx-auto py-12 px-4">
        <Breadcrumb 
          items={[
            { label: "Resources", link: "/resources" },
            { label: "Scent Pairing Guide" }
          ]} 
        />
        
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-center mb-6">
          The Art of Scent Pairing
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Discover how to combine complementary fragrances to create unique aromatic experiences that transform your space and enhance your wellbeing.
        </p>
        
        <div className="glass-card p-8 mb-12">
          <h2 className="font-serif text-2xl text-brown-DEFAULT mb-6">Understanding Scent Notes</h2>
          <p className="text-muted-foreground mb-6">
            Like musical compositions, fragrances have different "notes" that unfold over time. Learning to recognize and combine these notes allows you to create harmonious scent experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-serif text-lg text-brown-DEFAULT mb-2">Top Notes</h3>
              <p className="text-sm text-muted-foreground">
                The initial, lighter scents that are first perceived but quickly dissipate. Examples: citrus, herbs, light florals.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-serif text-lg text-brown-DEFAULT mb-2">Middle Notes</h3>
              <p className="text-sm text-muted-foreground">
                The heart of the fragrance that emerges as top notes fade. Examples: full florals, spices, green notes.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-serif text-lg text-brown-DEFAULT mb-2">Base Notes</h3>
              <p className="text-sm text-muted-foreground">
                The foundation that appears last and lasts longest. Examples: woods, resins, musk, vanilla.
              </p>
            </div>
          </div>
        </div>
        
        {pairingCategories.map((category, index) => (
          <div key={index} className="glass-card p-8 mb-8">
            <h2 className="font-serif text-2xl text-brown-DEFAULT mb-6">{category.title}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 text-left">Primary Scent</th>
                    <th className="py-3 px-4 text-left">Complementary Scent</th>
                    <th className="py-3 px-4 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {category.pairs.map((pair, pairIndex) => (
                    <tr key={pairIndex} className="border-b border-border">
                      <td className="py-3 px-4 font-medium">{pair.primary}</td>
                      <td className="py-3 px-4">{pair.secondary}</td>
                      <td className="py-3 px-4 text-muted-foreground">{pair.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        
        <div className="text-center mt-12">
          <h3 className="font-serif text-xl text-brown-DEFAULT mb-4">Ready to create your own scent combinations?</h3>
          <p className="text-muted-foreground mb-6">
            Explore our collection of premium fragrances to start your scent-pairing journey.
          </p>
          <Button 
            onClick={() => navigate('/products')}
            className="flex items-center gap-2"
          >
            Shop Our Collection
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ScentPairing;
