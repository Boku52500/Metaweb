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
      description: "ჩვენ ვქმნით თანამედროვე, ფუნქციურ და მომხმარებელზე ორიენტირებულ ვებ-გვერდებს, რომლებიც მოერგება თქვენს ბიზნესის საჭიროებებს.",
      color: "from-purple-500 to-purple-700",
      emoji: "💻"
    },
    {
      icon: "fas fa-paint-brush",
      title: "ვებსაიტის დიზაინი",
      description: "უნიკალური და მომხიბვლელი დიზაინი, რომელიც ასახავს თქვენი ბრენდის იდენტობას და მაქსიმალურად აღიქმება მომხმარებლების მიერ.",
      color: "from-blue-500 to-blue-700",
      emoji: "🎨"
    },
    {
      icon: "fas fa-search",
      title: "SEO ოპტიმიზაცია",
      description: "SEO მომსახურება, რომელიც უზრუნველყოფს თქვენი ვებ-გვერდის უკეთეს ხილვადობას საძიებო სისტემებში და ზრდის ორგანული ტრაფიკის მოცულობას.",
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

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 font-georgian text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ჩვენი სერვისები
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 font-georgian mb-8">სრული სპექტრის ციფრული გადაწყვეტილებები</p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:-translate-y-2 hover:bg-white/15 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Sophisticated Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Animated border outline */}
                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${service.color} rounded-3xl`} 
                     style={{ 
                       background: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) padding-box, linear-gradient(45deg, var(--tw-gradient-stops)) border-box`,
                       backgroundClip: 'padding-box, border-box'
                     }}>
                </div>
              </div>

              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-500">{service.emoji}</span>
                  </div>
                  {/* Enhanced glow effect */}
                  <div className={`absolute -inset-3 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold mb-6 text-white font-georgian group-hover:scale-105 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed font-georgian group-hover:text-gray-100 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Enhanced bottom accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4 font-georgian">მზად ხართ დასაწყებად?</h3>
            <p className="text-gray-300 mb-6 font-georgian">მიიღეთ უფასო კონსულტაცია და იყავით ნაბიჯი წინ კონკურენტებთან შედარებით</p>
            <a
              href="tel:+995568694879"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 font-georgian group"
            >
              <span className="group-hover:animate-pulse mr-3">📞</span>
              დარეკეთ ახლავე
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}