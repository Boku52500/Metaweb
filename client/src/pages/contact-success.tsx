import { useEffect } from "react";
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag: (command: "config" | "event" | "js", targetId: string | Date, config?: Record<string, any>) => void;
  }
}

export default function ContactSuccess() {
  useEffect(() => {
    // Google Ads conversion tracking - Page load conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17383063044/zHt5CJewhvYaEIT88eBA',
        'value': 1.0,
        'currency': 'USD'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-white font-georgian mb-4">
              გმადლობთ დაინტერესებისთვის! 🎉
            </h1>
            <p className="text-xl text-gray-300 font-georgian mb-6">
              თქვენი შეტყობინება წარმატებით გაიგზავნა
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white font-georgian mb-4">
              რას ელოდოთ შემდეგ?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <p className="text-gray-300 font-georgian">
                  <strong className="text-white">5-10 წუთში</strong> - ჩვენი სპეციალისტი დაგიკავშირდებათ
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <p className="text-gray-300 font-georgian">
                  <strong className="text-white">უფასო კონსულტაცია</strong> - განვიხილავთ თქვენს მოთხოვნებს
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <p className="text-gray-300 font-georgian">
                  <strong className="text-white">24 საათში</strong> - მიიღებთ დეტალურ წინადადებას
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-gray-400 text-sm font-georgian mb-1">გადაუდებელი საკითხისთვის</p>
              <a 
                href="tel:+995557915146" 
                className="text-white font-bold font-georgian hover:text-blue-400 transition-colors"
              >
                557 91 51 46
              </a>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-gray-400 text-sm font-georgian mb-1">ელ-ფოსტით</p>
              <a 
                href="mailto:info@metaweb.ge" 
                className="text-white font-bold font-georgian hover:text-purple-400 transition-colors break-all"
              >
                info@metaweb.ge
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={() => window.history.back()} 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-georgian text-lg py-3"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              მთავარ გვერდზე დაბრუნება
            </Button>
            
            <p className="text-gray-400 text-sm font-georgian">
              საიტის დამზადება, ვებსაიტის დიზაინი და SEO ოპტიმიზაცია საქართველოში
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}