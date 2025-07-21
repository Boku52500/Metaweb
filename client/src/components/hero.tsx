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
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Advanced Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        {/* Animated Spiral Overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-conic from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-full animate-spin-slow opacity-60"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-conic from-blue-500/15 via-pink-500/15 to-cyan-500/15 rounded-full animate-spin-reverse opacity-40"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-conic from-purple-500/25 via-cyan-500/25 to-blue-500/25 rounded-full animate-spin-slow opacity-80"></div>
          </div>
        </div>
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating Energy Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-radial from-cyan-400/30 to-transparent rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-radial from-purple-400/40 to-transparent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-gradient-radial from-blue-400/50 to-transparent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <path d="M100,150 Q300,100 500,200 T900,180" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" className="animate-draw-line"/>
          <path d="M200,400 Q400,350 600,450 T800,420" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" className="animate-draw-line" style={{ animationDelay: '1s' }}/>
          <path d="M50,300 Q250,250 450,350 T850,320" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" className="animate-draw-line" style={{ animationDelay: '2s' }}/>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="flex items-center justify-center h-full">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-georgian leading-tight tracking-tight">
              <span className="inline-block animate-slide-up text-white" style={{ animationDelay: '0.2s' }}>
                საიტის დამზადება
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-slide-up bg-[length:200%_200%] animate-gradient-x" style={{ animationDelay: '0.4s' }}>
                მომავლის დიზაინით
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-white/70 font-georgian leading-relaxed animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
              ინოვაციური ვებსაიტები რომლებიც გამოირჩევა კონკურენტებისგან
              <br />
              <span className="text-lg text-cyan-300/80 block mt-3">
                AI ტექნოლოგიები • რესპონსიული დიზაინი • SEO ოპტიმიზაცია
              </span>
            </p>

            {/* Advanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button
                onClick={scrollToContact}
                className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-cyan-500/30 hover:scale-105 font-georgian group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <span className="relative flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  დაიწყე პროექტი
                </span>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-purple-400/60 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm font-georgian group"
              >
                <a href="tel:+995568694879" className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  568 69 48 79
                </a>
              </Button>
            </div>

            {/* Compact Statistics */}
            <div className={`flex justify-center gap-12 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 font-georgian">
                  <Counter target={150} />
                  <span className="text-cyan-400">+</span>
                </div>
                <div className="text-white/50 font-georgian text-sm">პროექტი</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 font-georgian">
                  <Counter target={7} />
                  <span className="text-purple-400">+</span>
                </div>
                <div className="text-white/50 font-georgian text-sm">წელი</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 font-georgian">
                  <Counter target={100} />
                  <span className="text-blue-400">%</span>
                </div>
                <div className="text-white/50 font-georgian text-sm">კმაყოფილება</div>
              </div>
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