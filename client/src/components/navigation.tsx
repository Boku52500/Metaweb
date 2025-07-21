import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "უპირატესობები", id: "უპირატესობები" },
    { label: "პორტფოლიო", id: "პორტფოლიო" },
    { label: "სერვისები", id: "სერვისები" },
    { label: "ფასები", id: "ფასები" },
    { label: "კონტაქტი", id: "კონტაქტი" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-xl border-b border-purple-100" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer" onClick={scrollToTop}>
            <img 
              src="/metaweb-logo-new.png"
              alt="MetaWeb Logo"
              className={`h-16 w-auto object-contain group-hover:scale-110 transition-all duration-500 ${
                isScrolled 
                  ? 'filter brightness-0 saturate-100 contrast-200 drop-shadow-lg' 
                  : 'filter drop-shadow-lg'
              }`}
              style={{
                filter: isScrolled 
                  ? 'brightness(0) saturate(100%) invert(13%) sepia(10%) saturate(2023%) hue-rotate(207deg) brightness(95%) contrast(86%)'
                  : 'none'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative hover:text-purple-600 transition-all duration-300 font-medium text-lg font-georgian group py-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Phone Button */}
          <a
            href="tel:+99555791514615"
            className={`hidden md:flex items-center px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 font-georgian ${
              isScrolled 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/30'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/30'
            }`}
          >
            <i className="fas fa-phone mr-2 animate-pulse"></i>557 91 51 46
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-purple-100 animate-slide-down">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium py-3 text-lg font-georgian hover:bg-purple-50 rounded-lg px-4"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+99555791514615"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center font-georgian shadow-lg"
              >
                <i className="fas fa-phone mr-2"></i>557 91 51 46
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}