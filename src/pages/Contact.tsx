import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Banner } from '../components/ui/banner';
import heroImage from '../assets/hero-pumps.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    subject: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    queries: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.queries) {
      toast({
        title: "Please fill required fields",
        description: "First name, email, and queries are required.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      organization: '',
      subject: '',
      email: '',
      phone: '',
      city: '',
      country: '',
      queries: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Banner
          title="Contact Us"
          subtitle="Let's turn your vision into reality"
          backgroundImage={heroImage}
        />

        {/* Contact Form and Info */}
        <section className="py-[4rem] px-[1rem]">
          <div className="max-w-[70rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-[3rem]">
              {/* Contact Form */}
              <div className="bg-card p-[2rem] rounded-[0.5rem] shadow-lg">
                <h3 className="text-[1.5rem] font-bold text-foreground mb-[1.5rem]">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-[1.5rem]">
                  <div className="grid md:grid-cols-2 gap-[1rem]">
                    <div>
                      <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-[1rem]">
                    <div>
                      <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                        Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-[1rem]">
                    <div>
                      <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-[1rem]">
                    <div>
                      <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                        <option value="China">China</option>
                        <option value="Singapore">Singapore</option>
                        <option value="UAE">UAE</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.875rem] font-medium text-foreground mb-[0.5rem]">
                      Queries *
                    </label>
                    <textarea
                      name="queries"
                      value={formData.queries}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-[0.75rem] border border-border rounded-[0.5rem] focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                      placeholder="Please describe your requirements, project details, or any questions you have..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-[0.75rem] px-[1.5rem] rounded-[0.5rem] font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-[0.5rem] shadow-lg"
                  >
                    <Send className="w-[1.25rem] h-[1.25rem]" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                {/* Contact Details */}
                <div className="bg-card p-[1.5rem] rounded-[0.5rem] shadow-lg mb-[2rem]">
                  <h3 className="text-[1.25rem] font-bold text-foreground mb-[1rem]">GET IN TOUCH WITH US</h3>
                  <div className="space-y-[1rem]">
                    <div className="flex items-center space-x-[0.75rem]">
                      <Phone className="w-[1.25rem] h-[1.25rem] text-orange-500" />
                      <div>
                        <p className="font-medium text-foreground">7358755442 | 8072372485</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-[0.75rem]">
                      <Mail className="w-[1.25rem] h-[1.25rem] text-orange-500" />
                      <p className="text-muted-foreground">export@floqpump.com</p>
                    </div>
                    <div className="flex items-center space-x-[0.75rem]">
                      <Clock className="w-[1.25rem] h-[1.25rem] text-orange-500" />
                      <p className="text-muted-foreground">24/7 Customer Support</p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-[1.5rem] rounded-[0.5rem]">
                  <h3 className="text-[1.125rem] font-bold mb-[0.5rem]">SMIE INDUSTRIES PRIVATE LIMITED</h3>
                  <p className="text-blue-100 text-[0.875rem] mb-[0.5rem]">(An ISO 9001 Certified & CE Certified Company)</p>
                  <p className="font-medium mb-[0.25rem]">9+ YEARS EXPERIENCE</p>
                  <p className="font-medium">NOW EXPORTING WORLDWIDE</p>
                  <p className="text-blue-100 text-[0.875rem] mt-[0.5rem]">RELIABLE. ACCESSIBLE. WHEREVER YOU ARE. 2-YEAR WARRANTY.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="font-bold text-foreground mb-2">How can we help with your business?</h3>
                <p className="text-muted-foreground">We provide comprehensive pumping solutions tailored to your specific industry needs, from consultation to installation and after-sales support.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="font-bold text-foreground mb-2">What are the advantages of working with FloQ?</h3>
                <p className="text-muted-foreground">Our advantages include 9+ years of experience, ISO 9001 certification, worldwide export capabilities, 24/7 support, and custom-engineered solutions.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow">
                <h3 className="font-bold text-foreground mb-2">How does the working process work?</h3>
                <p className="text-muted-foreground">Our process includes initial consultation, application analysis, custom design if needed, manufacturing, quality testing, installation support, and ongoing maintenance services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Details Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our <span className="text-orange-500">Locations</span>
            </h2>
            
            {/* Chennai Location */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Chennai Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Address:</p>
                      <p className="text-muted-foreground">Office: No.519/2, Srinivasapillai Nagar,</p>
                      <p className="text-muted-foreground">Ayanambakkam, Chennai-600095</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <p className="text-muted-foreground">8072372485</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <p className="text-muted-foreground">export@floqpump.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-lg">
                <div className="w-full h-64 bg-blue-200 rounded-lg flex items-center justify-center">
                  <p className="text-blue-600 font-medium">Chennai Office Image</p>
                </div>
              </div>
            </div>

            {/* Kerala Location */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg order-2 lg:order-1">
                <div className="w-full h-64 bg-orange-200 rounded-lg flex items-center justify-center">
                  <p className="text-orange-600 font-medium">Kerala Office Image</p>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-foreground">Kerala Office (Registered)</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Address:</p>
                      <p className="text-muted-foreground">Building No 7/287, Saud building,</p>
                      <p className="text-muted-foreground">Kozhikode- Palakkad National Highway,</p>
                      <p className="text-muted-foreground">Nearby Hyundai car showroom,</p>
                      <p className="text-muted-foreground">Kumaramputhur, Palakkad, Kerala, 678583</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <p className="text-muted-foreground">7358755442</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <p className="text-muted-foreground">export@floqpump.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;