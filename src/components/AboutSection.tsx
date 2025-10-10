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
    <section id="about" className="py-[6rem] bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-[1rem]">
        <div className="grid lg:grid-cols-2 gap-[4rem] items-center mb-[6rem]">
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src={kirloskarParts}
                alt="Kirloskar Pump Parts and Components"
                className="w-full h-[37.5rem] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>

              <div className="absolute bottom-[1.5rem] left-[1.5rem] bg-white/90 backdrop-blur-sm rounded-lg p-[1rem] shadow-lg">
                <div className="text-center">
                  <div className="text-[1.5rem] font-bold text-orange-600">9+</div>
                  <div className="text-[0.875rem] text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-[1.5rem] -left-[1.5rem] w-[6rem] h-[6rem] bg-orange-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-[1.5rem] -right-[1.5rem] w-[8rem] h-[8rem] bg-blue-400/10 rounded-full"></div>
          </div>

          <div className="space-y-[2rem]">
            <div className="space-y-[1rem]">
              <Badge variant="outline" className="text-orange-600 border-orange-600 bg-orange-50">
                WHO WE ARE
              </Badge>
              <h2 className="text-[2.5rem] font-bold leading-tight text-gray-900">
                Our <span className="text-orange-600">Expertise</span>
              </h2>
              <p className="text-gray-600 text-[1.125rem] leading-relaxed">
                FLOQ is your trusted destination for complete fluid handling solutions,
                delivering performance driven pumps for a wide range of industries.
                Backed by SMIE INDUSTRIES PVT LTD, we specialize in the design,
                manufacturing, and engineering of high-quality industrial and
                positive displacement pumps.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-[1.5rem]">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-[1rem] group hover:transform hover:translate-y-[0.25rem] transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-[3rem] h-[3rem] bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                      <feature.icon className="h-[1.5rem] w-[1.5rem] text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-[0.5rem] text-gray-900">{feature.title}</h3>
                    <p className="text-[0.875rem] text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-[1rem]">
              <p className="text-gray-600 leading-relaxed">
                We are a team of dedicated professionals with over <strong>9 years of combined experience</strong> in the pump
                industry. At FloQ, we strongly believe that the right product, backed by the right technical knowledge,
                leads to long-term growth and success – for both us and our customers.
              </p>
            </div>

            <div className="flex gap-[1rem]">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                DISCOVER MORE
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                Call Us: +91-7358755442
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-[4rem] items-center mb-[6rem]">
          <div className="space-y-[2rem]">
            <div className="space-y-[1rem]">
              <p className="text-gray-600 leading-relaxed">
                With SMIE INDUSTRIES PVT LTD's proven legacy and FLOQ's forward-thinking approach, we are confident
                in supporting your operations with smart, efficient, and reliable pumping solutions.
              </p>
            </div>

            <div className="space-y-[1rem]">
              <h3 className="text-[1.25rem] font-bold text-gray-900">
                We offer a Broad Portfolio of Centrifugal and PD Pumps Suitable for:
              </h3>
              <div className="grid grid-cols-2 gap-[1rem]">
                {pumpTypes.map((type, index) => (
                  <div key={index} className="bg-white p-[1rem] rounded-lg shadow-md border-l-[0.25rem] border-orange-500">
                    <h4 className="font-bold text-orange-600 mb-[0.25rem]">{type.name}</h4>
                    <p className="text-[0.75rem] text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-[2rem] rounded-lg">
            <h3 className="text-[1.5rem] font-bold text-gray-900 mb-[1rem]">Industry Applications</h3>
            <p className="text-gray-600">Our pumps serve various industries including manufacturing, oil & gas, water treatment, and more.</p>
          </div>
        </div>

        <div className="space-y-[3rem]">
          <div className="text-center">
            <Badge variant="outline" className="text-orange-600 border-orange-600 bg-orange-50 mb-[1rem]">
              OUR PORTFOLIO
            </Badge>
            <h2 className="text-[2.5rem] font-bold text-gray-900 mb-[1.5rem]">
              Our <span className="text-orange-600">Product Portfolio</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[1.5rem]">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white p-[1.5rem] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border-t-[0.25rem] border-orange-500">
                <div className="w-[3rem] h-[3rem] bg-orange-100 rounded-lg flex items-center justify-center mb-[1rem] group-hover:bg-orange-200 transition-colors duration-300">
                  <item.icon className="h-[1.5rem] w-[1.5rem] text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-[0.5rem]">{item.title}</h3>
                <p className="text-[0.875rem] text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
