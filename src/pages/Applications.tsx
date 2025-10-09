import { Banner } from '../components/ui/banner';
import heroImage from '../assets/hero-pumps.jpg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const applications = [
  {
    title: "Water Treatment",
    description: "Advanced pumping solutions for water treatment facilities",
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Industrial Processing",
    description: "High-performance pumps for industrial fluid handling",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Agriculture",
    description: "Reliable irrigation and farming pump systems",
    image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Mining",
    description: "Heavy-duty pumps for mining operations",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Chemical Processing",
    description: "Specialized pumps for chemical industries",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Power Generation",
    description: "Critical pumping solutions for power plants",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Oil & Gas",
    description: "High-pressure pumps for oil and gas applications",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Municipal",
    description: "Public water supply and wastewater management",
    image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Food & Beverage",
    description: "Sanitary pumps for food processing",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Pharmaceutical",
    description: "Precision pumps for pharmaceutical manufacturing",
    image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Construction",
    description: "Dewatering and concrete pumping solutions",
    image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Marine",
    description: "Seawater and marine industry pumps",
    image: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-ships-163726.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Paper & Pulp",
    description: "Specialized pumps for paper manufacturing",
    image: "https://images.pexels.com/photos/6069325/pexels-photo-6069325.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Textiles",
    description: "Process pumps for textile industry",
    image: "https://images.pexels.com/photos/6069344/pexels-photo-6069344.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "HVAC",
    description: "Circulation pumps for heating and cooling",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Waste Management",
    description: "Pumps for waste handling and treatment",
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

const Applications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Banner
        title="Industrial Applications"
        subtitle="Discover our comprehensive range of pumping solutions across various industries"
        backgroundImage={heroImage}
      />
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative bg-muted">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{app.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Applications Details Section */}
          <section className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Industrial Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cooling systems</li>
                  <li>• Cleaning applications</li>
                  <li>• Material handling</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Specialized Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High temperature fluids</li>
                  <li>• Corrosive chemicals</li>
                  <li>• Viscous materials</li>
                  <li>• Abrasive slurries</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Water Management</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Municipal water supply</li>
                  <li>• Wastewater treatment</li>
                  <li>• Irrigation systems</li>
                  <li>• Drainage solutions</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Marine Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ship ballasting</li>
                  <li>• Marine feed systems</li>
                  <li>• Offshore operations</li>
                  <li>• Port facilities</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Emergency Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flood control</li>
                  <li>• Fire fighting systems</li>
                  <li>• Emergency dewatering</li>
                  <li>• Disaster response</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-2">🛡️ 2 YEARS COMPREHENSIVE WARRANTY</h3>
                <p className="text-orange-100">All custom solutions come with full 2-year warranty coverage including parts, labor, and performance guarantee.</p>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Need a Custom Solution for Your Industry?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of experts with 9+ years experience can design and manufacture pumps specifically tailored to your industry requirements and operational needs, all backed by our 2-year warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Request Consultation
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Applications;