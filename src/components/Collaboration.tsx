import { ImageWithFallback } from './figma/ImageWithFallback';

export function Collaboration() {
  return (
    <section id="collaboration" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyNzY0NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business collaboration"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-green-800">सहयोग और नेटवर्किंग</h2>
            
            <p className="text-gray-700">
              हम सहयोग की शक्ति में विश्वास करते हैं। Fertilizer Agency किसानों, वितरकों और निर्माताओं को जोड़कर एक साझा विकास प्लेटफ़ॉर्म प्रदान करता है।
              आइए साथ मिलकर कृषि क्षेत्र को नई ऊँचाइयों तक ले जाएँ।
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-green-700 mb-2">500+</div>
                <div className="text-gray-600">Active Dealers</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-green-700 mb-2">25+</div>
                <div className="text-gray-600">States Covered</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-green-700 mb-2">10000+</div>
                <div className="text-gray-600">Farmers Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
