import { useEffect, useState } from "react";

export default function Advantages() {
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

    const element = document.getElementById("უპირატესობები");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: "fas fa-award",
      title: "პროფესიონალიზმი",
      description: "7 წლიანი გამოცდილება ვებსაიტების დამზადებაში",
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      emoji: "🏆"
    },
    {
      icon: "fas fa-clock",
      title: "პუნქტუალურობა",
      description: "ყველა პროექტი ეწყობა დადგენილ ვადებში",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      emoji: "⏰"
    },
    {
      icon: "fas fa-lightbulb",
      title: "კრეატიულობა",
      description: "უნიკალური და ინოვაციური დიზაინის გადაწყვეტილებები",
      color: "from-cyan-500 to-cyan-700",
      bgColor: "bg-cyan-50",
      emoji: "💡"
    },
    {
      icon: "fas fa-rocket",
      title: "ინოვაციურობა",
      description: "უახლესი ტექნოლოგიები და ტრენდები",
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      emoji: "🚀"
    },
    {
      icon: "fas fa-shield-alt",
      title: "სანდოობა",
      description: "150+ კმაყოფილი კლიენტი და გაგრძელებული თანამშრომლობა",
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50",
      emoji: "🛡️"
    },
    {
      icon: "fas fa-star",
      title: "ხარისხი",
      description: "მაღალი ხარისხის სტანდარტები ყველა პროექტში",
      color: "from-pink-500 to-pink-700",
      bgColor: "bg-pink-50",
      emoji: "⭐"
    },
  ];

  return (
    <section id="უპირატესობები" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-white/30 to-gray-100/50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 font-georgian">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              რატომ ჩვენ?
            </span>
          </h2>
          <h3 className="text-2xl lg:text-3xl text-gray-600 font-georgian mb-8">ჩვენი უპირატესობები</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${advantage.bgColor} border border-gray-100 transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-3xl">{advantage.emoji}</span>
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${advantage.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-gray-800 font-georgian group-hover:text-gray-900 transition-colors duration-300">
                  {advantage.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed font-georgian group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${advantage.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-float-delayed"></div>
      </div>
    </section>
  );
}