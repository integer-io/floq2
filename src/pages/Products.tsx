import Header from "@/components/Header";
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Settings, Zap, Droplets, ChevronRight } from "lucide-react";
import heroImage from '../assets/hero-pumps.jpg';
import { useState } from 'react';

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
        "Auto-priming design"
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
        "Robust construction"
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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  const handleCategorySelect = (category: string, subcategory: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  };

  const filteredProducts = selectedCategory
    ? products.filter(
        p => p.category === selectedCategory && 
        (selectedSubcategory ? p.subcategory === selectedSubcategory : true)
      )
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <PageBanner
        title="Our Products"
        subtitle="Strong, Simple, and Reliable - All Products Come with 2 Years Warranty"
        bgImage={heroImage}
      />

      <main className="py-[4rem] px-[1rem]">
        <div className="max-w-[60rem] mx-auto">
          {/* Show only the first product */}
          {products.length > 0 && (
            <Card className="overflow-hidden bg-white shadow-xl">
              <div className="text-center">
                {/* Product Image */}
                <div className="relative h-[20rem] overflow-hidden">
                  <img
                    src={products[0].image}
                    alt={products[0].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Product Content */}
                <div className="p-[2rem] space-y-[1.5rem]">
                  <div className="text-[0.875rem] font-medium text-orange-600 mb-[0.5rem]">
                    {products[0].category}
                  </div>
                  <h3 className="text-[2rem] font-bold text-gray-800 mb-[1rem]">
                    {products[0].name}
                  </h3>
                  
                  <p className="text-gray-600 leading-[1.6] max-w-[40rem] mx-auto">
                    {products[0].description}
                  </p>

                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-[2rem] py-[0.75rem] text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    onClick={() => window.location.href = `/product/${products[0].id}`}
                  >
                    Learn More
                    <ChevronRight className="w-[1.25rem] h-[1.25rem] ml-[0.5rem]" />
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;