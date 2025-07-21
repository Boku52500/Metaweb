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
      description: "10+ წლიანი გამოცდილება ვებსაიტების დამზადებაში",
      emoji: "🎯",
      gradient: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/25"
    },
    {
      title: "პუნქტუალურობა", 
      description: "ყველა პროექტი ბარდება დადგენილ ვადებში",
      emoji: "⚡",
      gradient: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/25"
    },
    {
      title: "კრეატიულობა",
      description: "უნიკალური და ინოვაციური დიზაინი",
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
      description: "500+ კმაყოფილი კლიენტი და გაგრძელებული თანამშრომლობა",
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
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              რატომ ჩვენ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-georgian max-w-3xl mx-auto leading-relaxed">
            ფაქტორები, რომლებიც განგვასხვავებენ და გვხდიან უნიკალურებს
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
              <div className="relative p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
                
                {/* Unified Border Animation */}
                <div className="absolute inset-0 rounded-3xl">
                  {/* Complete Border Outline */}
                  <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${advantage.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`} 
                       style={{ 
                         background: `linear-gradient(white, white) padding-box, linear-gradient(45deg, var(--tw-gradient-stops)) border-box`,
                         backgroundClip: 'padding-box, border-box'
                       }}>
                  </div>
                  
                  {/* Animated Border Lines - Synchronized */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Top Border Line */}
                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${advantage.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    {/* Right Border Line */}
                    <div className={`absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b ${advantage.gradient} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-100`}></div>
                    {/* Bottom Border Line */}
                    <div className={`absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l ${advantage.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right delay-200`}></div>
                    {/* Left Border Line */}
                    <div className={`absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t ${advantage.gradient} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-300`}></div>
                  </div>
                </div>

                {/* Subtle Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-700 rounded-3xl`}></div>
                
                {/* Premium Icon Container */}
                <div className="relative z-10 mb-8 flex-shrink-0">
                  <div className="relative">
                    {/* Main Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500">{advantage.emoji}</span>
                    </div>
                    
                    {/* Fixed Glow on Hover */}
                    <div className={`absolute -inset-3 bg-gradient-to-br ${advantage.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Pulse Ring */}
                    <div className={`absolute -inset-2 border-2 border-transparent bg-gradient-to-r ${advantage.gradient} rounded-2xl opacity-0 group-hover:opacity-50 group-hover:scale-125 transition-all duration-700`} style={{ WebkitMaskImage: 'linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 font-georgian transition-all duration-500 group-hover:text-gray-800 group-hover:scale-105">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-georgian transition-colors duration-300 flex-grow group-hover:text-gray-700">
                    {advantage.description}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${advantage.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-400 origin-center rounded-b-3xl`}></div>
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
       
        
        
      </div>
    </section>
  );
}