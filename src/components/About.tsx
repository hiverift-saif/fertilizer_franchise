import { Button } from './ui/button';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-green-800">हम कौन हैं?</h2>
          
          <p className="text-gray-700">
            Fertilizer Agency एक विश्वसनीय प्लेटफ़ॉर्म है जो उर्वरक डीलरशिप और डिस्ट्रीब्यूटरशिप सेवाओं को पूरे भारत में सुलभ बनाता है।
            हम किसानों, व्यवसायों और आपूर्तिकर्ताओं के बीच एक मजबूत पुल का निर्माण करते हैं ताकि उच्च गुणवत्ता वाले कृषि उत्पाद सही समय पर उपलब्ध हों।
          </p>

          <Button className="bg-green-600 hover:bg-green-700">
            Read More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
