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
    { label: "პარტნიორები", id: "პარტნიორები" },
    { label: "პორტფოლიო", id: "პორტფოლიო" },
    { label: "სერვისები", id: "სერვისები" },
    { label: "გუნდი", id: "გუნდი" },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Metaweb</span>
            </div>
            <p className="text-gray-400 mb-6">
              ჩვენ ვქმნით ინოვაციურ და ფუნქციონალურ გადაწყვეტილებებს, რომლებიც ეხმარება
              ბიზნესებს წარმატების მიღწევაში ციფრულ სამყაროში.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">სერვისები</h4>
            <ul className="space-y-3 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("სერვისები")}
                    className="hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">კონტაქტი</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="tel:+995568694879"
                  className="hover:text-white transition-colors"
                >
                  568 69 48 79
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@metaweb.ge"
                  className="hover:text-white transition-colors"
                >
                  info@metaweb.ge
                </a>
              </li>
              <li>თბილისი, საქართველო</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Metaweb.ge - ყველა უფლება დაცულია | საიტის დამზადება, ვებსაიტის
            დიზაინი და SEO მომსახურება საქართველოში
          </p>
        </div>
      </div>
    </footer>
  );
}
