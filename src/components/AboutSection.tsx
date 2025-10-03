import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Wrench, Shield } from "lucide-react";
import kirloskarParts from "@/assets/kirloskar-parts.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Application-based pump selection",
      description: "We guide you with the best-fit pump based on real-world applications."
    },
    {
      icon: Wrench,
      title: "Custom-engineered pumping solutions", 
      description: "Special designs to suit your specific operational needs."
    },
    {
      icon: Award,
      title: "R&D and product innovation",
      description: "Premium-grade pumps engineered for performance and longevity."
    },
    {
      icon: Users,
      title: "Energy-efficient and durable pump systems",
      description: "From selection to supply, installation to service – we've got it covered."
    }
  ];

  const pumpTypes = [
    { name: "Industrial", description: "Heavy-duty pumps for industrial applications" },
    { name: "Commercial", description: "Reliable pumps for commercial use" },
    { name: "Agricultural", description: "Efficient pumps for farming needs" },
    { name: "Infrastructure", description: "Infrastructure development solutions" },
    { name: "Municipal", description: "Municipal water management solutions" }
  ];

  const portfolioItems = [
    { title: "Centrifugal Pumps", description: "High-efficiency centrifugal pumps for various applications", icon: CheckCircle },
    { title: "Positive Displacement", description: "Reliable PD pumps for precise fluid handling", icon: Wrench },
    { title: "Industrial Solutions", description: "Heavy-duty pumps for industrial processes", icon: Award },
    { title: "Custom Engineering", description: "Tailored pump solutions for specific needs", icon: Users },
    { title: "Maintenance Services", description: "Comprehensive maintenance and support services", icon: Shield }
  ];
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* First Section - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img 
                src={kirloskarParts} 
                alt="Kirloskar Pump Parts and Components" 
                className="w-full h-[600px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">9+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-orange-600 border-orange-600 bg-orange-50">
                WHO WE ARE
              </Badge>
              <h2 className="text-4xl font-bold leading-tight text-gray-900">
                Our <span className="text-orange-600">Expertise</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                FLOQ is your trusted destination for complete fluid handling solutions, 
                delivering performance driven pumps for a wide range of industries. 
                Backed by SMIE INDUSTRIES PVT LTD, we specialize in the design, 
                manufacturing, and engineering of high-quality industrial and 
                positive displacement pumps.
              </p>
            </div>


            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group hover:transform hover:translate-y-1 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>


            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We are a team of dedicated professionals with over <strong>9 years of combined experience</strong> in the pump 
                industry. At FloQ, we strongly believe that the right product, backed by the right technical knowledge, 
                leads to long-term growth and success – for both us and our customers.
              </p>
            </div>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                DISCOVER MORE
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                Call Us: +91-7358755442
              </Button>
            </div>
          </div>
        </div>

        {/* Second Section - Text Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                With SMIE INDUSTRIES PVT LTD's proven legacy and FLOQ's forward-thinking approach, we are confident 
                in supporting your operations with smart, efficient, and reliable pumping solutions.
              </p>
            </div>

            {/* Pump Portfolio */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                We offer a Broad Portfolio of Centrifugal and PD Pumps Suitable for:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {pumpTypes.map((type, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-600 mb-1">{type.name}</h4>
                    <p className="text-xs text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side content or image placeholder */}
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Applications</h3>
            <p className="text-gray-600">Our pumps serve various industries including manufacturing, oil & gas, water treatment, and more.</p>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="space-y-12">
          <div className="text-center">
            <Badge variant="outline" className="text-orange-600 border-orange-600 bg-orange-50 mb-4">
              OUR PORTFOLIO
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Product Portfolio</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border-t-4 border-orange-500">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;