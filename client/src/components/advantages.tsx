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
      number: "01"
    },
    {
      title: "პუნქტუალურობა", 
      description: "ყველა პროექტი ეწყობა დადგენილ ვადებში",
      number: "02"
    },
    {
      title: "კრეატიულობა",
      description: "უნიკალური და ინოვაციური დიზაინის გადაწყვეტილებები",
      number: "03"
    },
    {
      title: "ინოვაციურობა",
      description: "უახლესი ტექნოლოგიები და ტრენდები",
      number: "04"
    },
    {
      title: "სანდოობა",
      description: "150+ კმაყოფილი კლიენტი და გაგრძელებული თანამშრომლობა",
      number: "05"
    },
    {
      title: "ხარისხი",
      description: "მაღალი ხარისხის სტანდარტები ყველა პროექტში",
      number: "06"
    },
  ];

  return (
    <section id="უპირატესობები" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
             backgroundSize: '24px 24px'
           }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 font-georgian text-gray-900">
            რატომ ჩვენ?
          </h2>
          <p className="text-lg text-gray-600 font-georgian max-w-2xl mx-auto">
            ჩვენი უპირატესობები, რაც გვაყოფს კონკურენტებისგან
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-700 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(48px)'
              }}
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-gray-50 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Number */}
              <div className="relative mb-6">
                <span className="text-6xl font-light text-gray-200 group-hover:text-gray-300 transition-colors duration-500">
                  {advantage.number}
                </span>
                <div className="absolute top-0 left-0 w-12 h-1 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 text-gray-900 font-georgian group-hover:text-black transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-georgian group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-100"></div>
            </div>
          ))}
        </div>

        {/* Minimal decorative elements */}
        <div className="absolute top-32 right-16 w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}