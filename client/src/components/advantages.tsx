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
      title: "პროფესიონალიზმი",
      description: "7 წლიანი გამოცდილება ვებსაიტების დამზადებაში",
      emoji: "🎯",
      gradient: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/25"
    },
    {
      title: "პუნქტუალურობა", 
      description: "ყველა პროექტი ეწყობა დადგენილ ვადებში",
      emoji: "⚡",
      gradient: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/25"
    },
    {
      title: "კრეატიულობა",
      description: "უნიკალური და ინოვაციური დიზაინის გადაწყვეტილებები",
      emoji: "🎨",
      gradient: "from-purple-500 to-pink-600",
      shadow: "shadow-purple-500/25"
    },
    {
      title: "ინოვაციურობა",
      description: "უახლესი ტექნოლოგიები და ტრენდები",
      emoji: "🚀",
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/25"
    },
    {
      title: "სანდოობა",
      description: "150+ კმაყოფილი კლიენტი და გაგრძელებული თანამშრომლობა",
      emoji: "🛡️",
      gradient: "from-red-500 to-rose-600",
      shadow: "shadow-red-500/25"
    },
    {
      title: "ხარისხი",
      description: "მაღალი ხარისხის სტანდარტები ყველა პროექტში",
      emoji: "💎",
      gradient: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/25"
    },
  ];

  return (
    <section id="უპირატესობები" className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
          `
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-gray-600 border border-gray-200/50 backdrop-blur-sm">
              ჩვენი უპირატესობები
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold mb-8 font-georgian">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              რატომ ჩვენ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-georgian max-w-3xl mx-auto leading-relaxed">
            ისინი არიან ის ფაქტორები, რომლებიც განგვასხვავებენ და ქმნიან ჩვენს უნიკალურობას
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Glass Card */}
              <div className="relative p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2 overflow-hidden">
                
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="w-full h-full bg-white/70 backdrop-blur-xl rounded-3xl"></div>
                </div>

                {/* Premium Icon Container */}
                <div className="relative z-10 mb-8">
                  <div className="relative">
                    {/* Main Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg ${advantage.shadow} group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                      <span className="text-3xl filter drop-shadow-sm">{advantage.emoji}</span>
                    </div>
                    
                    {/* Animated Glow */}
                    <div className={`absolute -inset-3 bg-gradient-to-br ${advantage.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse`}></div>
                    
                    {/* Rotating Ring */}
                    <div className="absolute -inset-4 border-2 border-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 font-georgian group-hover:text-gray-800 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-georgian group-hover:text-gray-700 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>

                {/* Premium Hover Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Animated Bottom Bar */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${advantage.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-3xl`}></div>
              </div>

              {/* Card Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                <span className="text-sm font-bold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Decorative Elements */}
        <div className="absolute top-40 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}