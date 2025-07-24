import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/language-selector";
// Google Ads conversion tracking
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export default function Navigation() {
  const { t, language } = useLanguage();
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
    { label: t('nav.advantages'), id: language === 'en' ? "advantages" : "უპირატესობები" },
    { label: t('nav.services'), id: language === 'en' ? "services" : "სერვისები" },
    { label: t('nav.portfolio'), id: language === 'en' ? "portfolio" : "პორტფოლიო" },
    { label: t('nav.pricing'), id: language === 'en' ? "pricing" : "ფასები" },
    { label: t('nav.contact'), id: language === 'en' ? "contact" : "კონტაქტი" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-xl border-b border-purple-100" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer" onClick={scrollToTop}>
            <img 
              src="/metaweb-logo-new.png"
              alt="MetaWeb Logo"
              className={`h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-110 transition-all duration-500 ${
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
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative hover:text-purple-600 transition-all duration-300 font-medium text-sm md:text-base lg:text-lg font-georgian group py-2 ${
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
            href="tel:+995557915146"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                return window.gtag_report_conversion("tel:+995557915146");
              }
              return true;
            }}
            className={`hidden lg:flex items-center px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl transition-all duration-300 shadow-lg hover:scale-105 font-georgian text-sm xl:text-base ${
              isScrolled 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/30'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/30'
            }`}
          >
            <i className="fas fa-phone mr-1 xl:mr-2 animate-pulse text-xs xl:text-sm"></i>
            <span className="hidden xl:inline">{t('hero.phone')}</span>
            <span className="xl:hidden">557 91 51 46</span>
          </a>

          {/* Phone Icon for Medium Screens */}
          <a
            href="tel:+995557915146"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                return window.gtag_report_conversion("tel:+995557915146");
              }
              return true;
            }}
            className={`lg:hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-lg hover:scale-110 ${
              isScrolled 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/30'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/30'
            }`}
            title="557 91 51 46"
          >
            <i className="fas fa-phone text-sm animate-pulse"></i>
          </a>

          {/* Language Selector */}
          <LanguageSelector />

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
          <div className="md:hidden mt-4 sm:mt-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 border border-purple-100 animate-slide-down">
            <div className="space-y-3 sm:space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 sm:py-3 text-base sm:text-lg font-georgian hover:bg-purple-50 rounded-lg px-3 sm:px-4"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+995557915146"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center font-georgian shadow-lg text-sm sm:text-base"
              >
                <i className="fas fa-phone mr-1 sm:mr-2 text-sm"></i>557 91 51 46
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}