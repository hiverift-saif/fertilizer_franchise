import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full">
              India's Trusted Fertilizer Dealership Partner
            </div>
            
            <h1 className="text-green-800">
              भारत में उर्वरक फ्रेंचाइजी डीलरशिप प्राप्त करें
            </h1>
            
            <p className="text-gray-700">
              भारत के अग्रणी उर्वरक वितरक नेटवर्क से जुड़ें और किसानों के साथ कृषि विकास में भागीदार बनें।
            </p>
{/* 
            <div className="flex items-center space-x-2 text-green-700">
              <Phone className="h-5 w-5" />
              <span>Helpline: 011-69320272</span>
            </div> */}

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Apply for Dealership
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1696371269777-88d1ce71642c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmZXJ0aWxpemVyJTIwZmllbGR8ZW58MXx8fHwxNzYyNzc0MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Farmer in field"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
