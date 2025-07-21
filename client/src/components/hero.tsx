import { Button } from "@/components/ui/button";
import Counter from "./counter";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("კონტაქტი");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Geometric Elements */}
      <div className="absolute top-20 right-20 opacity-30">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 10L110 35V85L60 110L10 85V35L60 10Z" stroke="#22C55E" strokeWidth="2" fill="rgba(34, 197, 94, 0.05)"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-20 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="#22C55E" strokeWidth="2" fill="rgba(34, 197, 94, 0.03)"/>
          <circle cx="40" cy="40" r="20" stroke="#22C55E" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Large Title */}
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 text-white font-georgian leading-none tracking-tight">
              <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                რატომ აირჩიოთ ჩვენ?
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-16 text-gray-400 font-georgian leading-relaxed max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
              ჩვენ ვქმნით საიტებს, რომლებიც არა მხოლოდ ლამაზია, არამედ ასევე ფუნქციონალური და ეფექტური. 
              <br />
              <span className="text-green-500">
                თქვენი ბიზნესის წარმატება ჩვენი პრიორიტეტია.
              </span>
            </p>

            {/* Five Key Points Grid */}
            <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="text-center group">
                <div className="text-8xl font-bold text-green-500/20 mb-4 font-mono group-hover:text-green-500/40 transition-colors duration-300">01</div>
                <p className="text-gray-400 font-georgian leading-relaxed text-sm lg:text-base">
                  ვასრულებთ პროექტებს დროულად და ბიუჯეტის ფარგლებში, უზრუნველყოფთ 100% კმაყოფილებას.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-8xl font-bold text-green-500/20 mb-4 font-mono group-hover:text-green-500/40 transition-colors duration-300">02</div>
                <p className="text-gray-400 font-georgian leading-relaxed text-sm lg:text-base">
                  ვქმნით განსაკუთრებული ხარისხის ვებსაიტებს, რომლებიც არა მხოლოდ ხელმისაწვდომია, არამედ ღირებულიცაა.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-8xl font-bold text-green-500/20 mb-4 font-mono group-hover:text-green-500/40 transition-colors duration-300">03</div>
                <p className="text-gray-400 font-georgian leading-relaxed text-sm lg:text-base">
                  ჩვენი დიზაინი თანამედროვე და მინიმალისტურია, რაც აუმჯობესებს მომხმარებელთა გამოცდილებას.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-8xl font-bold text-green-500/20 mb-4 font-mono group-hover:text-green-500/40 transition-colors duration-300">04</div>
                <p className="text-gray-400 font-georgian leading-relaxed text-sm lg:text-base">
                  ჩვენი ვებსაიტები უნიკალური და მორგებულია თქვენი ბიზნესის ინდივიდუალური ხედვისთვის.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-8xl font-bold text-green-500/20 mb-4 font-mono group-hover:text-green-500/40 transition-colors duration-300">05</div>
                <p className="text-gray-400 font-georgian leading-relaxed text-sm lg:text-base">
                  სხვა ფრილანსერებისგან განსხვავებით, ჩვენ არასოდეს ვაკეთებთ კომპრომისს ხარისხთან დაკავშირებით!
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button
                onClick={scrollToContact}
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-georgian"
              >
                დაიწყე პროექტი
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-georgian"
              >
                <a href="tel:+995568694879">
                  568 69 48 79
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}