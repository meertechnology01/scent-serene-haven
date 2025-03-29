
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DIYAromatherapy = () => {
  const navigate = useNavigate();
  
  const recipes = [
    {
      title: "Calming Room Spray",
      ingredients: [
        "10 drops lavender essential oil",
        "5 drops chamomile essential oil",
        "3 drops vanilla extract",
        "1 cup distilled water",
        "1 tablespoon witch hazel or vodka"
      ],
      instructions: "Combine all ingredients in a spray bottle. Shake well before each use. Spray in your bedroom before sleep or throughout your home to create a calming atmosphere."
    },
    {
      title: "Energizing Diffuser Blend",
      ingredients: [
        "4 drops sweet orange essential oil",
        "3 drops peppermint essential oil",
        "2 drops rosemary essential oil"
      ],
      instructions: "Add all oils to your diffuser according to manufacturer's instructions. Ideal for morning use or during afternoon energy slumps."
    },
    {
      title: "Focus & Clarity Aromatherapy Oils",
      ingredients: [
        "10ml jojoba oil (carrier oil)",
        "3 drops rosemary essential oil",
        "2 drops lemon essential oil",
        "2 drops basil essential oil",
        "Small roller bottle"
      ],
      instructions: "Combine all ingredients in the roller bottle. Apply to temples, wrists, or behind ears when you need to concentrate."
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="container mx-auto py-12 px-4">
        <Breadcrumb 
          items={[
            { label: "Resources", link: "/resources" },
            { label: "DIY Aromatherapy" }
          ]} 
        />
        
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-center mb-6">
          DIY Aromatherapy Recipes
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Create your own aromatherapy blends with these simple recipes that harness the power of essential oils for wellbeing.
        </p>
        
        <div className="glass-card p-8 mb-12">
          <h2 className="font-serif text-2xl text-brown-DEFAULT mb-6">Essential Tools & Ingredients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl text-brown-DEFAULT mb-4">Basic Equipment</h3>
              <ul className="space-y-2">
                {[
                  "Small glass bottles (amber or cobalt blue recommended)",
                  "Measuring spoons and droppers",
                  "Small funnel",
                  "Labels",
                  "Spray bottles for room sprays",
                  "Diffuser for diffuser blends"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check size={18} className="text-brown-DEFAULT mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-xl text-brown-DEFAULT mb-4">Essential Ingredients</h3>
              <ul className="space-y-2">
                {[
                  "Carrier oils (jojoba, sweet almond, or fractionated coconut oil)",
                  "Distilled water for sprays",
                  "Witch hazel or high-proof vodka (for room sprays)",
                  "Basic essential oils (lavender, tea tree, lemon, peppermint)",
                  "Specialized essential oils based on your needs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check size={18} className="text-brown-DEFAULT mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="font-serif text-3xl text-brown-DEFAULT text-center mb-8">Simple DIY Recipes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe, index) => (
            <div key={index} className="glass-card p-6">
              <h3 className="font-serif text-xl text-brown-DEFAULT mb-4">{recipe.title}</h3>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Ingredients:</h4>
                <ul className="space-y-1 text-sm">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brown-DEFAULT mt-1.5 flex-shrink-0"></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Instructions:</h4>
                <p className="text-sm text-muted-foreground">{recipe.instructions}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8 mb-12">
          <h2 className="font-serif text-2xl text-brown-DEFAULT mb-4">Safety Tips</h2>
          <ul className="space-y-2">
            {[
              "Always dilute essential oils properly with a carrier oil before applying to skin.",
              "Some essential oils are not safe for use during pregnancy or for young children.",
              "Keep essential oils away from eyes and mucous membranes.",
              "Perform a patch test before using new essential oils to check for allergic reactions.",
              "Store your oils in a cool, dark place away from direct sunlight."
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check size={18} className="text-brown-DEFAULT mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <h3 className="font-serif text-xl text-brown-DEFAULT mb-4">Ready to start your aromatherapy journey?</h3>
          <p className="text-muted-foreground mb-6">
            Shop our collection of essential oils and aromatherapy supplies.
          </p>
          <Button 
            onClick={() => navigate('/products?category=Aromatherapy')}
            className="flex items-center gap-2"
          >
            Shop Aromatherapy Collection
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default DIYAromatherapy;
