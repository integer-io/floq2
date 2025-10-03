import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Briefcase, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Banner } from '../components/ui/banner';
import heroImage from '../assets/hero-pumps.jpg';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Mechanical Engineer",
      department: "Engineering",
      location: "Chennai",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹8-12 LPA",
      description: "Design and develop advanced pump systems for industrial applications with focus on efficiency and reliability.",
      skills: ["AutoCAD", "SolidWorks", "Fluid Mechanics", "Pump Design"],
      urgency: "high"
    },
    {
      id: 2,
      title: "Sales Executive - Industrial Pumps",
      department: "Sales",
      location: "Kerala",
      type: "Full-time", 
      experience: "2-5 years",
      salary: "₹4-7 LPA",
      description: "Drive sales growth and build strong client relationships in the industrial pump sector.",
      skills: ["B2B Sales", "Technical Knowledge", "Client Relations", "Market Analysis"],
      urgency: "medium"
    },
    {
      id: 3,
      title: "Quality Control Inspector",
      department: "Quality Assurance",
      location: "Chennai",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹5-8 LPA",
      description: "Ensure product quality and compliance with industry standards and regulations.",
      skills: ["Quality Testing", "ISO Standards", "Documentation", "Problem Solving"],
      urgency: "high"
    },
    {
      id: 4,
      title: "Field Service Technician",
      department: "Service",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹3-6 LPA",
      description: "Provide on-site maintenance, repair, and installation services for pump systems.",
      skills: ["Mechanical Repair", "Troubleshooting", "Customer Service", "Technical Documentation"],
      urgency: "medium"
    },
    {
      id: 5,
      title: "Production Manager",
      department: "Manufacturing",
      location: "Chennai",
      type: "Full-time",
      experience: "7-10 years",
      salary: "₹10-15 LPA",
      description: "Oversee manufacturing operations and ensure efficient production processes.",
      skills: ["Production Planning", "Team Management", "Lean Manufacturing", "Quality Control"],
      urgency: "high"
    },
    {
      id: 6,
      title: "R&D Engineer",
      department: "Research & Development",
      location: "Chennai",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹6-10 LPA",
      description: "Develop innovative pump technologies and improve existing product designs.",
      skills: ["Research", "Product Development", "Testing", "Innovation"],
      urgency: "low"
    }
  ];

  const interviewProcess = [
    {
      round: 1,
      title: "Application Screening",
      description: "Initial review of your resume and qualifications",
      duration: "2-3 days",
      icon: "📋"
    },
    {
      round: 2,
      title: "Phone/Video Interview",
      description: "Technical discussion with HR and hiring manager",
      duration: "30-45 minutes",
      icon: "📞"
    },
    {
      round: 3,
      title: "Technical Assessment",
      description: "Role-specific technical evaluation and problem-solving",
      duration: "1-2 hours",
      icon: "🔧"
    },
    {
      round: 4,
      title: "Final Interview",
      description: "In-person meeting with department head and team",
      duration: "45-60 minutes",
      icon: "🤝"
    },
    {
      round: 5,
      title: "Offer & Onboarding",
      description: "Job offer discussion and joining formalities",
      duration: "1-2 days",
      icon: "🎉"
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Professional development opportunities",
    "Performance-based bonuses",
    "Flexible working hours",
    "Career advancement programs"
  ];

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'high': return 'bg-red-500 animate-pulse';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getUrgencyText = (urgency) => {
    switch(urgency) {
      case 'high': return 'Urgent Hiring';
      case 'medium': return 'Active Hiring';
      case 'low': return 'Open Position';
      default: return 'Available';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Banner
          title="Careers"
          subtitle="Build your future with FloQ Pumps"
          backgroundImage={heroImage}
        />

        {/* Why Join Us */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Choose <span className="text-orange-500">FloQ Pumps?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Great Team</h3>
                <p className="text-muted-foreground">Work with experienced professionals in a collaborative environment.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">Advance your career with continuous learning and development programs.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Briefcase className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Competitive Benefits</h3>
                <p className="text-muted-foreground">Enjoy competitive salary packages and comprehensive benefits.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground">Maintain a healthy balance between professional and personal life.</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Employee Benefits</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Current <span className="text-orange-500">Job Openings</span>
            </h2>
            
            <div className="grid gap-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${getUrgencyColor(job.urgency)}`}>
                          {getUrgencyText(job.urgency)}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-orange-500" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-orange-500" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-orange-500" />
                          <span>{job.experience}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-2">Required Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-lg font-bold text-green-600 mb-4">
                        Salary: {job.salary}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:ml-6">
                      <Button 
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white animate-pulse shadow-lg"
                        onClick={() => window.location.href = 'tel:+917358755442'}
                      >
                        <Phone className="w-4 h-4 mr-2 animate-bounce" />
                        Call Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        onClick={() => setSelectedJob(job)}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interview Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our <span className="text-orange-500">Interview Process</span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {interviewProcess.map((step, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{step.icon}</span>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-2">{step.description}</p>
                        <p className="text-sm text-orange-600 font-medium">Duration: {step.duration}</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {step.round}
                      </div>
                    </div>
                    
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Careers */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg mb-8 text-orange-100">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 animate-pulse" />
                  <span className="text-lg font-medium">+91-7358755442</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg font-medium">hr@floqpump.com</span>
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

export default Careers;