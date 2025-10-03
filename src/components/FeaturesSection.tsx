import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Settings, Clock, Database, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Application-based Pump Selection",
      description: "We guide you with the best-fit pump based on real-world applications and performance needs."
    },
    {
      icon: Shield,
      title: "100% Quality Assurance", 
      description: "Premium-grade pumps engineered for performance, reliability and long-term operation."
    },
    {
      icon: Database,
      title: "Complete Product Range",
      description: "A complete lineup of centrifugal and PD pumps for all industrial applications."
    },
    {
      icon: Users,
      title: "24/7 Expert Support",
      description: "From selection to supply, installation to service – we've got it covered."
    },
    {
      icon: Settings,
      title: "Custom Engineering", 
      description: "Special designs and modifications to suit your specific operational requirements."
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Quick delivery and installation with minimal downtime for your operations."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-orange-600 border-orange-600 bg-orange-50 mb-4 px-6 py-2 font-bold">
            OUR FACILITY
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Our Special <span className="text-orange-600">Features</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-10">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-6 text-right group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-all duration-300 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-r from-orange-500 via-blue-600 to-gray-800 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Zap className="h-16 w-16 text-white" />
                    </div>
                    <p className="font-bold text-2xl text-orange-600">Smart Pumping</p>
                    <p className="text-gray-600 text-lg font-medium">Solutions</p>
                  </div>
                </div>
              </div>
              {/* Floating social icons */}
              <div className="absolute top-20 -right-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-20 -left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center animate-bounce delay-500 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-10">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex items-start gap-6 group hover:transform hover:-translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-all duration-300 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;