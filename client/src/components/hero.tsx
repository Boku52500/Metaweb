import { Button } from "@/components/ui/button";
import Counter from "./counter";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
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
        
        {/* Enhanced Floating Shapes - Layer 1 */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-float-delayed opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-float-slow opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl animate-float-reverse opacity-60"></div>
        
        {/* Enhanced Floating Shapes - Layer 2 */}
        <div className="absolute top-1/5 right-1/5 w-56 h-56 bg-emerald-500/25 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/2 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-float-delayed opacity-45"></div>
        <div className="absolute top-2/3 left-1/3 w-40 h-40 bg-teal-500/30 rounded-full blur-2xl animate-float-slow opacity-55"></div>
        <div className="absolute top-1/8 left-1/2 w-88 h-88 bg-rose-500/15 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/5 left-2/3 w-64 h-64 bg-orange-500/25 rounded-full blur-3xl animate-float-reverse opacity-50"></div>
        
        {/* Enhanced Floating Shapes - Layer 3 */}
        <div className="absolute top-3/5 right-1/6 w-36 h-36 bg-lime-500/30 rounded-full blur-2xl animate-float opacity-45"></div>
        <div className="absolute bottom-2/5 left-1/5 w-52 h-52 bg-sky-500/25 rounded-full blur-3xl animate-float-delayed opacity-55"></div>
        <div className="absolute top-1/3 right-2/3 w-44 h-44 bg-fuchsia-500/20 rounded-full blur-2xl animate-float-slow opacity-40"></div>
        <div className="absolute bottom-1/6 right-1/3 w-60 h-60 bg-amber-500/25 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute top-4/5 left-1/4 w-32 h-32 bg-red-500/30 rounded-full blur-2xl animate-float-reverse opacity-45"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 left-1/5 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rotate-45 animate-spin-slow opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/15 to-pink-400/15 rotate-12 animate-pulse opacity-50"></div>
        <div className="absolute top-2/5 right-1/5 w-20 h-20 bg-gradient-to-r from-green-400/25 to-blue-400/25 -rotate-12 animate-bounce opacity-40" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-2/5 left-1/3 w-28 h-28 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rotate-45 animate-spin-slow opacity-55"></div>
        
        {/* Particle Effect Overlay - Enhanced */}
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 bg-white/20 rounded-full top-1/4 left-1/4 animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-cyan-300/40 rounded-full top-1/3 right-1/3 animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-3 h-3 bg-purple-300/30 rounded-full bottom-1/3 left-1/2 animate-ping" style={{ animationDelay: '4s' }}></div>
          <div className="absolute w-1 h-1 bg-yellow-300/50 rounded-full top-1/2 right-1/4 animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-2 h-2 bg-pink-300/40 rounded-full bottom-1/4 right-1/6 animate-ping" style={{ animationDelay: '3s' }}></div>
          
          {/* Additional Particles */}
          <div className="absolute w-1 h-1 bg-emerald-300/45 rounded-full top-1/5 right-1/5 animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute w-2 h-2 bg-violet-300/35 rounded-full bottom-1/5 left-1/3 animate-ping" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute w-1 h-1 bg-teal-300/50 rounded-full top-3/5 left-1/5 animate-ping" style={{ animationDelay: '3.5s' }}></div>
          <div className="absolute w-3 h-3 bg-rose-300/30 rounded-full bottom-2/5 right-1/3 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-1 h-1 bg-orange-300/45 rounded-full top-4/5 right-2/5 animate-ping" style={{ animationDelay: '4.5s' }}></div>
          <div className="absolute w-2 h-2 bg-lime-300/40 rounded-full top-2/3 left-2/3 animate-ping" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute w-1 h-1 bg-sky-300/50 rounded-full bottom-1/6 left-1/4 animate-ping" style={{ animationDelay: '3.8s' }}></div>
          <div className="absolute w-2 h-2 bg-fuchsia-300/35 rounded-full top-1/6 right-2/3 animate-ping" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute w-1 h-1 bg-amber-300/45 rounded-full bottom-3/5 right-1/5 animate-ping" style={{ animationDelay: '4.2s' }}></div>
          <div className="absolute w-3 h-3 bg-red-300/30 rounded-full top-5/6 left-1/6 animate-ping" style={{ animationDelay: '0.8s' }}></div>
        </div>
        

      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 md:pt-24 lg:pt-20 pb-16 sm:pb-20 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20 items-center text-center lg:text-left min-h-[70vh] sm:min-h-[80vh]">
          <div className={`text-white transition-all duration-1200 w-full max-w-4xl lg:max-w-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="mb-8 sm:mb-12">
              

              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
                  <span className="block lg:inline animate-slide-up text-white font-black tracking-wider relative" style={{ animationDelay: '0.3s', textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}>
                    Web{' '}
                  </span>
                  <span className="block lg:inline animate-slide-up text-white font-black tracking-wider relative" style={{ animationDelay: '0.5s', textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}>
                    Development
                  </span>
                </h1>
                
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-white/95 animate-slide-up font-light" style={{ animationDelay: '0.7s' }}>
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Best Quality at Affordable Prices
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/85 leading-relaxed animate-slide-up" style={{ animationDelay: '0.9s' }}>
                  Our team helps companies find their place in the
                  <span className="text-cyan-300 font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"> digital world</span>
                </p>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-yellow-400 font-bold animate-slide-up animate-pulse" style={{ animationDelay: '1.1s' }}>
                  Make Your Business Successful Today
                </p>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 sm:mb-16 transition-all duration-1200 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              {/* Primary CTA Button */}
              <Button
                onClick={scrollToContact}
                className="relative group px-8 py-4 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-violet-500/40 transition-all duration-700 transform hover:scale-[1.02] border border-violet-400/30 w-full sm:w-64"
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
                    Quick Order
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></div>
                  </span>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 -z-10"></div>
              </Button>

              {/* Phone Button */}
              <Button
                onClick={() => window.location.href = 'tel:+995557915146'}
                className="relative group px-8 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 transform hover:scale-[1.02] border border-cyan-400/40 hover:border-cyan-300/60 w-full sm:w-64"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative flex items-center justify-center space-x-3">
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <i className="fas fa-phone relative text-cyan-400 text-lg group-hover:text-cyan-300 transition-colors duration-300 group-hover:rotate-12 transform transition-transform"></i>
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-50 transition-all duration-700 animate-ping"></div>
                  </div>
                  <span className="relative text-cyan-100 group-hover:text-white transition-colors duration-300">
                    557 91 51 46
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
                  </span>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 -z-10"></div>
              </Button>
            </div>

            {/* Enhanced Statistics - Mobile Only */}
            <div className={`lg:hidden w-full max-w-6xl mx-auto mt-12 sm:mt-16 transition-all duration-1200 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                <div className="text-center group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden h-[120px] sm:h-[130px] flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                    <div className="mb-1 sm:mb-2">
                      <Counter target={10} />
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm font-medium leading-tight">Years Experience</div>
                  </div>
                </div>
                <div className="text-center group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden h-[120px] sm:h-[130px] flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                    <div className="mb-1 sm:mb-2">
                      <Counter target={500} />
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm font-medium leading-tight">Happy Clients</div>
                  </div>
                </div>
                <div className="text-center group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden h-[120px] sm:h-[130px] flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                    <div className="mb-1 sm:mb-2">
                      <Counter target={850} />
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm font-medium leading-tight">Successful Projects</div>
                  </div>
                </div>
                <div className="text-center group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden h-[120px] sm:h-[130px] flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                    <div className="mb-1 sm:mb-2">
                      <Counter target={15} />
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm font-medium leading-tight">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Picture Section - Desktop Right Side, Mobile Below */}
          <div className={`relative transition-all duration-1000 delay-500 mt-12 sm:mt-16 lg:mt-0 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative group h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none">
                {/* Digital Agency Team Photo */}
                <img
                  src="/digital-agency-farnham_1753099696324.jpg"
                  alt="Metaweb - Website Development and Web Design Services"
                  className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-700"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
                />
                
                {/* Animated Floating Elements */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl animate-float border border-purple-200/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">Real Time</span>
                  </div>
                </div>
                
                <div className="absolute top-16 right-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-3 shadow-xl animate-float-delayed">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">⚡</span>
                    <span className="text-sm font-medium">Fast</span>
                  </div>
                </div>
                
                <div className="absolute bottom-20 left-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl p-3 shadow-xl animate-float-slow">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🎨</span>
                    <span className="text-sm font-medium">Modern</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl animate-float-reverse border border-cyan-200/50">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🚀</span>
                    <span className="text-sm font-semibold text-gray-800">High Quality</span>
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

        {/* Enhanced Statistics - Desktop Below Grid */}
        <div className={`hidden lg:block w-full max-w-6xl mx-auto mt-6 lg:mt-4 xl:mt-6 transition-all duration-1200 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden h-[130px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <div className="mb-2">
                  <Counter target={10} />
                </div>
                <div className="text-white/80 text-sm font-medium leading-tight">Years Experience</div>
              </div>
            </div>
            <div className="text-center group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden h-[130px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                <div className="mb-2">
                  <Counter target={500} />
                </div>
                <div className="text-white/80 text-sm font-medium leading-tight">Happy Clients</div>
              </div>
            </div>
            <div className="text-center group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden h-[130px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                <div className="mb-2">
                  <Counter target={850} />
                </div>
                <div className="text-white/80 text-sm font-medium leading-tight">Successful Projects</div>
              </div>
            </div>
            <div className="text-center group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 relative overflow-hidden h-[130px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                <div className="mb-2">
                  <Counter target={15} />
                </div>
                <div className="text-white/80 text-sm font-medium leading-tight">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}