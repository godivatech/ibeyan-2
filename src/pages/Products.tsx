<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
=======

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb

// Product data
const products = [
  {
<<<<<<< HEAD
    id: "turmeric",
    name: "Turmeric Powder",
    image: "/assets/images/turmeric-1.jfif",
    shortDescription:
      "High curcumin content, organically grown turmeric from tribal forests.",
    origin: "Western Ghats",
    category: "spices",
    featured: true,
  },
  {
    id: "pepper",
    name: "Black Pepper",
    image: "/assets/images/black-pepper1.png",
    shortDescription:
      "Premium quality black pepper with rich aroma and distinctive flavor.",
    origin: "Kerala",
    category: "spices",
    featured: true,
  },
  {
    id: "honey",
    name: "Wild Honey",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "Pure, unprocessed wild honey harvested using sustainable methods.",
    origin: "Eastern Himalayas",
    category: "sweeteners",
    featured: true,
  },
  {
    id: "coffee",
    name: "Coffee Beans",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "Shade-grown coffee beans with rich flavor and ethical sourcing.",
    origin: "Coorg",
    category: "beverages",
    featured: false,
  },
  {
    id: "annatto",
    name: "Annatto Seeds",
    image:
      "https://images.unsplash.com/photo-1558024362-8c02af9d3348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "Natural food coloring and flavoring from sustainably harvested annatto seeds.",
    origin: "Northeast India",
    category: "natural colorants",
    featured: false,
  },
=======
    id: 'turmeric',
    name: 'Turmeric Powder',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990c307cc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'High curcumin content, organically grown turmeric from tribal forests.',
    origin: 'Western Ghats',
    category: 'spices',
    featured: true
  },
  {
    id: 'pepper',
    name: 'Black Pepper',
    image: 'https://images.unsplash.com/photo-1599678542742-0ad7ff68f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Premium quality black pepper with rich aroma and distinctive flavor.',
    origin: 'Kerala',
    category: 'spices',
    featured: true
  },
  {
    id: 'honey',
    name: 'Wild Honey',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Pure, unprocessed wild honey harvested using sustainable methods.',
    origin: 'Eastern Himalayas',
    category: 'sweeteners',
    featured: true
  },
  {
    id: 'coffee',
    name: 'Coffee Beans',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Shade-grown coffee beans with rich flavor and ethical sourcing.',
    origin: 'Coorg',
    category: 'beverages',
    featured: false
  },
  {
    id: 'annatto',
    name: 'Annatto Seeds',
    image: 'https://images.unsplash.com/photo-1558024362-8c02af9d3348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Natural food coloring and flavoring from sustainably harvested annatto seeds.',
    origin: 'Northeast India',
    category: 'natural colorants',
    featured: false
  }
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
];

// Categories
const categories = [
<<<<<<< HEAD
  { id: "all", name: "All Products" },
  { id: "spices", name: "Spices" },
  { id: "sweeteners", name: "Sweeteners" },
  { id: "beverages", name: "Beverages" },
  { id: "natural colorants", name: "Natural Colorants" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
=======
  { id: 'all', name: 'All Products' },
  { id: 'spices', name: 'Spices' },
  { id: 'sweeteners', name: 'Sweeteners' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'natural colorants', name: 'Natural Colorants' },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery]);

  const filterProducts = () => {
    let filtered = products;
<<<<<<< HEAD

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          product.origin.toLowerCase().includes(query)
      );
    }

=======
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.shortDescription.toLowerCase().includes(query) ||
        product.origin.toLowerCase().includes(query)
      );
    }
    
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
    setFilteredProducts(filtered);
  };

  // Function to handle scroll animations
  useEffect(() => {
    const handleScrollAnimation = () => {
<<<<<<< HEAD
      const reveals = document.querySelectorAll(".reveal");

=======
      const reveals = document.querySelectorAll('.reveal');
      
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
<<<<<<< HEAD

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScrollAnimation);
    // Trigger once on mount
    handleScrollAnimation();

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScrollAnimation);
=======
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    // Trigger once on mount
    handleScrollAnimation();
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScrollAnimation);
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
<<<<<<< HEAD

=======
      
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
<<<<<<< HEAD
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Explore our premium range of agricultural products sourced
              directly from tribal communities across India.
            </p>

=======
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Explore our premium range of agricultural products sourced directly from 
              tribal communities across India.
            </p>
            
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              {searchQuery && (
                <button
<<<<<<< HEAD
                  onClick={() => setSearchQuery("")}
=======
                  onClick={() => setSearchQuery('')}
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
      
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-md border border-gray-200 text-gray-600 font-medium"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                {showFilters ? <X className="w-5 h-5" /> : null}
              </button>
            </div>
<<<<<<< HEAD

            {/* Sidebar Filters */}
            <div
              className={`${
                showFilters ? "block" : "hidden"
=======
            
            {/* Sidebar Filters */}
            <div 
              className={`${
                showFilters ? 'block' : 'hidden'
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
              } lg:block lg:w-1/4 xl:w-1/5`}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category.id
<<<<<<< HEAD
                            ? "bg-purple-100 text-purple-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
=======
                            ? 'bg-purple-100 text-purple-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD

=======
                
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="fssai"
                        className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor="fssai" className="ml-3 text-gray-600">
                        FSSAI Certified
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="organic"
                        className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor="organic" className="ml-3 text-gray-600">
                        Organic
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="export"
                        className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor="export" className="ml-3 text-gray-600">
                        Export Quality
                      </label>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD

                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Origin</h3>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
=======
                
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Origin</h3>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                    <option value="">All Regions</option>
                    <option value="Western Ghats">Western Ghats</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Eastern Himalayas">Eastern Himalayas</option>
                    <option value="Coorg">Coorg</option>
                    <option value="Northeast India">Northeast India</option>
                  </select>
                </div>
              </div>
            </div>
<<<<<<< HEAD

=======
            
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
            {/* Products Grid */}
            <div className="lg:w-3/4 xl:w-4/5">
              {/* Results Summary */}
              <div className="mb-8 flex flex-wrap justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
<<<<<<< HEAD
                    {selectedCategory === "all"
                      ? "All Products"
                      : categories.find((c) => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {filteredProducts.length}{" "}
                    {filteredProducts.length === 1 ? "product" : "products"}{" "}
                    found
=======
                    {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>
              </div>
<<<<<<< HEAD

=======
              
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
<<<<<<< HEAD
                    <div
                      key={product.id}
                      className={`reveal transition-all duration-500 transform ${
                        index % 3 === 0
                          ? "translate-y-4"
                          : index % 3 === 1
                          ? "translate-y-0"
                          : "translate-y-8"
=======
                    <div 
                      key={product.id}
                      className={`reveal transition-all duration-500 transform ${
                        index % 3 === 0 ? 'translate-y-4' : index % 3 === 1 ? 'translate-y-0' : 'translate-y-8'
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                      }`}
                    >
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center">
<<<<<<< HEAD
                  <h3 className="text-xl font-semibold mb-2">
                    No products found
                  </h3>
=======
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                  <p className="text-gray-600 mb-4">
                    We couldn't find any products matching your criteria.
                  </p>
                  <button
                    onClick={() => {
<<<<<<< HEAD
                      setSearchQuery("");
                      setSelectedCategory("all");
=======
                      setSearchQuery('');
                      setSelectedCategory('all');
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                    }}
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
      
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
      {/* Export Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-purple-50 rounded-lg p-8 md:p-12 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
                  Export Support
                </span>
<<<<<<< HEAD
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Order in Bulk?
                </h2>
                <p className="text-gray-600 mb-6">
                  We provide comprehensive export support including
                  documentation, logistics, and customized packaging to meet
                  your specific requirements.
=======
                <h2 className="text-3xl font-bold mb-4">Ready to Order in Bulk?</h2>
                <p className="text-gray-600 mb-6">
                  We provide comprehensive export support including documentation, logistics, and 
                  customized packaging to meet your specific requirements.
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
<<<<<<< HEAD
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Customized packaging solutions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Quality testing and certification
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Export documentation assistance
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Logistics coordination
                    </span>
=======
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Customized packaging solutions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Quality testing and certification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Export documentation assistance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Logistics coordination</span>
>>>>>>> 7939be91f8e84922f253666b016c51d5757710cb
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors duration-300 inline-block"
                >
                  Request Bulk Quote
                </Link>
              </div>
              <div className="relative h-64 md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1000&q=80"
                  alt="Export Support"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-purple-600 font-medium text-sm">
                    FSSAI Certified Export Quality
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
