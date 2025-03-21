
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import ProductGallery from '../components/ProductGallery';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Value Proposition */}
      <ValueProposition />

      {/* Product Gallery */}
      <ProductGallery />

      {/* Mission Statement */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <span className="text-sm font-medium uppercase tracking-wider text-purple-200 mb-3 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthy, Culturally-Rich Food Accessible to All</h2>
            <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              We are committed to bringing the best of local agriculture to global markets 
              while empowering farmers and tribal communities. Our focus on nutrition-driven 
              processing ensures that you get products that are both healthy and authentic.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition-all duration-300"
            >
              Learn About Our Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">Making A Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-gray-600 mb-8">
                Through our partnerships with local farmers and tribal communities, we're creating 
                sustainable livelihoods while preserving traditional agricultural practices and 
                knowledge. Every purchase makes a difference in the lives of our partner communities.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                  <p className="text-gray-600 text-sm">FPOs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">8</div>
                  <p className="text-gray-600 text-sm">States</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">100+</div>
                  <p className="text-gray-600 text-sm">Tribal Partners</p>
                </div>
              </div>
              
              <Link 
                to="/impact" 
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                Explore Our Impact <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 reveal">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1500&q=80" 
                  alt="Tribal farmers" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Partnering with Communities</h3>
                  <p className="text-white/90">
                    We work with tribal communities to source the highest quality ingredients 
                    while ensuring fair compensation and sustainable practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12 text-center max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Quality?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking for bulk orders or want to learn more about our products, 
              we're here to help you bring the finest agricultural products to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products" 
                className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors duration-300"
              >
                Explore Products
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
