
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const GiftGuide = () => {
  const navigate = useNavigate();
  
  const giftCategories = [
    {
      title: "For the Mindful Soul",
      description: "Perfect for those who practice meditation, yoga, or who simply appreciate moments of tranquility.",
      recommendations: [
        { 
          name: "Meditation Incense Bundle", 
          description: "A set of calming incense varieties ideal for meditation practice.",
          price: "₦6,500" 
        },
        { 
          name: "Chakra Aromatherapy Set", 
          description: "Seven essential oil blends aligned with the seven chakras.",
          price: "₦9,800" 
        },
        { 
          name: "Zen Home Diffuser", 
          description: "Elegant ceramic diffuser with bamboo accents.",
          price: "₦12,500" 
        }
      ]
    },
    {
      title: "For the Home Enthusiast",
      description: "Ideal for those who take pride in creating a welcoming, fragrant living space.",
      recommendations: [
        { 
          name: "Luxury Room Mist Collection", 
          description: "Set of three signature room mists for different spaces.",
          price: "₦7,200" 
        },
        { 
          name: "Premium Mopping Fragrance", 
          description: "Long-lasting floor cleaner with our signature scent.",
          price: "₦4,800" 
        },
        { 
          name: "Seasonal Scent Bundle", 
          description: "Four different fragrances to rotate throughout the year.",
          price: "₦10,500" 
        }
      ]
    },
    {
      title: "For Special Occasions",
      description: "Celebrate life's moments with these thoughtful fragrance gifts.",
      recommendations: [
        { 
          name: "Wedding Blessings Collection", 
          description: "Special blend of oils traditionally used to bless new unions.",
          price: "₦15,000" 
        },
        { 
          name: "New Home Purification Set", 
          description: "Everything needed to fragrance and purify a new living space.",
          price: "₦8,900" 
        },
        { 
          name: "Anniversary Incense Gift Box", 
          description: "Luxury box with premium incense and a beautiful holder.",
          price: "₦11,200" 
        }
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
            { label: "Gift Guide" }
          ]} 
        />
        
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-center mb-6">
          Fragrance Gift Guide
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Find the perfect scented gift for every person and occasion with our curated recommendations.
        </p>
        
        {giftCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="font-serif text-3xl text-brown-DEFAULT mb-4">{category.title}</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.recommendations.map((gift, giftIndex) => (
                <Card key={giftIndex} className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-brown-DEFAULT">{gift.name}</CardTitle>
                    <CardDescription>{gift.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-serif text-lg text-primary">{gift.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate('/products')}
                    >
                      Shop Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
        
        <div className="glass-card p-8 mb-12">
          <h2 className="font-serif text-2xl text-brown-DEFAULT mb-4">Gift Wrapping Service</h2>
          <p className="text-muted-foreground mb-6">
            Make your gift even more special with our premium gift wrapping service. Each gift is wrapped in elegant, 
            eco-friendly materials and includes a personalized note card.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gold-light/20 rounded-lg p-4">
              <h3 className="font-serif text-lg text-brown-DEFAULT mb-2">Standard Gift Wrap</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Simple but elegant kraft paper with natural twine and a handwritten tag.
              </p>
              <p className="text-lg font-medium">₦1,000</p>
            </div>
            <div className="bg-gold-light/20 rounded-lg p-4">
              <h3 className="font-serif text-lg text-brown-DEFAULT mb-2">Premium Gift Wrap</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Luxury paper with satin ribbon, dried flowers, and a wax-sealed note card.
              </p>
              <p className="text-lg font-medium">₦2,500</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="font-serif text-xl text-brown-DEFAULT mb-4">Need more personalized recommendations?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our fragrance experts for assistance in choosing the perfect gift.
          </p>
          <Button className="flex items-center gap-2">
            Contact Us
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default GiftGuide;
