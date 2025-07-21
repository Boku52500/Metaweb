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

      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 relative z-10">
        <div className="flex flex-col items-center text-center min-h-[70vh] sm:min-h-[80vh]">
          <div className={`text-white transition-all duration-1200 w-full max-w-4xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="mb-8 sm:mb-12">
              

              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 font-georgian leading-tight tracking-tight">
                  <span className="block animate-slide-up text-white font-black tracking-wider relative" style={{ animationDelay: '0.3s', textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)', fontFamily: 'ALK Sanet, serif' }}>
                    საიტის
                  </span>
                  <span className="block animate-slide-up text-white font-black tracking-wider relative" style={{ animationDelay: '0.5s', textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)', fontFamily: 'ALK Sanet, serif' }}>
                    დამზადება
                  </span>
                </h1>
                
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-white/95 font-georgian animate-slide-up font-light" style={{ animationDelay: '0.7s' }}>
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    საუკეთესო ხარისხი ხელმისაწვდომ ფასად
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/85 font-georgian leading-relaxed animate-slide-up" style={{ animationDelay: '0.9s' }}>
                  ჩვენი გუნდი ეხმარება კომპანიებს იპოვონ თავიანთი ადგილი 
                  <span className="text-cyan-300 font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"> ციფრულ სამყაროში</span>
                </p>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-yellow-400 font-bold animate-slide-up font-georgian animate-pulse" style={{ animationDelay: '1.1s' }}>
                  გახადეთ თქვენი ბიზნესი წარმატებული დღესვე
                </p>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 transition-all duration-1200 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              {/* Primary CTA Button */}
              <Button
                onClick={scrollToContact}
                className="relative group px-8 py-4 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-violet-500/40 transition-all duration-700 transform hover:scale-[1.02] font-georgian border border-violet-400/30 w-full sm:w-64"
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-1000"></div>
                
                {/* Content */}
                <div className="relative flex items-center justify-center space-x-3">
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <span className="absolute text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:drop-shadow-lg">🚀</span>
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-yellow-400/30 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-50 transition-all duration-700 animate-ping"></div>
                  </div>
                  <span className="relative">
                    სწრაფი შეკვეთა
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></div>
                  </span>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 -z-10"></div>
              </Button>

              {/* Phone Button */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  asChild
                  className="relative group px-8 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 transform hover:scale-[1.02] font-georgian border-2 border-cyan-400/40 hover:border-cyan-300/60 w-full sm:w-64"
                >
                  <a href="tel:+99555791514615" className="relative flex items-center justify-center space-x-4">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Pulse rings around phone icon */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping opacity-0 group-hover:opacity-75"></div>
                      <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-0 group-hover:opacity-50" style={{ animationDelay: '0.2s' }}></div>
                      <i className="fas fa-phone relative text-cyan-400 text-xl group-hover:text-cyan-300 transition-colors duration-300 group-hover:rotate-12 transform transition-transform"></i>
                    </div>
                    
                    <span className="relative text-cyan-100 group-hover:text-white transition-colors duration-300">
                     557 91 51 46
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
                    </span>
                    
                    {/* Side glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 -z-10"></div>
                  </a>
                </Button>
              </div>
            </div>

          </div>

          {/* Team Picture Section */}
          <div className={`relative transition-all duration-1000 delay-500 mt-12 sm:mt-16 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative group h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl">
                {/* Digital Agency Team Photo */}
                <img
                  src="/digital-agency-farnham_1753099696324.jpg"
                  alt="Metaweb - საიტის დამზადება და ვებსაიტის დიზაინი"
                  className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-700"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
                />
                
                {/* Animated Floating Elements */}
                <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl animate-float border border-purple-200/50">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 font-georgian">რეალურ დროში</span>
                  </div>
                </div>
                
                <div className="absolute top-8 sm:top-12 lg:top-16 right-4 sm:right-6 lg:right-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl animate-float-delayed">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-base sm:text-xl">✨</span>
                    <span className="font-bold text-xs sm:text-sm font-georgian">ხარისხი</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-cyan-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl animate-float border border-cyan-300/30">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-cyan-900 font-bold text-xs sm:text-sm">99%</span>
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm font-georgian">კმაყოფილება</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 right-4 sm:right-6 lg:right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl animate-float-reverse">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-base sm:text-xl">🚀</span>
                    <span className="font-bold text-xs sm:text-sm font-georgian">სრული სერვისი</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Statistics */}
          <div className={`w-full max-w-6xl mx-auto mt-12 sm:mt-16 transition-all duration-1200 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden min-h-[100px] sm:min-h-[120px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                  <div className="mb-1 sm:mb-2">
                    <Counter target={10} />
                  </div>
                  <div className="text-white/80 font-georgian text-xs sm:text-sm font-medium leading-tight">წლიანი გამოცდილება</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden min-h-[100px] sm:min-h-[120px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  <div className="mb-1 sm:mb-2">
                    <Counter target={500} />
                  </div>
                  <div className="text-white/80 font-georgian text-xs sm:text-sm font-medium leading-tight">კმაყოფილი კლიენტი</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden min-h-[100px] sm:min-h-[120px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  <div className="mb-1 sm:mb-2">
                    <Counter target={850} />
                  </div>
                  <div className="text-white/80 font-georgian text-xs sm:text-sm font-medium leading-tight">წარმატებული პროექტი</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden min-h-[100px] sm:min-h-[120px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                  <div className="mb-1 sm:mb-2">
                    <Counter target={15} />
                  </div>
                  <div className="text-white/80 font-georgian text-xs sm:text-sm font-medium leading-tight">გუნდის წევრი</div>
                </div>
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