
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center">
      {/* Video/Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80")',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span 
            className={`inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            Premium Agricultural Products
          </span>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            From Tribal Forests to Global Kitchens
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            Making healthy, nutritious food accessible to all. We empower farmers and tribal communities while delivering premium quality products to global markets.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/products"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Products <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
