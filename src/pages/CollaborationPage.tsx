import { Users, Handshake, TrendingUp, Award, Target, Network, Building, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CollaborationPage() {
  const partnerTypes = [
    {
      icon: Building,
      title: 'Manufacturer Partners',
      description: 'Strategic partnerships with fertilizer manufacturing companies',
      benefits: [
        'Wide distribution network',
        'Better market reach',
        'Brand visibility',
        'Direct farmer connect'
      ]
    },
    {
      icon: Users,
      title: 'Distributor Network',
      description: 'Collaboration with local distributors and wholesalers',
      benefits: [
        'Exclusive territory',
        'Bulk order discounts',
        'Logistics support',
        'Technical training'
      ]
    },
    {
      icon: Sprout,
      title: 'Farmer Organizations',
      description: 'Partnership with farmer cooperatives and FPOs',
      benefits: [
        'Direct access',
        'Better prices',
        'Quality assurance',
        'Agricultural advice'
      ]
    },
    {
      icon: Network,
      title: 'Technology Partners',
      description: 'Collaboration with agri-tech and service providers',
      benefits: [
        'Digital solutions',
        'Data analytics',
        'Automation',
        'Innovation'
      ]
    }
  ];

  const collaborationModels = [
    {
      title: 'Distributorship Model',
      description: 'Become the sole distributor in a region',
      features: ['Exclusive rights', 'High margin', 'Brand support']
    },
    {
      title: 'Franchise Model',
      description: 'Do business under our brand',
      features: ['Training assistance', 'Marketing materials', 'Operational guide']
    },
    {
      title: 'Retail Partnership',
      description: 'Stock our products at your retail outlet',
      features: ['No investment', 'Commission based', 'Flexible']
    },
    {
      title: 'Bulk Buyer',
      description: 'Special discount on wholesale purchase',
      features: ['Lower price', 'Credit facility', 'Direct supply']
    }
  ];

  const successStories = [
    {
      name: 'Ramesh Kumar',
      location: 'Patna, Bihar',
      type: 'Distributor',
      story: 'Achieved ₹50 lakh turnover in 2 years. Now supplying to 3 districts.',
      growth: '300%'
    },
    {
      name: 'Farmer Cooperative Society',
      location: 'Meerut, Uttar Pradesh',
      type: 'FPO',
      story: 'Direct supply of quality fertilizers to 500+ farmers. 20% cost savings.',
      growth: '250%'
    },
    {
      name: 'Anil Sharma',
      location: 'Jaipur, Rajasthan',
      type: 'Retailer',
      story: 'Started business with low investment. Now operating 5 branches.',
      growth: '400%'
    }
  ];

  const stats = [
    { value: '500+', label: 'Active Partners', icon: Users },
    { value: '25+', label: 'States Covered', icon: Target },
    { value: '10,000+', label: 'Farmers Benefited', icon: Sprout },
    { value: '₹50 Cr+', label: 'Annual Turnover', icon: TrendingUp }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-white">Collaboration and Networking</h1>
            <p className="text-green-50">
              Grow Together, Move Forward. Equal opportunities for farmers, traders, and manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-2">
                  <Icon className="h-8 w-8 text-green-600 mx-auto" />
                  <div className="text-green-700">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Collaboration */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyNzY0NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business collaboration"
                className="w-full h-[400px] rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-green-800">The Power of Collaboration</h2>
              <p className="text-gray-700">
                We believe in the power of collaboration. Fertilizer Franchise connects farmers, distributors, and manufacturers to provide a shared growth platform.
              </p>
              <p className="text-gray-700">
                Our network model ensures that every partner gets fair benefits - better products for farmers, good margins for dealers, and wide reach for manufacturers.
              </p>
              <div className="flex items-center space-x-3">
                <Handshake className="h-12 w-12 text-green-600" />
                <p className="text-gray-700">Let's take the agriculture sector to new heights together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Types of Partnership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Suitable partnership models for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg flex-shrink-0">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-gray-800">{partner.title}</h3>
                      <p className="text-gray-600">{partner.description}</p>
                    </div>
                  </div>
                  <div className="pl-20">
                    <h4 className="text-gray-700 mb-2">Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-center space-x-2 text-gray-600">
                          <span className="text-green-600">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Collaboration Models</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a model that suits your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationModels.map((model, index) => (
              <div key={index} className="bg-white rounded-lg p-6 space-y-4 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-gray-800">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
                <div className="pt-2 border-t">
                  <ul className="space-y-2">
                    {model.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2 text-gray-600">
                        <span className="text-green-600">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stories of our partners who have achieved great success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-800">{story.name}</h3>
                    <p className="text-gray-600">{story.location}</p>
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full">
                    <span>{story.growth}</span>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-green-600 text-white rounded-full">
                  {story.type}
                </div>
                <p className="text-gray-700">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-white">Ready to Partner With Us?</h2>
          <p className="text-green-50 max-w-2xl mx-auto">
            Join our network and grow your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dealership">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
