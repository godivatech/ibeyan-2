import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Impact", href: "/impact" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">
              BZHO
            </span>
            <span className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
              NEXUSHUB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium text-sm transition-all duration-300 relative 
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-purple-600 
                  after:transition-all after:duration-300 after:origin-left
                  ${
                    location.pathname === link.href
                      ? `${
                          scrolled ? "text-purple-600" : "text-white"
                        } after:w-full`
                      : `${scrolled ? "text-gray-700" : "text-white"} hover:${
                          scrolled ? "text-purple-600" : "text-white/80"
                        } after:w-0 hover:after:w-full`
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md text-sm font-medium 
                         transition-all duration-300 
                         hover:shadow-md hover:shadow-purple-500/30 
                         active:scale-95
                         ${
                           scrolled
                             ? "bg-purple-600 text-white hover:bg-purple-700"
                             : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20"
                         }`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none group"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-700" : "text-white"
                } group-hover:text-purple-600 transition-colors`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-700" : "text-white"
                } group-hover:text-purple-600 transition-colors`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-md animate-fade-in">
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-center font-medium 
                           hover:bg-purple-700 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
