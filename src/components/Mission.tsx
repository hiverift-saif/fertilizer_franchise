import { Target, TrendingUp, Users, Award } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: Target,
      title: 'पारदर्शिता',
      description: 'हर लेनदेन में पूर्ण पारदर्शिता'
    },
    {
      icon: Users,
      title: 'सहयोग',
      description: 'मिलकर बढ़ने की सोच'
    },
    {
      icon: TrendingUp,
      title: 'विकास',
      description: 'निरंतर प्रगति और समृद्धि'
    },
    {
      icon: Award,
      title: 'गुणवत्ता',
      description: 'उच्चतम मानकों का पालन'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2>हमारा उद्देश्य – किसान की समृद्धि, देश की प्रगति</h2>
          
          <p className="max-w-3xl mx-auto text-green-50">
            हमारा लक्ष्य किसानों को सस्ती और उच्च गुणवत्ता वाली उर्वरक सेवाएं प्रदान करना है।
            हम पारदर्शिता, सहयोग और तकनीकी दक्षता के साथ एक टिकाऊ कृषि भविष्य की दिशा में काम करते हैं।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center space-y-3 hover:bg-white/20 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-white">{value.title}</h3>
                <p className="text-green-50">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
