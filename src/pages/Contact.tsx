
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-purple-100 mb-8">
              Have questions about our products or interested in partnering with us? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="reveal">
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="lg:pl-8 reveal">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">info@bzhonexushub.com</p>
                      <p className="text-gray-600">export@bzhonexushub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Agriculture Road,<br />
                        Bangalore, Karnataka 560001,<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 9:00 AM - 1:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">International Inquiries</h4>
                      <p className="text-gray-600">
                        For international business inquiries, please email<br />
                        <span className="text-purple-600 font-medium">international@bzhonexushub.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-80">
                <div className="w-full h-full rounded bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Inquiries</h2>
            <p className="text-gray-600">
              Find answers to commonly asked questions about our products, 
              ordering process, and international shipping.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200 reveal">
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">What is the minimum order quantity for export orders?</h3>
              <p className="text-gray-600">
                Minimum order quantities vary by product, but typically start at 100kg for spices 
                and 50kg for other products. For smaller trial quantities, please contact our export 
                team directly.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">Do you provide samples before bulk orders?</h3>
              <p className="text-gray-600">
                Yes, we offer samples for interested buyers. Sample quantities and costs vary by product. 
                Sample costs are typically credited against future orders.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">What certifications do your products have?</h3>
              <p className="text-gray-600">
                All our products are FSSAI certified. Many products also carry organic certification 
                and other quality assurances. Specific certifications are listed on each product page 
                and detailed certificates can be provided upon request.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">How do you handle international shipping?</h3>
              <p className="text-gray-600">
                We offer both FOB and CIF shipping options for international orders. Our export team 
                can assist with documentation, customs clearance, and logistics coordination to ensure 
                smooth delivery to your destination.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">Can you provide custom packaging solutions?</h3>
              <p className="text-gray-600">
                Yes, we offer customized packaging solutions for bulk orders. This includes private 
                labeling, custom packaging sizes, and retail-ready packaging options. Custom packaging 
                requests are evaluated based on order size and specific requirements.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                For international orders, we accept wire transfers and letters of credit. Payment terms 
                are typically 50% advance payment and 50% before shipment, but can be negotiated for 
                established clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white reveal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect With Us</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Follow us on social media to stay updated on our latest products, community 
              initiatives, and agricultural insights.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
