
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import Newsletter from '../components/Newsletter';
import ProductFeature from '../components/ProductFeature';
import ImageGallery from '../components/ImageGallery';
import { useCart } from '../context/CartContext';
import { ArrowRight, ArrowDown, Check } from 'lucide-react';
import { useRevealAnimation } from '../components/IntersectionObserver';
import { Link, useNavigate } from 'react-router-dom';
import { WHATSAPP_LINK } from '../App';

const IndexContent = () => {
  useRevealAnimation();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Turaren Wuta Oil",
      description: "Luxurious aromatic blend for a calming atmosphere.",
      price: "₦4,500"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Premium Incense Sticks",
      description: "Slow-burning, long-lasting fragrances for relaxation.",
      price: "₦3,200"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1617219803255-68d45dd0b2dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Enchanting Body Spray",
      description: "Captivating scents that leave a lasting impression.",
      price: "₦5,800"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Mopping Mist",
      description: "Transform your space with refreshing, long-lasting aromas.",
      price: "₦4,000"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "I've been using Scent Serene's Turaren Wuta oils for months now, and the fragrance is simply divine. My home always smells heavenly!",
      author: "Aisha Mohammed",
      location: "Lagos, Nigeria",
      rating: 5
    },
    {
      id: 2,
      quote: "The incense sticks have become an essential part of my evening ritual. They create such a serene atmosphere.",
      author: "Emmanuel Okafor",
      location: "Abuja, Nigeria",
      rating: 5
    },
    {
      id: 3,
      quote: "Their body sprays last all day! I've received countless compliments. Worth every naira!",
      author: "Chioma Eze",
      location: "Port Harcourt, Nigeria",
      rating: 4
    }
  ];

  const features = [
    {
      id: 1,
      title: "Natural Ingredients",
      description: "All our products are crafted with natural, high-quality ingredients."
    },
    {
      id: 2,
      title: "Handmade With Care",
      description: "Each product is handcrafted with traditional techniques passed down through generations."
    },
    {
      id: 3,
      title: "Long-lasting Scents",
      description: "Our fragrances are designed to last longer, providing exceptional value."
    },
    {
      id: 4,
      title: "Sustainable Packaging",
      description: "We're committed to environmentally friendly practices and sustainable packaging."
    }
  ];

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    });
  };

  const heroBackground = "/bg.png";
  const ctaBackground = "/bg.png";

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackground})`,
            filter: 'brightness(0.9)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/60"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 tracking-tight animate-fade-in">
              Experience the Essence of Serenity
            </h1>
            <p
              className="text-lg md:text-xl mb-8 text-white/90 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Luxury handcrafted scents from the heart of Nigeria. Elevate your
              space and soul with our exotic blends.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-brown-light hover:bg-brown-DEFAULT"
                onClick={() => navigate('/products')}
              >
                Shop Now
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brown-DEFAULT"
                onClick={() => navigate('/resources')}
              >
                Explore Our Collection
              </Button>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-float"
        >
          <ArrowDown className="text-white" size={24} />
        </a>
      </section>

      <section id="about" className="section-padding bg-sepia-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal transform translate-y-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Handcrafted scents"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold-DEFAULT rounded-full grid place-items-center hidden md:block floating">
                  <span className="font-serif text-brown-DEFAULT text-lg font-medium">Since 2010</span>
                </div>
              </div>
            </div>
            
            <div className="reveal transform translate-y-8">
              <div className="max-w-lg">
                <span className="text-sm font-medium tracking-wider text-gold-dark uppercase">About Us</span>
                <h2 className="font-serif text-3xl md:text-4xl text-brown-DEFAULT mt-2 mb-6">
                  A Journey of Aromatic Excellence
                </h2>
                <p className="text-muted-foreground mb-6">
                  Born in the cultural heart of Zaria, Nigeria, Scent Serene emerged from a passion for traditional fragrance craftsmanship. We specialize in Turaren Wuta oils, incense sticks, body sprays, and home fragrances that capture the essence of our rich heritage.
                </p>
                <p className="text-muted-foreground mb-8">
                  Every product we create is a testament to our commitment to authentic, natural ingredients and time-honored techniques. Our mission is to bring the luxury of traditional Nigerian scents to homes around the world.
                </p>
                <Button 
                  variant="default"
                  onClick={() => navigate('/resources')}
                >
                  Learn More About Our Story
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ImageGallery />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-sm font-medium tracking-wider text-gold-dark uppercase">Why Choose Us</span>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-DEFAULT mt-2 mb-6">
              Crafted with Passion & Expertise
            </h2>
            <p className="text-muted-foreground">
              We pour our heart and soul into every product, ensuring unmatched quality and an exceptional sensory experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300 reveal"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-light flex items-center justify-center shimmer">
                  <Check className="text-brown-DEFAULT" size={24} />
                </div>
                <h3 className="font-serif text-xl text-brown-DEFAULT mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ProductFeature />
      
      <section id="products" className="section-padding bg-sepia-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-sm font-medium tracking-wider text-gold-dark uppercase">Our Collection</span>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-DEFAULT mt-2 mb-6">
              Discover Our Signature Products
            </h2>
            <p className="text-muted-foreground">
              Explore our range of luxurious fragrances crafted to transform your space and elevate your senses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="reveal" style={{ animationDelay: `${0.1 * index}s` }}>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  whatsappLink={WHATSAPP_LINK}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 reveal">
            <Button 
              variant="secondary"
              onClick={() => navigate('/products')}
              className="inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ctaBackground})`,
            filter: 'brightness(0.8)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/30 backdrop-blur-sm"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 reveal">
              Discover Your Signature Scent Today
            </h2>
            <p
              className="text-lg mb-8 text-white/90 reveal"
              style={{ animationDelay: '0.1s' }}
            >
              Indulge in our exquisite collection of handcrafted fragrances and
              transform your space into a sanctuary of serenity.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-amber-500 text-primary hover:bg-amber-600 reveal"
              style={{ animationDelay: '0.2s' }}
              onClick={() => {
                window.open(WHATSAPP_LINK, '_blank');
              }}
            >
              Shop Now
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-sm font-medium tracking-wider text-gold-dark uppercase">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-DEFAULT mt-2 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              Discover the experiences of those who have embraced the essence of Scent Serene.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
                className={`reveal ${index % 2 === 0 ? 'animate-fade-in' : 'animate-slide-up'}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-sepia-light">
        <div className="container-custom">
          <Newsletter className="reveal" />
        </div>
      </section>
      
      <Footer />
    </>
  );
};

const Index = () => {
  return (
    <IndexContent />
  );
};

export default Index;
