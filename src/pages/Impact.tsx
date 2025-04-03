
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Star, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCounter from '../components/AnimatedCounter';

const Impact = () => {
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

  // Impact stories data
  const impactStories = [
    {
      id: 1,
      title: 'Reviving Traditional Farming in Kerala',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1000&q=80',
      description: 'How our partnership helped local farmers preserve traditional pepper farming techniques while improving their livelihoods.',
      location: 'Kerala',
      people: 45,
      years: 3,
    },
    {
      id: 2,
      title: 'Women-Led Turmeric Cooperative',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1000&q=80',
      description: 'Empowering women in the Western Ghats to lead sustainable turmeric cultivation and processing operations.',
      location: 'Western Ghats',
      people: 32,
      years: 2,
    },
    {
      id: 3,
      title: 'Sustainable Honey Harvesting Practices',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
      description: 'Teaching tribal communities sustainable methods of honey collection that protect bee populations and forest ecosystems.',
      location: 'Eastern Himalayas',
      people: 28,
      years: 4,
    },
    {
      id: 4,
      title: 'Youth Engagement in Coffee Farming',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=80',
      description: 'Creating opportunities for younger generations to continue and innovate within their family\'s agricultural heritage.',
      location: 'Coorg',
      people: 18,
      years: 2,
    },
    {
      id: 5,
      title: 'Preserving Indigenous Knowledge',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1000&q=80',
      description: 'Documenting and preserving traditional agricultural knowledge and practices of tribal communities.',
      location: 'Northeast India',
      people: 53,
      years: 5,
    },
    {
      id: 6,
      title: 'Farmer Producer Organization Development',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80',
      description: 'Building organizational capacity among farmer groups to improve market access and bargaining power.',
      location: 'Pan-India',
      people: 120,
      years: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl text-purple-100 mb-8">
              Empowering communities, preserving traditions, and creating sustainable livelihoods 
              through our ethical sourcing practices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Dashboard */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 -mt-24 relative z-10 reveal">
            <div className="text-center mb-10">
              <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
                Impact at a Glance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Difference</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Through our partnerships with local communities, we've created sustainable 
                impact across multiple dimensions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCounter
                endValue={15}
                title="Farmer Producer Organizations"
                suffix="+"
              />
              <AnimatedCounter
                endValue={8}
                title="States Across India"
              />
              <AnimatedCounter
                endValue={100}
                title="Tribal Partners"
                suffix="+"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <AnimatedCounter
                endValue={5000}
                title="Farming Families Supported"
                suffix="+"
              />
              <AnimatedCounter
                endValue={60}
                title="Increase in Farmer Income"
                suffix="%"
              />
              <AnimatedCounter
                endValue={12000}
                title="Hectares Under Sustainable Farming"
                suffix="+"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable Impact Model</h2>
              <p className="text-gray-600 mb-6">
                Our impact model focuses on creating lasting positive change through a holistic 
                approach that addresses economic, social, and environmental sustainability.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Fair Compensation</h3>
                    <p className="text-gray-600">
                      We ensure farmers receive fair prices for their products, significantly 
                      higher than conventional market rates, creating economic stability.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Knowledge Preservation</h3>
                    <p className="text-gray-600">
                      We document and preserve traditional agricultural knowledge, ensuring these 
                      valuable practices continue for future generations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Market Access</h3>
                    <p className="text-gray-600">
                      We connect tribal and small-scale farmers to global markets, eliminating 
                      intermediaries and increasing their earning potential.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
                    <p className="text-gray-600">
                      We promote and support environmentally sustainable farming methods that 
                      protect biodiversity and preserve natural resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1500&q=80" 
                  alt="Sustainable farming" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Empowering Communities</h3>
                  <p className="text-white/90">
                    Our partnerships create lasting positive change for tribal communities and 
                    small-scale farmers across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
              Stories of Change
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact Stories</h2>
            <p className="text-gray-600">
              Discover the real stories behind our impact and how our partnerships are 
              transforming lives and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div 
                key={story.id}
                className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md hover:-translate-y-1 reveal`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 p-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> {story.location}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4 min-h-[80px]">{story.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{story.people} People Impacted</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{story.years} {story.years === 1 ? 'Year' : 'Years'}</span>
                    </div>
                  </div>
                  
                  <button className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
                    Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
                Meet Our Farmers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Faces Behind Our Products</h2>
              <p className="text-gray-600 mb-6">
                Our farmers and tribal partners are the heart of our operation. Their dedication 
                to quality and sustainable practices makes our premium products possible.
              </p>
              <p className="text-gray-600 mb-8">
                Watch our documentary to learn about their stories, traditional farming methods, 
                and how our partnerships have impacted their lives and communities.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Watch Documentary
              </button>
            </div>
            
            <div className="reveal">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/40 transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1500&q=80" 
                  alt="Farmers in field" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
              Voices of Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-gray-600">
              Hear directly from our partner communities about how our collaboration 
              has transformed their lives and livelihoods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 reveal">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Working with BZHO NEXUSHUB has transformed our village. Not only have our incomes increased, but we've also been able to preserve our traditional farming methods while improving quality."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg">R</div>
                <div className="ml-4">
                  <div className="font-bold">Rajesh Kumar</div>
                  <div className="text-sm text-gray-500">Turmeric Farmer, Western Ghats</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 reveal">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "As a women's cooperative, we've found strength and economic independence through our partnership. The training and market access provided has been invaluable for our community."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg">L</div>
                <div className="ml-4">
                  <div className="font-bold">Lakshmi Devi</div>
                  <div className="text-sm text-gray-500">Women's Cooperative Leader, Kerala</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 reveal">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The sustainable harvesting techniques we've learned have helped us protect our forest while continuing our honey gathering traditions. Our children now see a future in continuing our work."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg">A</div>
                <div className="ml-4">
                  <div className="font-bold">Arjun Munda</div>
                  <div className="text-sm text-gray-500">Honey Harvester, Eastern Himalayas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white reveal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Join us in our mission to support tribal communities, preserve traditional 
              agricultural knowledge, and deliver premium quality products to global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors duration-300"
              >
                Become a Partner
              </Link>
              <Link 
                to="/products" 
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
