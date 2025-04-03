
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-purple-600">BZHO</span>
              <span className="text-xl font-semibold text-gray-800">NEXUSHUB</span>
            </div>
            <p className="text-gray-600 text-sm">
              Bridging local food cultures to global markets through premium agricultural products.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Products
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Impact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/turmeric" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Turmeric Powder
                </Link>
              </li>
              <li>
                <Link to="/products/pepper" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Pepper
                </Link>
              </li>
              <li>
                <Link to="/products/honey" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Honey
                </Link>
              </li>
              <li>
                <Link to="/products/coffee" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Coffee
                </Link>
              </li>
              <li>
                <Link to="/products/annatto" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Annatto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">4/2, Ramanathapuram - 623704, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">+91 97912 99248</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">bzhonexushub@gmail.com</span>
              </li>
              <li className="pt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300"
                >
                  Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} BZHO NEXUSHUB (OPC) PVT LTD. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-purple-600 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-purple-600 transition-colors duration-300">
              Terms of Service
            </Link>
            <a href="#" className="text-gray-500 text-sm hover:text-purple-600 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      
      {/* Fixed Export FAQ Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          className="bg-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center"
          aria-label="Export FAQ"
        >
          <span className="mr-2 font-medium">Export FAQ</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
