import { Target, Eye, Heart, Users, Award, TrendingUp, Shield, Handshake } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Complete transparency and honesty in every transaction'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Growing together and moving forward'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Continuous progress and prosperity'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Adhering to highest standards at every level'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Dedicated to serving both farmers and dealers'
    },
    {
      icon: Heart,
      title: 'Social Responsibility',
      description: 'Serving the nation through agricultural development'
    }
  ];

  const milestones = [
    { year: '2015', achievement: 'Company established with 50 dealers' },
    { year: '2017', achievement: 'Expanded to 10 states, 200+ dealers' },
    { year: '2019', achievement: 'Digital platform launched, 5000+ farmers connected' },
    { year: '2021', achievement: 'Presence in 20+ states, 400+ dealers' },
    { year: '2023', achievement: 'Network in 25+ states, 500+ dealers' },
    { year: '2025', achievement: 'Serving 10,000+ farmers, Pan India expansion' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-white">About Us</h1>
            <p className="text-green-50">
              Fertilizer Franchise - India's leading fertilizer dealership network, revolutionizing the agriculture sector by connecting farmers and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-green-800">Who We Are?</h2>
              <p className="text-gray-700">
                Fertilizer Franchise is a trusted platform that makes fertilizer dealership and distributorship services accessible throughout India.
                We build a strong bridge between farmers, businesses, and suppliers.
              </p>
              <p className="text-gray-700">
                Our goal is to ensure that high-quality agricultural products reach farmers at the right time and at the right price.
                Along with this, we provide dealers with a profitable business model through which they can grow their business.
              </p>
              <p className="text-gray-700">
                Over the past 10 years, we have built a strong network of 500+ active dealers across 25+ states, serving 10,000+ farmers.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707721690544-781fe6ede937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBpbmRpYXxlbnwxfHx8fDE3NjI3NzQyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agriculture farming"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-green-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                Our goal is to provide farmers with affordable and high-quality fertilizer services.
                We work towards a sustainable agricultural future with transparency, cooperation, and technical efficiency.
                Delivering quality fertilizers to every farmer and making them prosperous is our main objective.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-green-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To establish a strong fertilizer distribution network in every corner of India that is beneficial for both farmers and dealers.
                We want quality fertilizers to be available in every village and every interested person to get a business opportunity.
                To become India's largest and most trusted fertilizer network by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles our business is built upon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A story of growth and success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg p-6 shadow-md">
                    <p className="text-gray-700">{milestone.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
