import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnalystQuote {
  quote: string;
  source: string;
  analyst: string;
  position: string;
}

interface AnalystSpeakProps {
  quotes: AnalystQuote[];
}

export const AnalystSpeak: React.FC<AnalystSpeakProps> = ({ quotes }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, quotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
    setIsAutoPlaying(false);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-16 bg-gray-50">
      {/* Large Quote Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Quote size={400} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Analyst Speak</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what industry experts have to say about our innovative solutions and market leadership
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12">
            <button
              onClick={prevQuote}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <Card className="bg-white p-8 shadow-xl transition-all duration-500">
            <div className="relative">
              <div className="mb-6">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{quotes[currentQuote].quote}"
                </p>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-primary">
                  {quotes[currentQuote].source}
                </p>
                <div className="text-sm text-gray-600 mt-1">
                  {quotes[currentQuote].analyst} - {quotes[currentQuote].position}
                </div>
              </div>
            </div>
          </Card>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12">
            <button
              onClick={nextQuote}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next quote"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Quote Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentQuote(index);
                setIsAutoPlaying(false);
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentQuote === index
                  ? "bg-primary w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalystSpeak;