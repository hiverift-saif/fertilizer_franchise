import { useState } from 'react';
import { CheckCircle, IndianRupee, TrendingUp, Award, FileText, Users, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export function DealershipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    experience: '',
    investment: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Application submitted successfully! Our team will contact you soon.');
  };

  const benefits = [
    {
      icon: IndianRupee,
      title: 'High Profit Margin',
      description: 'Attractive margin of 15-25%, guaranteed regular income'
    },
    {
      icon: TrendingUp,
      title: 'Low Investment, High Returns',
      description: 'Start business with ₹2-5 lakhs, grow rapidly'
    },
    {
      icon: Award,
      title: 'Prestigious Brands',
      description: 'Dealership of all major fertilizer companies'
    },
    {
      icon: FileText,
      title: 'Complete Legal Assistance',
      description: 'Help with license and registration'
    },
    {
      icon: Users,
      title: 'Training and Support',
      description: 'Regular training and 24/7 assistance'
    },
    {
      icon: CheckCircle,
      title: 'Exclusive Territory',
      description: 'Special rights in your area'
    }
  ];

  const eligibility = [
    'Must be an Indian citizen',
    'Minimum educational qualification: 10th pass',
    'Investment capacity of ₹2-5 lakhs',
    'Suitable space for business (at least 300-500 sq ft)',
    'Interest in agriculture or business',
    'Knowledge of local market'
  ];

  const documents = [
    'Aadhaar Card',
    'PAN Card',
    'Educational Certificates',
    'Address Proof',
    'Bank Account Details',
    'Shop/Warehouse Documents',
    'GST Registration (if available)',
    'Passport Size Photos'
  ];

  const investmentDetails = [
    { category: 'investment', amount: '₹25000 -- 1 lakhs' },

  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Get Fertilizer Dealership</h1>
            <p className="text-green-50 text-sm sm:text-base">
              Become part of India's fastest growing fertilizer network. Start a profitable business with low investment.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm sm:text-base">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
       
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Dealership Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get these special benefits by joining us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-green-800">Investment Details</h2>
              <p className="text-gray-600">
                Required investment to start the business
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {investmentDetails.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-6 ${
                    item.highlighted
                      ? 'bg-green-600 text-white'
                      : 'border-b hover:bg-gray-50'
                  }`}
                >
                  <span className={item.highlighted ? '' : 'text-gray-700'}>{item.category}</span>
                  <span className={item.highlighted ? '' : 'text-gray-900'}>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <h2 className="text-green-800 mb-6">Eligibility Criteria</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h2 className="text-green-800 mb-6">Required Documents</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FileText className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Apply for Dealership</h2>
            <p className="text-gray-600">
              Fill in your details and our team will contact you soon
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="10 digit number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="Enter your city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
            <SelectContent>
  <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
  <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
  <SelectItem value="Assam">Assam</SelectItem>
  <SelectItem value="Bihar">Bihar</SelectItem>
  <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
  <SelectItem value="Goa">Goa</SelectItem>
  <SelectItem value="Gujarat">Gujarat</SelectItem>
  <SelectItem value="Haryana">Haryana</SelectItem>
  <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
  <SelectItem value="Jharkhand">Jharkhand</SelectItem>
  <SelectItem value="Karnataka">Karnataka</SelectItem>
  <SelectItem value="Kerala">Kerala</SelectItem>
  <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
  <SelectItem value="Manipur">Manipur</SelectItem>
  <SelectItem value="Meghalaya">Meghalaya</SelectItem>
  <SelectItem value="Mizoram">Mizoram</SelectItem>
  <SelectItem value="Nagaland">Nagaland</SelectItem>
  <SelectItem value="Odisha">Odisha</SelectItem>
  <SelectItem value="Punjab">Punjab</SelectItem>
  <SelectItem value="Rajasthan">Rajasthan</SelectItem>
  <SelectItem value="Sikkim">Sikkim</SelectItem>
  <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
  <SelectItem value="Telangana">Telangana</SelectItem>
  <SelectItem value="Tripura">Tripura</SelectItem>
  <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
  <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
  <SelectItem value="West Bengal">West Bengal</SelectItem>

  {/* Union Territories */}
  <SelectItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</SelectItem>
  <SelectItem value="Chandigarh">Chandigarh</SelectItem>
  <SelectItem value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
  <SelectItem value="Delhi">Delhi</SelectItem>
  <SelectItem value="Jammu and Kashmir">Jammu and Kashmir</SelectItem>
  <SelectItem value="Ladakh">Ladakh</SelectItem>
  <SelectItem value="Lakshadweep">Lakshadweep</SelectItem>
  <SelectItem value="Puducherry">Puducherry</SelectItem>
  <SelectItem value="Other">Other</SelectItem>
</SelectContent>

                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="experience">Business Experience</Label>
                <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No experience</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment">Investment Capacity</Label>
                <Select value={formData.investment} onValueChange={(value) => setFormData({ ...formData, investment: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-3">₹25000 to 1lakhs</SelectItem>
                    
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                placeholder="Any additional information or questions"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
              Submit Application
            </Button>

            {/* <p className="text-center text-gray-500">
              Or call us: <a href="tel:01169320272" className="text-green-600 hover:underline">011-69320272</a>
            </p> */}
          </form>
        </div>
      </section>
    </div>
  );
}