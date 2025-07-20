export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
    { label: "გუნდი", id: "გუნდი" },
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
            <div className="flex items-center space-x-3 mb-8 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-georgian">
                Metaweb
              </span>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed font-georgian">
              ჩვენ ვქმნით ინოვაციურ და ფუნქციონალურ გადაწყვეტილებებს, რომლებიც ეხმარება
              ბიზნესებს წარმატების მიღწევაში ციფრულ სამყაროში. თქვენი წარმატება - ჩვენი მიზანია.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <a
                  href="tel:+995568694879"
                  className="text-gray-300 hover:text-white transition-colors font-georgian text-lg group-hover:text-yellow-300"
                >
                  568 69 48 79
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

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <span className="text-gray-300 font-georgian text-lg">თბილისი, საქართველო</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
              >
                <i className="fab fa-facebook-f text-white group-hover:scale-110 transition-transform duration-200"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/30 group"
              >
                <i className="fab fa-instagram text-white group-hover:scale-110 transition-transform duration-200"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
              >
                <i className="fab fa-linkedin-in text-white group-hover:scale-110 transition-transform duration-200"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/30 group"
              >
                <i className="fab fa-github text-white group-hover:scale-110 transition-transform duration-200"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold mb-8 font-georgian bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              სერვისები
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("სერვისები")}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-left font-georgian text-lg hover:translate-x-2 group flex items-center"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-2xl font-bold mb-8 font-georgian bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ნავიგაცია
            </h4>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-left font-georgian text-lg hover:translate-x-2 group flex items-center"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
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
                href="tel:+995568694879"
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