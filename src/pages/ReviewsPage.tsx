import { Star, Quote, ThumbsUp, TrendingUp, Award } from 'lucide-react';
import { Button } from '../components/ui/button';

export function ReviewsPage() {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      location: 'Patna, Bihar',
      type: 'Dealer',
      rating: 5,
      date: 'January 2025',
      text: 'After joining Fertilizer Franchise, my sales tripled. Very reliable and supportive team. Timely supply and good margins.',
      image: '🧑‍🌾'
    },
    {
      name: 'Sandeep Singh',
      location: 'Karnal, Haryana',
      type: 'Distributor',
      rating: 5,
      date: 'December 2024',
      text: 'Very trustworthy company with timely supply. Farmers get quality fertilizers at right prices. Marketing support is excellent.',
      image: '👨‍💼'
    },
    {
      name: 'Pradeep Patel',
      location: 'Indore, Madhya Pradesh',
      type: 'Dealer',
      rating: 5,
      date: 'November 2024',
      text: 'Got complete help in all documentation and registration. Starting the business became very easy. Team is very supportive.',
      image: '🧑‍💻'
    },
    {
      name: 'Amit Sharma',
      location: 'Meerut, Uttar Pradesh',
      type: 'Dealer',
      rating: 5,
      date: 'October 2024',
      text: 'Made good profits in the first year itself. Training program was very useful. Now supplying to 3 villages.',
      image: '👨‍🌾'
    },
    {
      name: 'Suresh Yadav',
      location: 'Jaipur, Rajasthan',
      type: 'Distributor',
      rating: 5,
      date: 'September 2024',
      text: 'High quality products and excellent service. Farmers are very satisfied. Credit facility is also available which is very helpful.',
      image: '🧑‍🌾'
    },
    {
      name: 'Vinod Kumar',
      location: 'Ludhiana, Punjab',
      type: 'Dealer',
      rating: 5,
      date: 'August 2024',
      text: 'Started a good business with low investment. 24/7 customer support is excellent. Any problem gets resolved immediately.',
      image: '👨‍💼'
    },
    {
      name: 'Ramesh Chandra',
      location: 'Bareilly, Uttar Pradesh',
      type: 'Farmer',
      rating: 5,
      date: 'July 2024',
      text: 'Get quality fertilizers at right prices. Dealer is very helpful. Crop yield has also increased.',
      image: '🧑‍🌾'
    },
    {
      name: 'Manoj Tiwari',
      location: 'Raipur, Chhattisgarh',
      type: 'Dealer',
      rating: 5,
      date: 'June 2024',
      text: 'Digital platform is very useful. Order tracking and inventory management became easy. Technology support is excellent.',
      image: '👨‍💻'
    },
    {
      name: 'Farmer Cooperative Society',
      location: 'Ghaziabad, Uttar Pradesh',
      type: 'FPO',
      rating: 5,
      date: 'May 2024',
      text: 'Direct supply to 500+ farmers. Saved 20% in costs. All farmers in our society are very satisfied.',
      image: '👥'
    },
    {
      name: 'Anil Verma',
      location: 'Varanasi, Uttar Pradesh',
      type: 'Dealer',
      rating: 5,
      date: 'April 2024',
      text: 'Very transparent business model. No hidden charges. Everything as explained. Very professional team.',
      image: '🧑‍💼'
    },
    {
      name: 'Deepak Rana',
      location: 'Dehradun, Uttarakhand',
      type: 'Distributor',
      rating: 5,
      date: 'March 2024',
      text: 'Working in hilly areas is difficult but this company gave full support. Logistics support is very good.',
      image: '👨‍🌾'
    },
    {
      name: 'Mukesh Jain',
      location: 'Nagpur, Maharashtra',
      type: 'Dealer',
      rating: 5,
      date: 'February 2024',
      text: 'Every farmer knows our shop due to Fertilizer Franchise brand. Business grew very fast. Team is very professional.',
      image: '🧑‍💻'
    }
  ];

  const stats = [
    { value: '4.9/5', label: 'Average Rating', icon: Star },
    { value: '500+', label: 'Happy Dealers', icon: ThumbsUp },
    { value: '10,000+', label: 'Satisfied Farmers', icon: TrendingUp },
    { value: '98%', label: 'Satisfaction Rate', icon: Award }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-white">What Our Customers Say</h1>
            <p className="text-green-50">
              Trust and experience of thousands of satisfied dealers and farmers
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

      {/* Reviews Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-green-600 opacity-20" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 italic">"{review.text}"</p>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{review.image}</div>
                    <div>
                      <div className="text-gray-800">{review.name}</div>
                      <div className="text-gray-500">{review.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {review.type}
                    </div>
                    <div className="text-gray-500 mt-1">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-green-800">Why Our Partners Choose Us</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-gray-800">Quality Products</h3>
              <p className="text-gray-600">High quality fertilizers from top brands</p>
            </div>
            <div className="bg-white rounded-lg p-6 space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
                <ThumbsUp className="h-6 w-6" />
              </div>
              <h3 className="text-gray-800">Reliable Service</h3>
              <p className="text-gray-600">Timely delivery and support</p>
            </div>
            <div className="bg-white rounded-lg p-6 space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-gray-800">Business Growth</h3>
              <p className="text-gray-600">Proven track record of success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-white">Want to Share Your Success Story?</h2>
          <p className="text-green-50 max-w-2xl mx-auto">
            Join our network and become part of our success
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              Apply for Dealership
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
