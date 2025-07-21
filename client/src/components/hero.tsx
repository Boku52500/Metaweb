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
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 via-blue-900 to-cyan-900">
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-600/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>
        
        {/* Enhanced Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-float-delayed opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-float-slow opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl animate-float-reverse opacity-60"></div>
        
        {/* Particle Effect Overlay */}
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 bg-white/20 rounded-full top-1/4 left-1/4 animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-cyan-300/40 rounded-full top-1/3 right-1/3 animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-3 h-3 bg-purple-300/30 rounded-full bottom-1/3 left-1/2 animate-ping" style={{ animationDelay: '4s' }}></div>
          <div className="absolute w-1 h-1 bg-yellow-300/50 rounded-full top-1/2 right-1/4 animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-2 h-2 bg-pink-300/40 rounded-full bottom-1/4 right-1/6 animate-ping" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          <div className={`text-white transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="mb-12">
              

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 font-georgian leading-tight tracking-tight">
                <span className="inline-block animate-slide-up transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
                  საიტის დამზადება
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl mb-8 text-white/95 font-georgian animate-slide-up font-light" style={{ animationDelay: '0.7s' }}>
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  საუკეთესო ხარისხი ხელმისაწვდომ ფასად
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl mb-12 text-white/85 font-georgian leading-relaxed animate-slide-up" style={{ animationDelay: '0.9s' }}>
                ჩვენი გუნდი ეხმარება კომპანიებს იპოვონ თავიანთი ადგილი 
                <span className="text-cyan-300 font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"> ციფრულ სამყაროში</span>
                <br />
                <span className="text-xl text-white/70 block mt-4">
                  შექმენით თქვენი წარმატებული ონლაინ ბიზნესი დღესვე
                </span>
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1200 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 font-georgian group transform-gpu relative overflow-hidden border-2 border-yellow-400/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <span className="group-hover:animate-bounce inline-block mr-3 text-2xl">🚀</span>
                  <span className="font-extrabold text-shadow-lg">სწრაფი შეკვეთა</span>
                </span>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-3 border-yellow-400/80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 backdrop-blur-md text-yellow-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-orange-400/20 hover:border-yellow-300 transition-all duration-500 font-georgian group transform-gpu hover:scale-105 shadow-2xl hover:shadow-yellow-400/30"
              >
                <a href="tel:+995568694879" className="flex items-center justify-center">
                  <i className="fas fa-phone mr-4 group-hover:animate-pulse text-yellow-300 text-lg"></i>
                  <span className="font-extrabold text-yellow-100 text-shadow-md">568 69 48 79</span>
                </a>
              </Button>
            </div>

            {/* Enhanced Statistics */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1200 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden min-h-[120px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                  <div className="mb-2">
                    <Counter target={7} />
                  </div>
                  <div className="text-white/80 font-georgian text-sm font-medium leading-tight">წლიანი გამოცდილება</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden min-h-[120px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  <div className="mb-2">
                    <Counter target={150} />
                  </div>
                  <div className="text-white/80 font-georgian text-sm font-medium leading-tight">კმაყოფილი კლიენტი</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden min-h-[120px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  <div className="mb-2">
                    <Counter target={350} />
                  </div>
                  <div className="text-white/80 font-georgian text-sm font-medium leading-tight">წარმატებული პროექტი</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden min-h-[120px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                  <div className="mb-2">
                    <Counter target={15} />
                  </div>
                  <div className="text-white/80 font-georgian text-sm font-medium leading-tight">გუნდის წევრი</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative group h-[600px] flex items-center justify-center">
              {/* Background Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full max-w-2xl">
                {/* Digital Agency Team Photo */}
                <img
                  src="/digital-agency-farnham_1753099696324.jpg"
                  alt="Metaweb - საიტის დამზადება და ვებსაიტის დიზაინი"
                  className="relative w-full h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-700"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
                />
                
                {/* Animated Floating Elements */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl animate-float border border-purple-200/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800 font-georgian">რეალურ დროში</span>
                  </div>
                </div>
                
                <div className="absolute top-16 right-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-3 shadow-xl animate-float-delayed">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">⚡</span>
                    <span className="text-sm font-medium font-georgian">სწრაფი</span>
                  </div>
                </div>
                
                <div className="absolute bottom-20 left-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl p-3 shadow-xl animate-float-slow">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🎨</span>
                    <span className="text-sm font-medium font-georgian">თანამედროვე</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl animate-float-reverse border border-cyan-200/50">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🚀</span>
                    <span className="text-sm font-semibold text-gray-800 font-georgian">მაღალი ხარისხი</span>
                  </div>
                </div>
                
                {/* Code Snippets Floating Around */}
                <div className="absolute top-4 right-20 bg-gray-900/90 backdrop-blur-sm text-green-400 rounded-lg p-2 text-xs font-mono animate-float shadow-xl">
                  &lt;div className="team"&gt;
                </div>
                
                <div className="absolute bottom-4 left-20 bg-gray-900/90 backdrop-blur-sm text-blue-400 rounded-lg p-2 text-xs font-mono animate-float-delayed shadow-xl">
                  function collaborate() {'{'}
                </div>
                
                {/* Pulse Dots for Tech Feel */}
                <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
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