import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle, TrendingUp, Users, Award, Shield, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Get Fertilizer Franchise Dealership in India',
      subtitle: 'Join India\'s leading fertilizer distribution network and become a partner in agricultural development with farmers. We provide you with comprehensive training, marketing support, and a profitable business model.',
      badge: "India's Trusted Fertilizer Dealership Partner"
    },
    {
      title: 'Start Your Fertilizer Business Today',
      subtitle: 'Low investment, high returns. Get exclusive territory rights, complete training, and 24/7 support. Join 500+ successful dealers across 25+ states.',
      badge: "Trusted by 10,000+ Farmers"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const features = [
    {
      icon: Shield,
      title: 'Trusted Network',
      description: '500+ Active Dealers Across India'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Up to 3x Increase in Sales'
    },
    {
      icon: Users,
      title: 'Complete Support',
      description: '24/7 Customer Support & Guidance'
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'Highest Quality Fertilizer Products'
    }
  ];

  const stats = [
    { value: '500+', label: 'Active Dealers' },
    { value: '25+', label: 'States Covered' },
    { value: '10,000+', label: 'Satisfied Farmers' },
    { value: '50+', label: 'Fertilizer Brands' }
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content with Slider */}
            <div className="space-y-4 sm:space-y-6 relative">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-800 rounded-full text-sm sm:text-base">
                {heroSlides[currentSlide].badge}
              </div>
              
              <div className="min-h-[160px] sm:min-h-[180px] md:min-h-[200px]">
                <h1 className="text-green-800 mb-3 sm:mb-4 transition-opacity duration-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {heroSlides[currentSlide].title}
                </h1>
                
                <p className="text-gray-700 transition-opacity duration-500 text-sm sm:text-base">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>

              {/* <div className="flex items-center space-x-2 text-green-700 text-sm sm:text-base">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Helpline: 011-69320272</span>
              </div> */}

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link to="/dealership">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                    Apply for Dealership
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                </button>
                <div className="flex space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all ${
                        index === currentSlide ? 'w-6 sm:w-8 bg-green-600' : 'w-1.5 sm:w-2 bg-green-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Low Investment, High Returns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Government Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Timely Supply</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Complete Training</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-first lg:order-last">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1696371269777-88d1ce71642c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmZXJ0aWxpemVyJTIwZmllbGR8ZW58MXx8fHwxNzYyNzc0MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Farmer in field"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-green-200 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-28 h-28 sm:w-40 sm:h-40 bg-emerald-200 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-green-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join Fertilizer Franchise and benefit from reliable partnership and continuous support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707721690544-781fe6ede937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBpbmRpYXxlbnwxfHx8fDE3NjI3NzQyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Agriculture farming"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-green-800">Who We Are</h2>
              
              <p className="text-gray-700">
                Fertilizer Franchise is a trusted platform that makes fertilizer dealership and distributorship services accessible throughout India.
                We build a strong bridge between farmers, businesses, and suppliers to ensure high-quality agricultural products reach the right place at the right time.
              </p>

              <p className="text-gray-700">
                Our goal is to ensure that high-quality agricultural products reach farmers at the right time and at the right price.
                Along with this, we provide dealers with a profitable business model through which they can grow their business.
              </p>

              <p className="text-gray-700">
                Over the past 10 years, we have built a strong network of 500+ active dealers across 25+ states, serving 10,000+ farmers.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-800">Trustworthy</div>
                    <div className="text-gray-600">Reliable Service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-800">Transparent</div>
                    <div className="text-gray-600">Complete Transparency</div>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <Button className="bg-green-600 hover:bg-green-700">
                  Read More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Our Mission and Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Farmer's Prosperity, Nation's Progress
            </p>
          </div>

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
                <Award className="h-8 w-8" />
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-white">Start Your Dealership Today!</h2>
          <p className="text-green-50 max-w-2xl mx-auto">
            Become part of India's fastest-growing fertilizer network and grow your business while serving farmers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dealership">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
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