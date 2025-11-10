import { Sprout, TestTube, Truck, TrendingUp, FileText, Users, Phone, Briefcase, BookOpen, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function ServicesPage() {
  const mainServices = [
    {
      icon: Sprout,
      title: 'Fertilizer Dealership and Distributorship',
      description: 'Get reliable dealership opportunities across India. We help you obtain dealerships of all major fertilizer brands.',
      features: [
        'Dealership of all major brands',
        'Start business with low investment',
        'Attractive margins and commission',
        'Exclusive territory rights'
      ]
    },
    {
      icon: TestTube,
      title: 'Soil Health and Agricultural Consultation',
      description: 'Soil testing and crop advisory services by expert agricultural scientists.',
      features: [
        'Free soil testing',
        'Crop expert advice',
        'Fertilizer usage guidance',
        'Farmer training programs'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics and Delivery Network',
      description: 'Strong logistics support for timely and safe delivery.',
      features: [
        'Delivery within 24-48 hours',
        'Door-to-door service',
        'GPS tracking facility',
        'Secure packaging'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing and Sales Support',
      description: 'Complete support in modern sales techniques and marketing.',
      features: [
        'Digital marketing support',
        'Social media promotion',
        'Branding materials',
        'Sales training program'
      ]
    },
    {
      icon: FileText,
      title: 'Government Registration and Documentation Assistance',
      description: 'Expert guidance in all legal processes and licensing.',
      features: [
        'License acquisition assistance',
        'GST registration',
        'All documentation',
        'Legal advice'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Opportunities to connect with other dealers and manufacturers'
    },
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Expert advice to grow your business'
    },
    {
      icon: BookOpen,
      title: 'Training Programs',
      description: 'Regular skill development training'
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Support team available at all times'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-white">Our Services</h1>
            <p className="text-green-50">
              Comprehensive and reliable services to grow your business
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Main Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to meeting all your business needs
            </p>
          </div>

          <div className="space-y-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg flex-shrink-0">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-gray-800">{service.title}</h3>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start space-x-2 text-gray-600">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Much more for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">How It Works?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              4 simple steps to start a dealership
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply', desc: 'Submit application online or by phone' },
              { step: '2', title: 'Submit Documents', desc: 'Complete required documents and KYC' },
              { step: '3', title: 'Get Approval', desc: 'Our team will review your application' },
              { step: '4', title: 'Start Business', desc: 'Begin with training and support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span>{item.step}</span>
                </div>
                <h3 className="text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-white">Are You Ready?</h2>
          <p className="text-green-50 max-w-2xl mx-auto">
            Take advantage of our services today and grow your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dealership">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Apply for Dealership
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
