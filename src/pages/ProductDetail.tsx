import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Settings, Zap, Droplets } from "lucide-react";
import heroImage from '../assets/hero-pumps.jpg';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  details: {
    operatingRange: {
      deliverySize: string;
      capacity: string;
      head: string;
      temperature: string;
    };
    designFeatures: string[];
    applications: string[];
  };
}

const products: Product[] = [
  {
    id: "dewatering-pump",
    name: "Auto Priming Dewatering Pump",
    category: "Industrial Pumps",
    subcategory: "Centrifugal Pumps",
    description: "Auto-priming dewatering pumps offering simple, reliable operation and easy maintenance. Suitable for well point dewatering, straight dewatering and sewer-by-pass applications.",
    image: heroImage,
    details: {
      operatingRange: {
        deliverySize: "DN 50 to 300 mm",
        capacity: "Up to 2600 m³/hr",
        head: "Up to 70 m",
        temperature: "Up to 100° C"
      },
      designFeatures: [
        "Light weight & Durable",
        "Trolley mounted mobile type",
        "Auto-priming design",
        "Corrosion resistant materials",
        "Easy maintenance access",
        "High efficiency impeller"
      ],
      applications: [
        "Construction site dewatering and drainage",
        "Agricultural irrigation and water management",
        "Industrial process water handling",
        "Marine water transfer and bilge pumping",
        "Mining site water control and drainage",
        "Water treatment and processing facilities"
      ]
    }
  },
  {
    id: "centrifugal-pump",
    name: "Industrial Centrifugal Pump",
    category: "Process Pumps",
    subcategory: "Chemical Process Pumps",
    description: "High-efficiency centrifugal pumps designed for industrial applications, offering superior performance and reliability.",
    image: heroImage,
    details: {
      operatingRange: {
        deliverySize: "DN 40 to 250 mm",
        capacity: "Up to 2000 m³/hr",
        head: "Up to 90 m",
        temperature: "Up to 120° C"
      },
      designFeatures: [
        "Energy-efficient design",
        "Low maintenance requirements",
        "Robust construction",
        "Precision engineered impeller",
        "Advanced sealing system",
        "Vibration-free operation"
      ],
      applications: [
        "Chemical processing",
        "Manufacturing facilities",
        "Power plants",
        "Water treatment plants",
        "HVAC systems",
        "Food and beverage industry"
      ]
    }
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/products')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-[6rem] px-[1rem] bg-gradient-to-br from-orange-600/80 via-orange-500/70 to-orange-400/60">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="relative z-10 max-w-[90rem] mx-auto">
          <Button 
            variant="outline" 
            className="mb-6 bg-white/90 hover:bg-white border-white text-gray-800"
            onClick={() => navigate('/products')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
          
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              <span className="font-bold text-lg">2 YEARS WARRANTY</span>
            </div>
            
            <div className="text-sm font-medium text-orange-100 mb-2">{product.category}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{product.name}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">{product.description}</p>
          </div>
        </div>
      </section>

      <main className="py-[4rem] px-[1rem]">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-[4rem] mb-[4rem]">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-1">2</div>
                  <div className="text-sm text-gray-600">Years Warranty</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Operating Range */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-orange-500 mr-3" />
                  Operating Range
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(product.details.operatingRange).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </div>
                      <div className="font-bold text-gray-800">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">Need a Quote?</h3>
                <p className="mb-4 text-orange-100">Get in touch with our experts for customized solutions</p>
                <div className="flex gap-3">
                  <Button 
                    className="bg-white text-orange-600 hover:bg-gray-100"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-orange-600"
                    onClick={() => window.location.href = 'tel:+917358755442'}
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Design Features */}
          <div className="mb-[4rem]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Design <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Engineered for performance, built for reliability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.details.designFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-[4rem]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="text-orange-500">Applications</span> & Use Cases
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Versatile solutions for diverse industrial needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.details.applications.map((application, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Droplets className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{application}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your specific requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Get Quote
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                onClick={() => window.location.href = 'tel:+917358755442'}
              >
                Call: +91-7358755442
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;