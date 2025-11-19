import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = language === 'ka' ? [
    "საიტის დამზადება",
    "ვებსაიტის დიზაინი", 
    "SEO მომსახურება",
    "ზედამხედველობა",
  ] : [
    "Website Development",
    "Web Design", 
    "SEO Services",
    "Maintenance",
  ];

  const navItems = language === 'ka' ? [
    { label: "უპირატესობები", id: "უპირატესობები" },
    { label: "პორტფოლიო", id: "პორტფოლიო" },
    { label: "სერვისები", id: "სერვისები" },
    { label: "ფასები", id: "ფასები" },
    { label: "კონტაქტი", id: "კონტაქტი" },
  ] : [
    { label: "Advantages", id: "advantages" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6 sm:mb-8 group cursor-pointer" onClick={scrollToTop}>
              <img 
                src="/metaweb-logo-new.png"
                alt="MetaWeb Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
              />
            </div>
            
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed font-georgian">
              {language === 'ka' ? 'ჩვენ ვქმნით ინოვაციურ ვებ-გვერდებს, ვეხმარებით ბიზნესებს წარმატების მიღწევაში. თქვენი წარმატება - ჩვენი მიზანია.' : 'We create innovative web pages and help businesses achieve success. Your success is our goal.'}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <i className="fas fa-phone text-white text-sm sm:text-base"></i>
                </div>
                <a
                  href="tel:+995557915146"
                  className="text-gray-300 hover:text-white transition-colors font-georgian text-base sm:text-lg group-hover:text-yellow-300"
                >
                  557 91 51 46
                </a>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                  <i className="fas fa-envelope text-white text-sm sm:text-base"></i>
                </div>
                <a
                  href="mailto:info@metaweb.ge"
                  className="text-gray-300 hover:text-white transition-colors font-georgian text-base sm:text-lg group-hover:text-yellow-300 break-all"
                >
                  info@metaweb.ge
                </a>
              </div>


            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/metawebstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
              >
                <i className="fab fa-facebook-f text-white group-hover:scale-110 transition-transform duration-200 text-sm sm:text-base"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/metawebge/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
              >
                <i className="fab fa-linkedin-in text-white group-hover:scale-110 transition-transform duration-200 text-sm sm:text-base"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 font-georgian bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {language === 'ka' ? 'სერვისები' : 'Services'}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => scrollToSection(language === 'ka' ? "სერვისები" : "services")}
                    className="text-gray-300 hover:text-white transition-all duration-300 font-georgian text-base sm:text-lg hover:translate-x-2 group w-full text-left"
                  >
                    {service}
                  </button>
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full -ml-3 sm:-ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 font-georgian bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {language === 'ka' ? 'ნავიგაცია' : 'Navigation'}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-all duration-300 font-georgian text-base sm:text-lg hover:translate-x-2 group w-full text-left"
                  >
                    {item.label}
                  </button>
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full -ml-3 sm:-ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-georgian text-base sm:text-lg">
                &copy; 2024 Metaweb.ge - {language === 'ka' ? 'ყველა უფლება დაცულია' : 'All rights reserved'}
              </p>
              <p className="text-gray-500 font-georgian text-sm sm:text-base">
                {language === 'ka' ? 'საიტის დამზადება, ვებსაიტის დიზაინი და SEO მომსახურება საქართველოში' : 'Website development, web design and SEO services in Georgia'}
              </p>
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="tel:+995557915146"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 hover:scale-105 font-georgian group text-sm sm:text-base"
              >
                <span className="group-hover:animate-pulse mr-1 sm:mr-2">📞</span>
                {language === 'ka' ? 'დარეკეთ ახლავე' : 'Call now'}
              </a>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-sm font-georgian leading-relaxed">
              {language === 'ka'
                ? 'საიტის დამზადება • saitis damzadeba • web gverdis awyoba • ვებსაიტის დიზაინი • საიტის აწყობა • website design Georgia • seo მომსახურება • ვებ გვერდის დამზადება • Metaweb.ge • თბილისი • საქართველო'
                : 'website development • web design • SEO services • website creation • website design in Georgia • SEO optimization • web development • Metaweb.ge • Tbilisi • Georgia'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}