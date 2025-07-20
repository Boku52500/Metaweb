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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"></div>
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`text-white transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-8">
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 font-georgian leading-tight">
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  საიტის
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  დამზადება
                </span>
              </h1>
              
              <h2 className="text-3xl lg:text-4xl mb-8 text-white/90 font-georgian animate-slide-up" style={{ animationDelay: '0.6s' }}>
                საუკეთესო ხარისხი ხელმისაწვდომ ფასად
              </h2>
              
              <p className="text-xl lg:text-2xl mb-12 text-white/80 font-georgian leading-relaxed animate-slide-up" style={{ animationDelay: '0.8s' }}>
                ჩვენი გუნდი ეხმარება კომპანიებს იპოვონ თავიანთი ადგილი 
                <span className="text-cyan-300 font-semibold"> ციფრულ სამყაროში</span>
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 font-georgian group"
              >
                <span className="group-hover:animate-bounce inline-block mr-2">🚀</span>
                სწრაფი შეკვეთა
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm font-georgian group"
              >
                <a href="tel:+995568694879">
                  <i className="fas fa-phone mr-3 group-hover:animate-pulse text-cyan-300"></i>568 69 48 79
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Counter target={7} />
                  <div className="text-white/80 font-georgian text-sm mt-2">წლიანი გამოცდილება</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Counter target={150} />
                  <div className="text-white/80 font-georgian text-sm mt-2">კმაყოფილი კლიენტი</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Counter target={350} />
                  <div className="text-white/80 font-georgian text-sm mt-2">წარმატებული პროექტი</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Counter target={15} />
                  <div className="text-white/80 font-georgian text-sm mt-2">გუნდის წევრი</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Metaweb - საიტის დამზადება და ვებსაიტის დიზაინი"
                className="relative rounded-3xl shadow-2xl w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">ონლაინ რეჟიმი</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm font-medium text-gray-800">სწრაფი მომსახურება</span>
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