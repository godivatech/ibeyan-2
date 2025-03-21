
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Package, Award, MapPin, Leaf, Download, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Product data (normally would come from API or CMS)
const productData = {
  'turmeric': {
    name: 'Turmeric Powder',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990c307cc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Our premium organic turmeric powder is ethically sourced from tribal farmers in the Western Ghats. Known for its high curcumin content and vibrant color, this turmeric powder adds authentic flavor and health benefits to your dishes.',
    origin: 'Western Ghats, India',
    specs: [
      { name: 'Curcumin Content', value: '5-7%' },
      { name: 'Process', value: 'Cold-ground' },
      { name: 'Certifications', value: 'FSSAI, Organic' },
      { name: 'Available Quantities', value: '1kg, 5kg, 25kg' },
      { name: 'Shelf Life', value: '24 months' },
    ],
    process: [
      { 
        title: 'Harvesting', 
        description: 'Hand-harvested by tribal farmers using traditional techniques that preserve the quality of the rhizomes.',
        image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Processing', 
        description: 'Carefully washed, boiled, and sun-dried before being ground into fine powder using cold-grinding technology.',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Quality Testing', 
        description: 'Each batch undergoes rigorous testing for curcumin content, purity, and compliance with international standards.',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Packaging', 
        description: 'Packed in export-grade, airtight packaging that preserves freshness and extends shelf life.',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'pepper': {
    name: 'Black Pepper',
    image: 'https://images.unsplash.com/photo-1599678542742-0ad7ff68f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Our premium black pepper is sourced directly from small-scale farmers in Kerala. Known for its bold aroma and distinctive flavor, this pepper adds depth and character to any dish or product formulation.',
    origin: 'Kerala, India',
    specs: [
      { name: 'Piperine Content', value: '5-6%' },
      { name: 'Process', value: 'Sun-dried' },
      { name: 'Certifications', value: 'FSSAI, Export Quality' },
      { name: 'Available Quantities', value: '1kg, 5kg, 25kg' },
      { name: 'Shelf Life', value: '36 months' },
    ],
    process: [
      { 
        title: 'Harvesting', 
        description: 'Carefully harvested at peak ripeness to ensure maximum flavor and quality.',
        image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Processing', 
        description: 'Traditional sun-drying process to preserve natural oils and flavor compounds.',
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Quality Testing', 
        description: 'Rigorous testing for piperine content, moisture levels, and microbial analysis.',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Packaging', 
        description: 'Vacuum-sealed packaging to maintain freshness and aromatic properties.',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'honey': {
    name: 'Wild Honey',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Our wild honey is ethically harvested from the pristine forests of the Eastern Himalayas. Collected by tribal communities using sustainable methods, this honey offers a unique flavor profile with natural health benefits.',
    origin: 'Eastern Himalayas, India',
    specs: [
      { name: 'Purity', value: '100% Pure' },
      { name: 'Process', value: 'Cold-extracted' },
      { name: 'Certifications', value: 'FSSAI, Natural' },
      { name: 'Available Quantities', value: '250g, 500g, 1kg, 5kg' },
      { name: 'Shelf Life', value: '24 months' },
    ],
    process: [
      { 
        title: 'Harvesting', 
        description: 'Ethically harvested by tribal communities using traditional techniques that protect the bees and their habitat.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Processing', 
        description: 'Cold-extracted to preserve natural enzymes, antioxidants, and flavor compounds.',
        image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Quality Testing', 
        description: 'Each batch tested for purity, moisture content, and HMF levels to ensure premium quality.',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Packaging', 
        description: 'Packed in glass jars to maintain purity and prevent contamination.',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'coffee': {
    name: 'Coffee Beans',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Our premium shade-grown coffee beans are sourced from small farms in Coorg. These beans offer a rich, balanced flavor profile with notes of chocolate, caramel, and mild fruit undertones.',
    origin: 'Coorg, Karnataka, India',
    specs: [
      { name: 'Variety', value: 'Arabica' },
      { name: 'Process', value: 'Washed' },
      { name: 'Certifications', value: 'FSSAI, Shade-Grown' },
      { name: 'Available Quantities', value: '250g, 1kg, 5kg' },
      { name: 'Shelf Life', value: '12 months (whole bean)' },
    ],
    process: [
      { 
        title: 'Harvesting', 
        description: 'Hand-picked at peak ripeness to ensure optimal flavor development.',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Processing', 
        description: 'Carefully washed and sun-dried to develop complex flavor profiles.',
        image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Sorting', 
        description: 'Meticulously sorted to remove defects and ensure consistent quality.',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Packaging', 
        description: 'Vacuum-sealed with one-way valves to preserve freshness and aroma.',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'annatto': {
    name: 'Annatto Seeds',
    image: 'https://images.unsplash.com/photo-1558024362-8c02af9d3348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Our annatto seeds are sourced from tribal communities in Northeast India. These vibrant red seeds provide natural coloring and a subtle earthy flavor, perfect for food products and traditional recipes.',
    origin: 'Northeast India',
    specs: [
      { name: 'Bixin Content', value: '4-5%' },
      { name: 'Process', value: 'Sun-dried' },
      { name: 'Certifications', value: 'FSSAI, Natural Colorant' },
      { name: 'Available Quantities', value: '100g, 500g, 1kg, 5kg' },
      { name: 'Shelf Life', value: '24 months' },
    ],
    process: [
      { 
        title: 'Harvesting', 
        description: 'Carefully harvested by tribal communities using sustainable methods.',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Processing', 
        description: 'Naturally sun-dried to preserve color compounds and flavor.',
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Quality Testing', 
        description: 'Tested for bixin content and color strength to ensure consistent quality.',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
      },
      { 
        title: 'Packaging', 
        description: 'Packed in light-protective packaging to maintain color vibrancy.',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading product data
    if (productId && productData[productId as keyof typeof productData]) {
      setProduct(productData[productId as keyof typeof productData]);
      
      // Trigger fade-in animation
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
  }, [productId]);

  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
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
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/products"
            className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.process.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.process.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Product Intro */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            to="/products"
            className="inline-flex items-center text-gray-600 hover:text-purple-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
          
          <div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Product Image */}
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  Premium Quality
                </span>
                <span className="ml-3 px-3 py-1 bg-cream-100 text-earth-800 rounded-full text-sm font-medium flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" /> {product.origin}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {product.description}
              </p>
              
              {/* Product Specifications */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-600" /> 
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.specs.map((spec: any, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 rounded-full bg-purple-200 mt-1.5 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-gray-700">{spec.name}:</span>
                        <span className="ml-2 text-gray-600">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" /> Request Samples
                </Link>
                <button
                  className="bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" /> Download Spec Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Journey */}
      <section className="py-16 bg-gray-50 reveal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey from Farm to Package</h2>
            <p className="text-gray-600">
              Follow the journey of our {product.name.toLowerCase()} from sustainable harvesting 
              to premium packaging, ensuring quality at every step.
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="relative mb-16">
            {/* Process Steps Indicators */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-1 bg-gray-200 z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {product.process.map((step: any, index: number) => (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-600 text-white items-center justify-center font-bold z-20">
                    {index + 1}
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:mt-8 h-full">
                    <div className="md:hidden flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <h3 className="hidden md:block text-xl font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 md:text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Process Gallery */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
              {/* Image */}
              <img
                src={product.process[currentImageIndex].image}
                alt={product.process[currentImageIndex].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-xl font-bold mb-2">{product.process[currentImageIndex].title}</h3>
                  <p className="text-white/90">{product.process[currentImageIndex].description}</p>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors duration-300 flex items-center justify-center text-white"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors duration-300 flex items-center justify-center text-white"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              
              {/* Progress Dots */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {product.process.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-white reveal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
              Quality Assurance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-gray-600">
              We adhere to the highest quality standards and certifications to ensure our products 
              meet international requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">FSSAI Certified</h3>
              <p className="text-gray-600 text-sm">Meeting India's food safety standards</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Organic</h3>
              <p className="text-gray-600 text-sm">Grown without synthetic chemicals</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Export Quality</h3>
              <p className="text-gray-600 text-sm">Meeting international standards</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Lab Tested</h3>
              <p className="text-gray-600 text-sm">Verified purity and quality</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 bg-gray-50 reveal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Products</h2>
            <p className="text-gray-600">
              Explore more premium products from our collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(productData)
              .filter(([id]) => id !== productId)
              .slice(0, 3)
              .map(([id, data]: [string, any]) => (
                <Link
                  key={id}
                  to={`/products/${id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{data.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {data.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-medium group">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-white reveal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-purple-600 text-white rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Place an Order?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements, request samples, or place a bulk order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors duration-300"
              >
                Request Samples
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Bulk Order Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
