import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Industrial Excellence',
    description: 'Leading the way in industrial pump solutions with cutting-edge technology and reliability'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Precision Engineering',
    description: 'Engineered for performance, designed for durability in the most demanding environments'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Global Standards',
    description: 'ISO certified solutions meeting international quality standards for worldwide applications'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Innovative Solutions',
    description: 'Advanced pumping systems tailored to meet your specific industrial requirements'
  }
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative w-full h-[28rem] md:h-[36rem] lg:h-[44rem] overflow-hidden bg-gray-900">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-[1rem] md:px-[2rem] lg:px-[4rem]">
                <div className="max-w-[40rem] text-white space-y-[1rem] md:space-y-[1.5rem]">
                  <h2 className="text-[2rem] md:text-[3rem] lg:text-[4.5rem] font-bold leading-tight animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] text-gray-200 leading-relaxed animate-fade-in-delay">
                    {slide.description}
                  </p>
                  <div className="pt-[1rem]">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-[2rem] py-[1.5rem] text-[1rem] md:text-[1.125rem]"
                      onClick={() => window.location.href = '/products'}
                    >
                      Explore Products
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-[0.5rem] md:left-[1rem] top-[50%] -translate-y-[50%] z-20 w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-[1.25rem] h-[1.25rem] md:w-[1.5rem] md:h-[1.5rem] text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-[0.5rem] md:right-[1rem] top-[50%] -translate-y-[50%] z-20 w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-[1.25rem] h-[1.25rem] md:w-[1.5rem] md:h-[1.5rem] text-white group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-[1rem] md:bottom-[2rem] left-[50%] -translate-x-[50%] z-20 flex gap-[0.5rem] md:gap-[0.75rem]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[0.5rem] md:h-[0.75rem] rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-500 w-[1.5rem] md:w-[2rem]'
                : 'bg-white/50 hover:bg-white/80 w-[0.5rem] md:w-[0.75rem]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
