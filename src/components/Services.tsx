import { Sprout, TestTube, Truck, TrendingUp, FileText } from 'lucide-react';
import { Button } from './ui/button';

export function Services() {
  const services = [
    {
      icon: Sprout,
      title: 'उर्वरक डीलरशिप और डिस्ट्रीब्यूटरशिप',
      description: 'पूरे भारत में विश्वसनीय डीलरशिप अवसर'
    },
    {
      icon: TestTube,
      title: 'मिट्टी स्वास्थ्य और कृषि परामर्श',
      description: 'विशेषज्ञ सलाह और मिट्टी परीक्षण सेवाएं'
    },
    {
      icon: Truck,
      title: 'लॉजिस्टिक्स और डिलीवरी नेटवर्क',
      description: 'समय पर और सुरक्षित डिलीवरी'
    },
    {
      icon: TrendingUp,
      title: 'डिजिटल मार्केटिंग और सेल्स सपोर्ट',
      description: 'आधुनिक बिक्री तकनीक और समर्थन'
    },
    {
      icon: FileText,
      title: 'सरकारी रजिस्ट्रेशन एवं डॉक्यूमेंटेशन सहायता',
      description: 'सभी कानूनी प्रक्रियाओं में मदद'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-green-800">हमारी सेवाएं</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            हम आपके व्यवसाय को बढ़ाने के लिए व्यापक सेवाएं प्रदान करते हैं
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
