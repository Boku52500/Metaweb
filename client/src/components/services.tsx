import { useEffect, useState } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("სერვისები");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "fas fa-code",
      title: "ვებ-გვერდის დამზადება",
      description: "ჩვენ ვქმნით თანამედროვე, ფუნქციურ და მომხმარებელზე ორიენტირებულ ვებ-გვერდებს, რომელიც მოერგება თქვენი ბიზნესის საჭიროებებს.",
      color: "from-purple-500 to-purple-700",
      emoji: "💻"
    },
    {
      icon: "fas fa-paint-brush",
      title: "ვებსაიტის დიზაინი",
      description: "უნიკალური და მომხიბვლელი დიზაინი, რომელიც ასახავს თქვენი ბრენდის იდენტობას და გხდით გამორჩეულს.",
      color: "from-blue-500 to-blue-700",
      emoji: "🎨"
    },
    {
      icon: "fas fa-search",
      title: "SEO ოპტიმიზაცია",
      description: "SEO მომსახურება, რომელიც უზრუნველყოფს თქვენი ვებ-გვერდის უკეთეს ხილვადობას საძიებო სისტემებში და ზრდის ორგანულ ტრაფიკს.",
      color: "from-green-500 to-green-700",
      emoji: "📈"
    },
    {
      icon: "fas fa-cogs",
      title: "ზედამხედველობა",
      description: "გთავაზობთ ვებ-გვერდის ზედამხედველობის სერვისს, რათა უზრუნველვყოთ მისი სტაბილური მუშაობა და უსაფრთხოება.",
      color: "from-orange-500 to-orange-700",
      emoji: "🔧"
    },
  ];

  return (
    <section id="სერვისები" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-georgian text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ჩვენი სერვისები
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-georgian mb-6 sm:mb-8">სრული სპექტრის ციფრული მომსახურება</p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl transition-all duration-500 overflow-hidden border border-white/20 hover:-translate-y-1 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Complete Border Highlight */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                   style={{
                     background: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) padding-box, linear-gradient(45deg, var(--tw-gradient-stops)) border-box`,
                     backgroundClip: 'padding-box, border-box'
                   }}>
              </div>
              
              <div className="relative p-6 sm:p-8 text-center h-full flex flex-col">
                {/* Icon - Fixed Height */}
                <div className="relative mb-4 sm:mb-6 h-24 sm:h-28 md:h-32 flex flex-col justify-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${service.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl transition-all duration-500 group-hover:scale-105`}>
                    <span className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-500">{service.emoji}</span>
                  </div>
                  {/* Subtle glow effect */}
                  <div className={`absolute -inset-3 bg-gradient-to-br ${service.color} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
                
                {/* Title - Fixed Height */}
                <div className="mb-4 sm:mb-6 h-12 sm:h-14 md:h-16 flex items-center justify-center">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white font-georgian transition-all duration-300 text-center leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description - Flexible Height */}
                <div className="flex-grow flex items-start justify-center">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-georgian group-hover:text-gray-200 transition-colors duration-300 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 font-georgian">მზად ხართ დასაწყებად?</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-georgian">მიიღეთ უფასო კონსულტაცია და იყავით კონკურენტებზე ერთი ნაბიჯით წინ</p>
            <a
              href="tel:+995557915146"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 font-georgian group"
            >
              <span className="group-hover:animate-pulse mr-2 sm:mr-3">📞</span>
              დარეკეთ ახლავე
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}