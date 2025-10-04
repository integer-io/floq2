import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, CheckCircle, Sparkles, Zap, Award } from "lucide-react";
import heroImage from "@/assets/hero-pumps.jpg";

const InteractiveHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { Icon: Sparkles, delay: '0s', position: 'top-[10%] left-[15%]' },
    { Icon: Zap, delay: '0.5s', position: 'top-[60%] left-[10%]' },
    { Icon: Award, delay: '1s', position: 'top-[30%] right-[20%]' },
  ];

  return (
    <section className="min-h-[70vh] md:min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-[5rem] left-[2.5rem] w-[20rem] h-[20rem] bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-[5rem] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div
          className="absolute bottom-[5rem] right-[2.5rem] w-[25rem] h-[25rem] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-[5rem] animate-pulse"
          style={{
            transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div className="absolute top-[50%] left-[25%] w-[15rem] h-[15rem] bg-orange-300 rounded-full blur-[3rem] animate-bounce"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float`}
          style={{ animationDelay: delay }}
        >
          <div className="w-[4rem] h-[4rem] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-125 transition-transform duration-300">
            <Icon className="w-[2rem] h-[2rem] text-orange-500" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-[1rem] py-[3rem] md:py-[5rem] flex items-center min-h-[70vh] md:min-h-screen relative z-10">
        <div className="grid md:grid-cols-2 gap-[2rem] md:gap-[3rem] items-center w-full">
          {/* Content */}
          <div className="space-y-[1.5rem] md:space-y-[2rem] animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-[0.5rem] md:gap-[0.75rem] bg-gradient-to-r from-orange-500 to-pink-500 text-white px-[1rem] md:px-[1.5rem] py-[0.5rem] md:py-[0.75rem] rounded-full shadow-lg animate-pulse">
              <Sparkles className="w-[1rem] h-[1rem] md:w-[1.25rem] md:h-[1.25rem]" />
              <span className="text-[0.875rem] md:text-[1rem] font-bold">Now Exporting Worldwide</span>
            </div>

            <div className="space-y-[1rem] md:space-y-[1.5rem]">
              <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5.5rem] font-extrabold leading-tight">
                <span className="block text-gray-900 hover:text-orange-500 transition-colors duration-300">
                  Smart Pumping
                </span>
                <span className="block text-gray-700">Solutions by</span>
                <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
                  FloQ Pumps
                </span>
              </h1>

              <div className="flex items-center gap-[0.5rem] md:gap-[0.75rem] text-[1rem] md:text-[1.25rem] group cursor-pointer">
                <div className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <ArrowUpRight className="h-[1.25rem] w-[1.25rem] md:h-[1.5rem] md:w-[1.5rem] text-white" />
                </div>
                <span className="text-gray-700 font-bold group-hover:text-blue-600 transition-colors">floqpump.com</span>
              </div>
            </div>

            <p className="text-[1rem] md:text-[1.25rem] text-gray-600 leading-relaxed max-w-[35rem] hover:text-gray-800 transition-colors">
              FLOQ is your trusted destination for complete fluid handling solutions,
              delivering performance driven pumps for a wide range of industries.
            </p>

            {/* Features with hover effects */}
            <div className="flex flex-wrap items-center gap-[0.75rem] md:gap-[1rem]">
              {[
                { text: "9+ Years Experience", icon: Award },
                { text: "ISO Certified", icon: CheckCircle },
                { text: "2-Year Warranty", icon: Zap },
              ].map(({ text, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[0.5rem] bg-white/80 backdrop-blur-sm px-[1rem] py-[0.5rem] rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <Icon className="h-[1.25rem] w-[1.25rem] text-green-500 group-hover:rotate-12 transition-transform" />
                  <span className="text-[0.75rem] md:text-[0.875rem] font-bold text-gray-700 group-hover:text-green-600 transition-colors">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-[1rem] md:gap-[1.5rem] pt-[1rem]">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 hover:from-orange-600 hover:via-pink-600 hover:to-orange-700 text-white shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 px-[2rem] md:px-[2.5rem] py-[1.5rem] md:py-[1.75rem] text-[1rem] md:text-[1.125rem] font-bold w-full sm:w-auto group"
                onClick={() => (window.location.href = '/products')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10">View All Products</span>
                <ArrowUpRight className={`ml-[0.5rem] h-[1.25rem] w-[1.25rem] transition-transform duration-300 ${isHovered ? 'rotate-45 scale-125' : ''}`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[0.125rem] border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-[2rem] md:px-[2.5rem] py-[1.5rem] md:py-[1.75rem] text-[1rem] md:text-[1.125rem] font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 w-full sm:w-auto group"
                onClick={() => (window.location.href = '/contact')}
              >
                <Play className="mr-[0.5rem] h-[1.25rem] w-[1.25rem] group-hover:animate-pulse" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Hero Image with Interactive Elements */}
          <div className="relative mt-[2rem] md:mt-0">
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl group">
              <img
                src={heroImage}
                alt="Professional pump systems and engineering"
                className="w-full h-[18.75rem] md:h-[25rem] lg:h-[37.5rem] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent group-hover:from-orange-900/30 transition-colors duration-700"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-[1rem] left-[1rem] md:bottom-[1.5rem] md:left-[1.5rem] bg-white/95 backdrop-blur-md rounded-[1rem] md:rounded-[1.5rem] p-[0.75rem] md:p-[1rem] shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-center">
                  <div className="text-[1.5rem] md:text-[2rem] font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    9+
                  </div>
                  <div className="text-[0.75rem] md:text-[0.875rem] text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute top-[1rem] right-[1rem] md:top-[1.5rem] md:right-[1.5rem] bg-gradient-to-r from-orange-500 to-pink-500 text-white px-[1rem] py-[0.5rem] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-[0.75rem] md:text-[0.875rem] font-bold">ISO Certified</span>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-[1.5rem] -right-[1.5rem] w-[6rem] h-[6rem] bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-30 animate-pulse blur-[1rem]"></div>
            <div className="absolute -bottom-[1.5rem] -left-[1.5rem] w-[8rem] h-[8rem] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-[2rem] animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[2rem] left-[50%] transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block">
        <div className="w-[2rem] h-[3rem] border-[0.125rem] border-gray-400 rounded-full flex items-start justify-center p-[0.5rem]">
          <div className="w-[0.375rem] h-[0.375rem] bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHero;
