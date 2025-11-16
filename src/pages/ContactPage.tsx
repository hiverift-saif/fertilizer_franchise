import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been received. We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    // {
    //   icon: Phone,
    //   title: 'Phone Number',
    //   details: ['011-69320272', '+91 98765 43210'],
    //   action: 'tel:01169320272'
    // },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@fertilizeragency.in', 'support@fertilizeragency.in'],
      action: 'mailto:support@fertilizerfranchise.co.in'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['A-10, Sector 22, Noida', 'District Gautam Buddha Nagar (UP)', 'India – 201301'],
      action: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed', '24/7 Email Support'],
      action: null
    }
  ];

  const offices = [
    // {
    //   region: 'North India',
    //   address: 'A-10, Sector 22, Noida, Uttar Pradesh - 201301',
    //   phone: '011-69320272',
    //   email: '  support@fertilizerfranchise.co.in'
    // },
    {
      region: 'East India',
      address: 'Rajendra Nagar, Patna, Bihar - 800016',
      email: '  support@fertilizerfranchise.co.in'
    },
    {
      region: 'West India',
      address: 'C-Scheme, Jaipur, Rajasthan - 302001',
      email: 'support@fertilizerfranchise.co.in'
    },
    {
      region: 'South India',
      address: 'Jubilee Hills, Hyderabad, Telangana - 500033',
      email: '  support@fertilizerfranchise.co.in'
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum investment for dealership?',
      answer: 'You can start a dealership with an investment between ₹2-5 lakhs.'
    },
    {
      question: 'How long does the application process take?',
      answer: 'It takes 7-15 days from application to approval.'
    },
    {
      question: 'Is any special qualification required?',
      answer: 'Minimum 10th pass and interest in business is required.'
    },
    {
      question: 'Is training provided?',
      answer: 'Yes, we provide complete training and continuous support.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-white">Contact Us</h1>
            <p className="text-green-50">
              We are always ready to serve you. Contact us for any questions or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 space-y-4 text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-gray-800">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, dIndex) => (
                      <p key={dIndex} className="text-gray-600">
                        {info.action && dIndex === 0 ? (
                          <a href={info.action} className="hover:text-green-600 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="space-y-4 mb-8">
                <h2 className="text-green-800">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form and our team will get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
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

                <div className="grid md:grid-cols-2 gap-6">
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

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={formData.subject} onValueChange={(value: string) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dealership">Dealership Inquiry</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Quick Links */}
            <div className="space-y-6">
              {/* Google Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5461924424956!2d77.31512731508186!3d28.58460598243598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2022%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h3 className="text-gray-800 flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <span>Quick Contact</span>
                </h3>
                <p className="text-gray-600">
                  For immediate assistance, call us directly or send an email
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="tel:01169320272"
                    className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    {/* <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="text-gray-800">Call Now</div>
                      <div className="text-green-600">011-69320272</div>
                    </div> */}
                  </a>
                  <a
                    href="mailto:info@fertilizeragency.in"
                    className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="text-gray-800">Send Email</div>
                      <div className="text-green-600">support@fertilizerfranchise.co.in</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Our Regional Offices</h2>
            <p className="text-gray-600">
              We have presence across India for better service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 space-y-3 hover:shadow-lg transition-shadow">
                <h3 className="text-gray-800">{office.region}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center space-x-2">
              
                    <a href={`tel:${office.phone}`} className="hover:text-green-600">
                      {office.phone}
                    </a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-green-600" />
                    <a href={`mailto:${office.email}`} className="hover:text-green-600">
                      {office.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-green-800">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
