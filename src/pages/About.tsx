
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // For parallax effect on background
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
  };

  // Timeline data
  const timeline = [
    {
      year: '2018',
      title: 'UET Partnership',
      description: 'Formed partnership with United Ethnic Tribes (UET) to source directly from tribal communities.'
    },
    {
      year: '2019',
      title: 'FPO Network Established',
      description: 'Built a network of Farmer Producer Organizations across 8 Indian states.'
    },
    {
      year: '2020',
      title: 'FSSAI Certification',
      description: 'Received FSSAI certification for all our products, ensuring highest quality standards.'
    },
    {
      year: '2021',
      title: 'First International Export',
      description: 'Successfully exported our first shipment of turmeric powder to European markets.'
    },
    {
      year: '2022',
      title: 'Product Line Expansion',
      description: 'Expanded product catalog to include pepper, honey, coffee, and annatto seeds.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Extended market presence to over 10 countries across Europe, Middle East, and North America.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            ref={parallaxRef}
            className="w-full h-[120%] bg-cover bg-center" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&q=80")',
              ...parallaxStyle
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Founded on a mission to make healthy, culturally-rich food accessible to all, 
              BZHO NEXUSHUB bridges local food cultures to global markets.
            </p>
          </div>
        </div>
      </section>
      
      {/* Founder's Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-center">
                    <div className="ml-auto bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
                Founder's Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ibiyen's Vision</h2>
              <p className="text-gray-600 mb-6">
                With a strong background in nutrition and a passion for preserving India's rich agricultural 
                heritage, Ibiyen founded BZHO NEXUSHUB with a vision to create a bridge between local tribal 
                communities and global markets.
              </p>
              <p className="text-gray-600 mb-6">
                Having witnessed firsthand the challenges faced by small-scale farmers and tribal communities, 
                Ibiyen was determined to create a platform that would empower these communities while bringing 
                their premium quality products to a global audience.
              </p>
              <p className="text-gray-600 mb-6">
                "Our mission goes beyond just business. We're creating a sustainable ecosystem that preserves 
                traditional knowledge, empowers communities, and delivers exceptional products to the world."
              </p>
              <div className="text-gray-800 font-bold text-lg">
                — Ibiyen, Founder & CEO
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interactive Timeline</h2>
            <p className="text-gray-600">
              From humble beginnings to global reach, follow our journey of building
              bridges between tribal communities and international markets.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-100"></div>
            
            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-12 reveal ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-[50%]' : 'md:pl-12 md:text-left md:mr-auto md:ml-[50%]'
                }`}
              >
                {/* Year Bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 md:top-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shadow-md z-10">
                  {item.year}
                </div>
                
                {/* Content Box */}
                <div className={`relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:max-w-[90%] ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div 
            className="w-full h-[120%] bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=80")',
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission & Vision</h2>
            <p className="text-gray-600">
              Guided by strong values and a clear purpose, we're committed to making a positive 
              impact on communities and consumers around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all duration-300 reveal">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To make healthy, culturally-rich food accessible to all by creating a sustainable 
                bridge between tribal communities and global markets, ensuring fair compensation 
                for farmers while delivering premium quality products to consumers.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 font-medium">
                  "We believe in preserving traditional agricultural knowledge while embracing 
                  modern quality standards and sustainable practices."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all duration-300 reveal">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To become the global leader in ethically sourced agricultural products from tribal 
                and rural communities, setting the industry standard for quality, transparency, 
                and social impact.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 font-medium">
                  "We envision a world where consumers can enjoy premium-quality foods while supporting 
                  the livelihoods and traditions of indigenous farming communities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Whether you're a retailer looking for premium products, a distributor seeking ethically-sourced goods, 
              or an organization interested in our social impact initiatives, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products" 
                className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors duration-300"
              >
                Explore Our Products
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Get in Touch <ArrowRight className="ml-2 inline-block w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
