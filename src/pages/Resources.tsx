
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Flame, Droplets, Gift, LucideIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  link: string;
}

const ResourceCard = ({ title, description, icon, buttonText, link }: ResourceCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="glass-card hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="font-serif text-xl text-brown-DEFAULT">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate(link)}
        >
          {buttonText}
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

const Resources = () => {
  const resources = [
    {
      title: "The Art of Incense",
      description: "Discover the ancient traditions and benefits of natural incense.",
      icon: <Flame size={24} className="text-brown-DEFAULT" />,
      buttonText: "Read Guide",
      link: "/incense-art"
    },
    {
      title: "Scent Pairing Guide",
      description: "Learn how to combine scents for different spaces and moods.",
      icon: <Droplets size={24} className="text-brown-DEFAULT" />,
      buttonText: "View Guide",
      link: "/scent-pairing"
    },
    {
      title: "DIY Aromatherapy",
      description: "Simple recipes and techniques to create your own aromatic blends.",
      icon: <Book size={24} className="text-brown-DEFAULT" />,
      buttonText: "Explore Recipes",
      link: "/diy-aromatherapy"
    },
    {
      title: "Gift Guide",
      description: "Perfect fragrance gifts for every occasion and personality.",
      icon: <Gift size={24} className="text-brown-DEFAULT" />,
      buttonText: "See Recommendations",
      link: "/gift-guide"
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="container mx-auto py-12 px-4">
        <Breadcrumb items={[{ label: "Resources" }]} />
        
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-center mb-6">Resources & Guides</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore our collection of guides and resources to enhance your fragrance journey and learn more about the tradition and art of scents.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
              buttonText={resource.buttonText}
              link={resource.link}
            />
          ))}
        </div>
        
        <div className="glass-card p-8 mb-12">
          <h2 className="font-serif text-2xl text-brown-DEFAULT mb-4">Did You Know?</h2>
          <div className="prose max-w-none text-muted-foreground">
            <p>
              The word "perfume" comes from the Latin "per fumum," meaning "through smoke," referencing 
              the ancient practice of burning fragrant woods and resins as offerings to the gods.
            </p>
            <p className="mt-4">
              In many cultures around the world, specific scents are associated with different life events, 
              celebrations, and rituals, creating a powerful connection between fragrance and memory.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="font-serif text-xl text-brown-DEFAULT mb-4">Can't find what you're looking for?</h3>
          <p className="text-muted-foreground mb-6">
            Contact us directly and our fragrance experts will be happy to help with any questions.
          </p>
          <Button variant="default">Contact Us</Button>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Resources;
