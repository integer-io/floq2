import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import floqLogo from '@/assets/floq-logo.png';
import QuoteModal from './QuoteModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
          <div className="flex justify-between items-center py-[1rem]">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={floqLogo}
                alt="FloQ Pumps Logo"
                className="h-[3rem] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-[2rem]">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 relative group [&.active]:text-orange-500 [&.active]:font-bold"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[0.125rem] bg-orange-500 transition-all duration-300 group-hover:w-full [&.active]:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 relative group [&.active]:text-orange-500 [&.active]:font-bold"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full [&.active]:w-full"></span>
              </Link>
              <div className="relative group">
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 relative [&.active]:text-orange-500 [&.active]:font-bold"
                >
                  Products
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full [&.active]:w-full"></span>
                </Link>
                
                {/* Products Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link
                      to="/product/dewatering-pump"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                    >
                      <div className="font-medium">Auto Priming Dewatering Pump</div>
                      <div className="text-sm text-gray-500">Industrial Pumps</div>
                    </Link>
                    <Link
                      to="/product/centrifugal-pump"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                    >
                      <div className="font-medium">Industrial Centrifugal Pump</div>
                      <div className="text-sm text-gray-500">Process Pumps</div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/applications"
                className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 relative group [&.active]:text-orange-500 [&.active]:font-bold"
              >
                Applications
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full [&.active]:w-full"></span>
              </Link>
              <Link
                to="/careers"
                className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 relative group [&.active]:text-orange-500 [&.active]:font-bold"
              >
                Careers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full [&.active]:w-full"></span>
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 relative group [&.active]:text-orange-500 [&.active]:font-bold"
              >
                Blogs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full [&.active]:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 relative group [&.active]:text-orange-500 [&.active]:font-bold"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full [&.active]:w-full"></span>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/applications"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Applications
                </Link>
                <Link
                  to="/careers"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="#"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg w-full text-center"
                >
                  Get Quote
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default Header;
