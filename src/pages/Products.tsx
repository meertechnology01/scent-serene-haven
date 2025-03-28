
import React, { useState, useEffect } from 'react';
import { products, getAllCategories } from '../data/products';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '../components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { WHATSAPP_LINK } from '../App';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();
  
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle filtering
  useEffect(() => {
    let result = products;
    
    if (searchQuery) {
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filter changes
  }, [searchQuery, selectedCategory]);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Products" }]} />
      
      <h1 className="font-serif text-4xl md:text-5xl font-medium text-center mb-8">Our Products</h1>
      
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="relative min-w-[200px]">
          <SlidersHorizontal className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <select
            className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <Filter size={18} className="text-muted-foreground" />
          </div>
        </div>
      </div>
      
      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground mb-4">Try changing your search or filter criteria</p>
          <Button variant="outline" onClick={() => {
            setSearchQuery('');
            setSelectedCategory(null);
          }}>
            Reset Filters
          </Button>
        </div>
      )}
      
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            whatsappLink={WHATSAPP_LINK}
          />
        ))}
      </div>
      
      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {pageNumbers.map(number => (
              <PaginationItem key={number}>
                <PaginationLink 
                  isActive={currentPage === number}
                  onClick={() => setCurrentPage(number)}
                  className="cursor-pointer"
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default Products;
