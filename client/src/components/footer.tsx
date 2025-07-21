export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "საიტის დამზადება",
    "ვებსაიტის დიზაინი", 
    "SEO მომსახურება",
    "ზედამხედველობა",
  ];

  const navItems = [
    { label: "უპირატესობები", id: "უპირატესობები" },
    { label: "პორტფოლიო", id: "პორტფოლიო" },
    { label: "სერვისები", id: "სერვისები" },
    { label: "ფასები", id: "ფასები" },
    { label: "კონტაქტი", id: "კონტაქტი" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8 group cursor-pointer" onClick={scrollToTop}>
              <img 
                src="/metaweb-logo-new.png"
                alt="MetaWeb Logo"
                className="h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
              />
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed font-georgian">
              ჩვენ ვქმნით ინოვაციურ ვებ-გვერდებს, ვეხმარებით
              ბიზნესებს წარმატების მიღწევაში. თქვენი წარმატება - ჩვენი მიზანია.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <a
                  href="tel:+99555791514615"
                  className="text-gray-300 hover:text-white transition-colors font-georgian text-lg group-hover:text-yellow-300"
                >
                  557 91 51 46
                </a>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <a
                  href="mailto:info@metaweb.ge"
                  className="text-gray-300 hover:text-white transition-colors font-georgian text-lg group-hover:text-yellow-300"
                >
                  info@metaweb.ge
                </a>
              </div>


            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/metawebstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
              >
                <i className="fab fa-facebook-f text-white group-hover:scale-110 transition-transform duration-200"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/metawebge/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
              >
                <i className="fab fa-linkedin-in text-white group-hover:scale-110 transition-transform duration-200"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold mb-4 font-georgian bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              სერვისები
            </h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => scrollToSection("სერვისები")}
                    className="text-gray-300 hover:text-white transition-all duration-300 font-georgian text-lg hover:translate-x-2 group w-full text-left"
                  >
                    {service}
                  </button>
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full -ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-2xl font-bold mb-4 font-georgian bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ნავიგაცია
            </h4>
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-all duration-300 font-georgian text-lg hover:translate-x-2 group w-full text-left"
                  >
                    {item.label}
                  </button>
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full -ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-georgian text-lg">
                &copy; 2024 Metaweb.ge - ყველა უფლება დაცულია
              </p>
              <p className="text-gray-500 font-georgian">
                საიტის დამზადება, ვებსაიტის დიზაინი და SEO მომსახურება საქართველოში
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="tel:+99555791514615"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 hover:scale-105 font-georgian group"
              >
                <span className="group-hover:animate-pulse mr-2">📞</span>
                დარეკეთ ახლავე
              </a>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-sm font-georgian leading-relaxed">
              საიტის დამზადება • saitis damzadeba • web gverdis awyoba • ვებსაიტის დიზაინი • 
              საიტის აწყობა • website design Georgia • seo მომსახურება • ვებ გვერდის დამზადება • 
              Metaweb.ge • თბილისი • საქართველო
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}