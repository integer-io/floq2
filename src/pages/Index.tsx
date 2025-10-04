import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import InteractiveHero from "@/components/InteractiveHero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import AnalystSpeak from '@/components/AnalystSpeak';
import { Star, Quote, User, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Plant Manager",
    company: "ABC Industries",
    location: "Chennai",
    rating: 5,
    text: "FloQ Pumps has been our trusted partner for over 3 years. Their pumps are reliable, efficient, and their service is exceptional.",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Priya Sharma",
    position: "Operations Director", 
    company: "Tech Solutions Ltd",
    location: "Bangalore",
    rating: 5,
    text: "We've installed FloQ pumps across multiple facilities and they've consistently delivered outstanding performance. The quality and durability are unmatched in the industry.",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Mohammed Ali",
    position: "Project Engineer",
    company: "Coastal Industries",
    location: "Kerala",
    rating: 5,
    text: "The custom-engineered solution provided by FloQ perfectly met our specific requirements. Their technical expertise and professional approach impressed our entire team.",
    image: "/api/placeholder/80/80"
  }
];

const analystQuotes = [
  {
    quote: "FloQ Pumps has established itself as a market leader in innovative pump solutions, consistently delivering high-performance products that meet the evolving needs of various industries.",
    source: "Aite Group",
    analyst: "John Smith",
    position: "Senior Industry Analyst"
  },
  {
    quote: "Their commitment to sustainability and technological advancement has positioned FloQ as a pioneer in eco-friendly industrial solutions.",
    source: "Frost & Sullivan",
    analyst: "Maria Rodriguez",
    position: "Research Director"
  },
  {
    quote: "FloQ's customer-centric approach and robust R&D capabilities make them a standout player in the global pump manufacturing sector.",
    source: "McKinsey & Company",
    analyst: "David Chen",
    position: "Industry Expert"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ImageCarousel />
        <InteractiveHero />
        <AboutSection />
        <FeaturesSection />
        
        {/* Stats Section */}
        <StatsSection />

        {/* Client Testimonials Section */}
        <section className="py-[4rem] px-[1rem] relative bg-gray-50">
          {/* Background Pattern with Quotes Symbol */}
           <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
    <div className="text-[12rem] font-bold text-orange-500 select-none leading-none">
      "
    </div>
  </div>
          
          <div className="max-w-[70rem] mx-auto relative z-10">
            <div className="text-center mb-[3rem]">
              <h2 className="text-[2rem] font-bold text-gray-800 mb-[1rem]">
                Client Testimonials
                <div className="w-[4rem] h-[0.25rem] bg-orange-500 mx-auto mt-[0.5rem]"></div>
              </h2>
              <p className="text-gray-600 max-w-[32rem] mx-auto">
                The trust that we have gained over the years has found its voice in clients celebrating the width and depth of FloQ Pumps.
              </p>
            </div>

            <div className="relative">
              {/* Current Testimonial */}
              <div className="mb-[2rem]">
                <div className="text-[1.5rem] font-bold text-gray-800 mb-[1rem]">
                  {testimonials[currentSlide].company}
                </div>
                
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-[2rem] rounded-[0.5rem] text-white shadow-lg">
                  <p className="text-[1.1rem] leading-relaxed">
                    {testimonials[currentSlide].text}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-end gap-[0.5rem]">
                <button
                  onClick={prevSlide}
                  className="w-[2.5rem] h-[2.5rem] border border-orange-300 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors duration-200"
                >
                  <ChevronLeft className="w-[1rem] h-[1rem] text-orange-600" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="w-[2.5rem] h-[2.5rem] border border-orange-300 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors duration-200"
                >
                  <ChevronRight className="w-[1rem] h-[1rem] text-orange-600" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
