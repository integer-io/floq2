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
    <section id="services" className="py-[6rem] bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-[1rem]">
        <div className="text-center mb-[4rem]">
          <Badge variant="outline" className="text-orange-600 border-orange-600 bg-orange-50 mb-[1rem] px-[1.5rem] py-[0.5rem] font-bold">
            OUR FACILITY
          </Badge>
          <h2 className="text-[2.5rem] md:text-[4rem] font-bold mb-[1.5rem] text-gray-900">
            Our Special <span className="text-orange-600">Features</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
          <div className="space-y-[2.5rem]">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-[1.5rem] text-right group hover:transform hover:translate-x-[0.5rem] transition-all duration-300">
                <div className="flex-1">
                  <h3 className="text-[1.25rem] font-bold mb-[0.75rem] group-hover:text-orange-600 transition-all duration-300 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-[5rem] h-[5rem] bg-gradient-to-r from-orange-500 to-orange-600 rounded-[1rem] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-[2.5rem] w-[2.5rem] text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[24rem] h-[24rem] bg-gradient-to-r from-orange-500 via-blue-600 to-gray-800 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-[20rem] h-[20rem] bg-white rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="w-[8rem] h-[8rem] bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-[1.5rem] shadow-lg">
                      <Zap className="h-[4rem] w-[4rem] text-white" />
                    </div>
                    <p className="font-bold text-[1.5rem] text-orange-600">Smart Pumping</p>
                    <p className="text-gray-600 text-[1.125rem] font-medium">Solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[5rem] -right-[1.5rem] w-[4rem] h-[4rem] bg-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <div className="w-[2rem] h-[2rem] bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-[5rem] -left-[1.5rem] w-[4rem] h-[4rem] bg-blue-600 rounded-full flex items-center justify-center animate-bounce delay-500 shadow-lg">
                <div className="w-[2rem] h-[2rem] bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="space-y-[2.5rem]">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex items-start gap-[1.5rem] group hover:transform hover:-translate-x-[0.5rem] transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-[5rem] h-[5rem] bg-gradient-to-r from-orange-500 to-orange-600 rounded-[1rem] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-[2.5rem] w-[2.5rem] text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.25rem] font-bold mb-[0.75rem] group-hover:text-orange-600 transition-all duration-300 text-gray-900">{feature.title}</h3>
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
