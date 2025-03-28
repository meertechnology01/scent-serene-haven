import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductFeature from '../components/ProductFeature';
import TestimonialCard from '../components/TestimonialCard';
import ProductCard from '../components/ProductCard';
import ImageGallery from '../components/ImageGallery';
import IncenseAnimation from '../components/IncenseAnimation';
import Newsletter from '../components/Newsletter';
import { WHATSAPP_LINK } from '../App';
import { products } from '../data/products';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const FadeIn = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Anya Taylor-Joy",
      title: "Model",
      image: "/images/testimonials/anya.png",
      text: "ScentSerene has transformed my home into a sanctuary. The fragrances are captivating, and the quality is unmatched. I'm in love with their incense!",
    },
    {
      id: 2,
      name: "Cillian Murphy",
      title: "Actor",
      image: "/images/testimonials/cillian.png",
      text: "As someone who values tranquility, I'm impressed by ScentSerene's ability to create a serene atmosphere. Their products are now an essential part of my daily routine.",
    },
    {
      id: 3,
      name: "Florence Pugh",
      title: "Actress",
      image: "/images/testimonials/florence.png",
      text: "I'm obsessed with ScentSerene! Their scents are unique and long-lasting. The packaging is also beautiful, making it a perfect gift for friends and family.",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Handcrafted with Love",
      description: "Each incense stick is carefully handcrafted using traditional techniques and the finest ingredients.",
      image: "/images/features/feature1.svg",
    },
    {
      id: 2,
      title: "Natural Ingredients",
      description: "We use only natural and sustainable ingredients, ensuring a clean and eco-friendly burn.",
      image: "/images/features/feature2.svg",
    },
    {
      id: 3,
      title: "Long-Lasting Fragrance",
      description: "Our unique blends create a long-lasting and captivating fragrance that fills your space with serenity.",
      image: "/images/features/feature3.svg",
    },
  ];

  const galleryImages = [
    "/images/gallery/gallery1.jpg",
    "/images/gallery/gallery2.jpg",
    "/images/gallery/gallery3.jpg",
    "/images/gallery/gallery4.jpg",
    "/images/gallery/gallery5.jpg",
    "/images/gallery/gallery6.jpg",
  ];

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <FadeIn>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  Transform Your Space with <span className="text-primary">ScentSerene</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  Experience the art of handcrafted incense, designed to create a serene and inviting atmosphere in your home.
                </p>
                <Button size="lg" className="group">
                  Explore Our Scents
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </FadeIn>
            </div>
            <div className="relative">
              <IncenseAnimation />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  At ScentSerene, we believe in the power of scent to transform your environment and elevate your senses. Our journey began with a passion for traditional craftsmanship and a desire to create incense that is both luxurious and sustainable.
                </p>
                <p className="text-muted-foreground">
                  Each of our incense sticks is carefully handcrafted using the finest natural ingredients, ensuring a clean and long-lasting fragrance. We are committed to providing you with an exceptional sensory experience that promotes relaxation and well-being.
                </p>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.2}>
                <ImageGallery images={["/images/about/about1.jpg", "/images/about/about2.jpg"]} />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section id="products" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Our Popular Products</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our collection of handcrafted incense, chosen for their exceptional quality and enchanting fragrances.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map(product => (
              <FadeIn key={product.id} delay={0.1 * (product.id % 4)}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  whatsappLink={WHATSAPP_LINK}
                />
              </FadeIn>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <FadeIn>
              <Link to="/products">
                <Button variant="outline" size="lg" className="group">
                  View All Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Why Choose ScentSerene?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our handcrafted incense, made with natural ingredients and a passion for quality.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(feature => (
              <FadeIn key={feature.id} delay={0.2 * (feature.id % 3)}>
                <ProductFeature
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Our Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the beauty and craftsmanship of our incense through our curated gallery.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <FadeIn key={index} delay={0.1 * (index % 6)}>
                <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-auto rounded-md object-cover" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Read what our satisfied customers have to say about their experience with ScentSerene.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn>
            <TestimonialCard
              name={testimonials[currentTestimonial].name}
              title={testimonials[currentTestimonial].title}
              image={testimonials[currentTestimonial].image}
              text={testimonials[currentTestimonial].text}
            />
          </FadeIn>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Contact Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions or need assistance? Reach out to us and we'll be happy to help.
              </p>
            </FadeIn>
          </div>
          
          {/* Contact Form (Placeholder) */}
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <p className="text-muted-foreground text-center">
                Contact form coming soon! In the meantime, please email us at <a href="mailto:support@scentserene.com" className="text-primary hover:underline">support@scentserene.com</a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
