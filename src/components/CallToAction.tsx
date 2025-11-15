import { Phone, MapPin, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CallToAction() {
  return (
    <section id="dealership" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 md:p-12 text-white space-y-6">
              <h2 className="text-white">आज ही अपनी डीलरशिप शुरू करें!</h2>
              
              <p className="text-green-50">
                भारत के सबसे तेज़ी से बढ़ते उर्वरक नेटवर्क का हिस्सा बनें और किसानों की सेवा करते हुए अपना व्यवसाय बढ़ाएँ।
              </p>

              <div className="space-y-4" id="contact">
                {/* <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div>कॉल करें:</div>
                    <a href="tel:01169320272" className="text-white hover:underline">011-69320272</a>
                  </div>
                </div> */}

                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div>पता:</div>
                    <p className="text-green-50">
                      A-10, सेक्टर 22, नोएडा,<br />
                      जिला गौतम बुध नगर (उ.प्र.), भारत – 201301
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                <Rocket className="h-5 w-5 mr-2" />
                Apply Now
              </Button>
            </div>

            {/* Image */}
            <div className="hidden lg:block relative h-full min-h-[400px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707721690544-781fe6ede937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBpbmRpYXxlbnwxfHx8fDE3NjI3NzQyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agriculture farming"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
