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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 border border-cyan-400/30 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-40 right-32 w-8 h-8 border border-purple-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-40 w-6 h-6 bg-blue-500/10 border border-blue-400/30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/3 w-2 h-16 bg-gradient-to-b from-cyan-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-20 w-12 h-2 bg-gradient-to-r from-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating Digital Elements */}
        <div className="absolute top-32 right-1/4 animate-float-down opacity-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1"/>
            <rect x="7" y="7" width="4" height="4" fill="currentColor"/>
            <rect x="13" y="7" width="4" height="4" fill="currentColor"/>
            <rect x="7" y="13" width="10" height="4" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute top-80 left-1/4 animate-float-down opacity-15" style={{ animationDelay: '3s' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
            <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        
        <div className="absolute top-96 right-1/3 animate-float-down opacity-25" style={{ animationDelay: '1.5s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/>
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
            <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex items-center justify-center min-h-[85vh]">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {/* Futuristic Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-400/20 rounded-full px-8 py-4 mb-12 animate-slide-up shadow-2xl" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mr-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-cyan-400 rounded-full ml-1 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-1 h-1 bg-cyan-400 rounded-full ml-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <span className="text-lg font-georgian text-white/90 font-medium">მომავლის ტექნოლოგიები დღესვე</span>
            </div>

            <h1 className="text-8xl lg:text-9xl xl:text-[12rem] font-bold mb-8 font-georgian leading-[0.8] tracking-tight">
              <span className="inline-block animate-slide-up transform hover:scale-105 transition-transform duration-300 text-white" style={{ animationDelay: '0.3s' }}>
                საიტის
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-slide-up transform hover:scale-105 transition-transform duration-300 bg-[length:200%_200%] animate-gradient-x" style={{ animationDelay: '0.5s' }}>
                დამზადება
              </span>
            </h1>
            
            <p className="text-3xl lg:text-4xl mb-16 text-white/80 font-georgian leading-relaxed animate-slide-up max-w-4xl mx-auto" style={{ animationDelay: '0.7s' }}>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                მომავლის ტექნოლოგიებით აღჭურვილი ვებსაიტები
              </span>
              <br />
              <span className="text-2xl text-white/60 block mt-6">
                ინოვაციური დიზაინი • AI ინტეგრაცია • მაქსიმალური ეფექტურობა
              </span>
            </p>

            {/* Futuristic CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-8 justify-center mb-24 transition-all duration-1200 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <Button
                onClick={scrollToContact}
                className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 font-georgian group transform-gpu overflow-hidden border border-cyan-400/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -top-1 -left-1 w-full h-full border-2 border-cyan-400/20 rounded-2xl animate-pulse"></span>
                <span className="relative flex items-center">
                  <svg className="w-6 h-6 mr-3 group-hover:animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  დაიწყე პროექტი
                </span>
              </Button>
              <Button
                variant="outline"
                asChild
                className="relative border-2 border-purple-400/40 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-purple-500/10 hover:border-purple-400/80 transition-all duration-500 backdrop-blur-xl font-georgian group transform-gpu hover:scale-105 shadow-lg"
              >
                <a href="tel:+995568694879" className="flex items-center">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
                  <svg className="w-6 h-6 mr-4 group-hover:animate-pulse text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="relative">568 69 48 79</span>
                </a>
              </Button>
            </div>

            {/* Minimal Statistics */}
            <div className={`flex justify-center gap-16 transition-all duration-1200 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="text-center group">
                <div className="text-5xl font-bold text-white mb-2 font-georgian">
                  <Counter target={150} />
                  <span className="text-cyan-400">+</span>
                </div>
                <div className="text-white/60 font-georgian text-lg">პროექტი</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-white mb-2 font-georgian">
                  <Counter target={7} />
                  <span className="text-purple-400">+</span>
                </div>
                <div className="text-white/60 font-georgian text-lg">წელი</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-white mb-2 font-georgian">
                  <Counter target={100} />
                  <span className="text-blue-400">%</span>
                </div>
                <div className="text-white/60 font-georgian text-lg">კმაყოფილება</div>
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