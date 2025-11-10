import { Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

export function Reviews() {
  const reviews = [
    {
      name: 'राजेश कुमार',
      location: 'बिहार',
      rating: 5,
      text: 'Fertilizer Agency से जुड़ने के बाद मेरी बिक्री तीन गुना बढ़ गई। बहुत ही भरोसेमंद और सहयोगी टीम है।'
    },
    {
      name: 'संदीप सिंह',
      location: 'हरियाणा',
      rating: 5,
      text: 'बहुत भरोसेमंद कंपनी और समय पर सप्लाई। किसानों को सही दाम पर अच्छी गुणवत्ता वाला उर्वरक मिलता है।'
    },
    {
      name: 'प्रदीप पटेल',
      location: 'मध्य प्रदेश',
      rating: 5,
      text: 'सभी डॉक्यूमेंटेशन और रजिस्ट्रेशन में पूरी मदद मिली। व्यवसाय शुरू करना बहुत आसान हो गया।'
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-green-800">हमारे ग्राहक क्या कहते हैं</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            हजारों संतुष्ट डीलरों और किसानों का विश्वास
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-100" />
                <p className="text-gray-700 relative z-10 pl-6">{review.text}</p>
              </div>

              <div className="pt-4 border-t">
                <div className="text-gray-800">{review.name}</div>
                <div className="text-gray-500">{review.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
