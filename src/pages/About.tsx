import React from 'react';
import { Banner } from '../components/ui/banner';
import heroImage from '../assets/hero-pumps.jpg';
import kirloskarParts from '../assets/kirloskar-parts.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Mail, Linkedin } from 'lucide-react';

const timeline = [
  {
    year: "1960",
    title: "Company Foundation",
    description: "Established as a pioneer in pump manufacturing"
  },
  {
    year: "1975",
    title: "International Expansion",
    description: "Expanded operations to international markets"
  },
  {
    year: "1990",
    title: "Technology Innovation",
    description: "Introduced advanced pump technologies"
  },
  {
    year: "2000",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2000 certification"
  },
  {
    year: "2010",
    title: "Smart Solutions",
    description: "Launched smart pump monitoring solutions"
  },
  {
    year: "2020",
    title: "Sustainability Focus",
    description: "Implemented eco-friendly manufacturing processes"
  }
];

const teamMembers = [
  {
    name: "Rajesh Kumar",
    position: "Chief Executive Officer",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "rajesh@floqpump.com",
    linkedin: "#"
  },
  {
    name: "Priya Sharma",
    position: "Chief Technology Officer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "priya@floqpump.com",
    linkedin: "#"
  },
  {
    name: "Mohammed Ali",
    position: "Head of Engineering",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "mohammed@floqpump.com",
    linkedin: "#"
  },
  {
    name: "Anjali Desai",
    position: "Sales Director",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "anjali@floqpump.com",
    linkedin: "#"
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner
        title="About Us"
        subtitle="Leading the industry with innovation and excellence"
        backgroundImage={heroImage}
      />
      <main className="py-[3rem]">
        {/* Vision Section - Zigzag Row 1: Image Left, Content Right */}
        <section className="py-[4rem] px-[1rem] bg-white">
          <div className="max-w-[80rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-[3rem] items-center">
              <div className="relative order-1">
                <img
                  src={heroImage}
                  alt="Our Vision"
                  className="w-full h-[25rem] object-cover rounded-[1rem] shadow-2xl"
                />
                <div className="absolute -bottom-[1rem] -right-[1rem] w-[15rem] h-[15rem] bg-orange-500/10 rounded-full blur-[3rem]"></div>
              </div>
              <div className="order-2 space-y-[1.5rem]">
                <div className="inline-block bg-orange-100 px-[1rem] py-[0.5rem] rounded-full">
                  <span className="text-orange-600 font-bold text-[0.875rem]">OUR VISION</span>
                </div>
                <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-gray-900 leading-tight">
                  Global Leadership in <span className="text-orange-500">Pumping Solutions</span>
                </h2>
                <p className="text-gray-600 text-[1.125rem] leading-relaxed">
                  To be the global leader in innovative pumping solutions, setting industry standards for quality, reliability, and customer satisfaction while contributing to sustainable industrial growth worldwide.
                </p>
                <ul className="space-y-[0.75rem]">
                  {["Industry Leadership", "Innovation Excellence", "Sustainable Growth", "Customer Satisfaction"].map((item, index) => (
                    <li key={index} className="flex items-center gap-[0.75rem]">
                      <div className="w-[0.375rem] h-[0.375rem] bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - Zigzag Row 2: Content Left, Image Right */}
        <section className="py-[4rem] px-[1rem] bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-[80rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-[3rem] items-center">
              <div className="order-2 lg:order-1 space-y-[1.5rem]">
                <div className="inline-block bg-blue-100 px-[1rem] py-[0.5rem] rounded-full">
                  <span className="text-blue-600 font-bold text-[0.875rem]">OUR MISSION</span>
                </div>
                <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-gray-900 leading-tight">
                  Delivering Superior <span className="text-blue-500">Fluid Handling Solutions</span>
                </h2>
                <p className="text-gray-600 text-[1.125rem] leading-relaxed">
                  To deliver superior fluid handling solutions through continuous innovation, exceptional engineering, and unwavering commitment to quality, while building lasting partnerships with our clients across diverse industries.
                </p>
                <div className="grid grid-cols-2 gap-[1rem] mt-[2rem]">
                  <div className="bg-white p-[1.5rem] rounded-[0.75rem] shadow-md">
                    <div className="text-[2rem] font-bold text-orange-500 mb-[0.5rem]">9+</div>
                    <div className="text-[0.875rem] text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white p-[1.5rem] rounded-[0.75rem] shadow-md">
                    <div className="text-[2rem] font-bold text-blue-500 mb-[0.5rem]">2</div>
                    <div className="text-[0.875rem] text-gray-600">Year Warranty</div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img
                  src={kirloskarParts}
                  alt="Our Mission"
                  className="w-full h-[25rem] object-cover rounded-[1rem] shadow-2xl"
                />
                <div className="absolute -bottom-[1rem] -left-[1rem] w-[15rem] h-[15rem] bg-blue-500/10 rounded-full blur-[3rem]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-[4rem] px-[1rem] bg-white">
          <div className="max-w-[80rem] mx-auto">
            <div className="text-center mb-[3rem]">
              <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-gray-900 mb-[1rem]">
                Meet Our <span className="text-orange-500">Leadership Team</span>
              </h2>
              <p className="text-gray-600 text-[1.125rem] max-w-[40rem] mx-auto">
                Experienced professionals driving innovation and excellence in the pumping industry
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-[18rem] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-[1.5rem] text-center">
                      <h3 className="text-[1.25rem] font-bold text-gray-900 mb-[0.25rem]">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-medium text-[0.875rem] mb-[1rem]">
                        {member.position}
                      </p>
                      <div className="flex justify-center gap-[0.75rem]">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-[2.5rem] h-[2.5rem] bg-gray-100 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group/icon"
                        >
                          <Mail className="w-[1.125rem] h-[1.125rem] text-gray-600 group-hover/icon:text-white" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="w-[2.5rem] h-[2.5rem] bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group/icon"
                        >
                          <Linkedin className="w-[1.125rem] h-[1.125rem] text-gray-600 group-hover/icon:text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-[4rem] px-[1rem] bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="max-w-[70rem] mx-auto text-center">
            <h2 className="text-[2.5rem] font-bold text-foreground mb-[1rem]">
              AT FloQ,
            </h2>
            <h3 className="text-[2rem] font-bold text-foreground mb-[1rem]">
              WE DON'T JUST <span className="text-orange-500">SUPPLY PUMPS</span>
            </h3>
            <h3 className="text-[2.5rem] font-bold text-orange-500 mb-[4rem]">
              WE BUILD <span className="text-foreground">SOLUTIONS</span>
            </h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-[2rem]">
              {[
                {title: "EXPERT CONSULTATION", desc: "We guide you with the best-fit pump based on real-world applications"},
                {title: "END-TO-END SOLUTIONS", desc: "From selection to supply, installation to service – we've got it covered"},
                {title: "CUSTOMIZATION", desc: "Special designs to suit your specific operational needs"},
                {title: "QUALITY COMMITMENT", desc: "Premium-grade pumps engineered for performance and longevity"},
                {title: "PRODUCT RANGE", desc: "A complete lineup of centrifugal and PD pumps for all industries"},
                {title: "24/7 SERVICE SUPPORT", desc: "Round-the-clock support for your pumping needs"},
                {title: "2-YEAR WARRANTY", desc: "Comprehensive warranty coverage on all products"}
              ].map((item, index) => (
                <div key={index} className="bg-white p-[1.5rem] rounded-[0.75rem] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-[0.25rem]">
                  <h4 className="font-bold text-foreground mb-[0.75rem] text-[1rem]">{item.title}</h4>
                  <p className="text-[0.875rem] text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
