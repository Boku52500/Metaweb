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
              className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden border border-white/20 transform hover:scale-105 hover:bg-white/20 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="text-4xl">{service.emoji}</span>
                  </div>
                  <div className={`absolute -inset-3 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold mb-6 text-white font-georgian group-hover:text-yellow-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed font-georgian group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
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