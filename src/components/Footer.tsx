import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import floqLogo from '@/assets/floq-logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-[4rem]">
      <div className="container mx-auto px-[1rem]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          {/* About Company */}
          <div className="space-y-[1.5rem]">
            <div className="flex items-center space-x-[0.75rem]">
              <img src={floqLogo} alt="FloQ Pumps Logo" className="h-[4rem]" />
            </div>
            
            <div>
              <h3 className="text-orange-500 text-[1.25rem] font-bold mb-[1rem]">ABOUT COMPANY</h3>
              <p className="text-gray-300 leading-relaxed mb-[1.5rem]">
                FLOQ is your trusted destination for complete fluid handling solutions with 
                9+ years of experience, delivering performance driven pumps backed by 
                SMIE INDUSTRIES PVT LTD's proven legacy and innovation.
              </p>
              
              
            </div>

            {/* Social Media */}
            <div className="flex space-x-[1rem]">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[3rem] h-[3rem] bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-[1.5rem] h-[1.5rem] text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[3rem] h-[3rem] bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Linkedin className="w-[1.5rem] h-[1.5rem] text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[3rem] h-[3rem] bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-[1.5rem] h-[1.5rem] text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 text-xl font-bold mb-6">QUICK LINKS</h3>
            <div className="space-y-3">
              <a href="/about" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">↗</span>
                <span>About Us</span>
              </a>
              <a href="/products" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">↗</span>
                <span>Products</span>
              </a>
              <a href="/applications" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">↗</span>
                <span>Applications</span>
              </a>
              <a href="/careers" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">↗</span>
                <span>Careers</span>
              </a>
              <a href="/contact" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">↗</span>
                <span>Contact us</span>
              </a>
            </div>
          </div>

          {/* Pump Services */}
          <div>
            <h3 className="text-orange-500 text-xl font-bold mb-6">PUMP SERVICES</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Pump Installation & Commissioning</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Preventive Maintenance Services</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Emergency Repair & Support</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Spare Parts Supply</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Technical Consultation</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 FloQ Pumps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;