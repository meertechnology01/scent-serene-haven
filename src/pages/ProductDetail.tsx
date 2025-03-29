
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import { Button } from '../components/ui/button';
import { ArrowLeft, ShoppingCart, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../App';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    if (id) {
      const productData = getProductById(parseInt(id));
      if (productData) {
        setProduct(productData);
      } else {
        // Product not found
        navigate('/products');
      }
    }
  }, [id, navigate]);
  
  const handleAddToCart = () => {
    if (product) {
      // Add multiple items at once based on quantity
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image
        });
      }
      toast.success(`${quantity} ${product.title} added to cart!`);
    }
  };
  
  const handleBuyNow = () => {
    // Add item to cart
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image
        });
      }
      
      // Create WhatsApp message
      const message = `Hello, I would like to order:\n${quantity}x ${product.title} - ${product.price}`;
      const encodedMessage = encodeURIComponent(message);
      
      // Extract the base WhatsApp URL
      const baseUrl = WHATSAPP_LINK && WHATSAPP_LINK.includes('wa.me') 
        ? WHATSAPP_LINK.split('?')[0] 
        : 'https://wa.me/8173110051';
      
      // Create the final URL with our item
      const checkoutUrl = `${baseUrl}?text=${encodedMessage}`;
      
      // Open in a new tab
      window.open(checkoutUrl, '_blank');
    }
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-2xl font-medium mb-4">Loading product...</h2>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <Breadcrumb 
          items={[
            { label: "Products", link: "/products" },
            { label: product.title }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="aspect-square rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-primary mb-2">{product.title}</h1>
            <div className="text-xl font-medium text-primary mb-4">{product.price}</div>
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <select 
                value={quantity}
                onChange={handleQuantityChange}
                className="w-24 p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleAddToCart}
                className="flex items-center gap-2"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
              
              <Button 
                onClick={handleBuyNow}
                variant="secondary"
                className="flex items-center gap-2"
              >
                Buy Now
                <ArrowRight size={18} />
              </Button>
            </div>
            
            <div className="glass-card p-4 mb-6">
              <h3 className="font-medium mb-2">Category</h3>
              <p className="text-muted-foreground">{product.category}</p>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/products')}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProductDetail;
