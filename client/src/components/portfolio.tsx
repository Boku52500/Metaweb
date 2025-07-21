import { useEffect, useState } from "react";
import techProject from "@assets/475191028_1120932972825777_1989653129482698248_n_1753105789654.jpg";
import sportsProject from "@assets/475319508_1121775632741511_937116748092196865_n_1753105789655.jpg";
import fashionProject from "@assets/475408865_1121775396074868_2137528778553133634_n_1753105789656.jpg";
import corporateProject from "@assets/475262811_1121775619408179_2003956021201656278_n_1753105789657.jpg";
import constructionProject from "@assets/475110030_1120933002825774_3300031079556110607_n_1753105789657.jpg";
import ecommerceProject from "@assets/475147006_1120932616159146_8440514715472393051_n_1753105789658.jpg";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("პორტფოლიო");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: "GREEN IT SOLUTION",
      description: "ტექნოლოგიური კომპანიის ვებსაიტი",
      image: techProject,
      alt: "Green IT Solution - ტექნოლოგიური კომპანიის ვებსაიტი",
      color: "from-green-500 to-green-700",
      tech: ["React", "Node.js", "PostgreSQL"],
      url: "https://www.greenit-solution.de/en/"
    },
    {
      name: "PHYSIQ APPAREL",
      description: "სპორტული ბრენდის ვებსაიტი",
      image: sportsProject,
      alt: "Physiq Apparel - სპორტული ბრენდის ვებსაიტი",
      color: "from-orange-500 to-red-600",
      tech: ["Vue.js", "FastAPI", "Redis"],
      url: "https://www.physiqapparel.com/"
    },
    {
      name: "CLARE FASHION",
      description: "მოდის ბრენდის ვებსაიტი",
      image: fashionProject,
      alt: "Clare Fashion - მოდის ბრენდის ვებსაიტი",
      color: "from-gray-600 to-gray-800",
      tech: ["Next.js", "Prisma", "TypeScript"],
      url: "https://clare.pro/"
    },
    {
      name: "MANNING ELLIOTT",
      description: "საკონსულტაციო ვებსაიტი",
      image: corporateProject,
      alt: "Manning Elliott - კორპორაციული საკონსულტაციო ვებსაიტი",
      color: "from-blue-600 to-blue-800",
      tech: ["Svelte", "GraphQL", "Docker"],
      url: "https://manningelliott.com/"
    },
    {
      name: "PABCO GYPSUM",
      description: "სამშენებლო კომპანიის ვებსაიტი",
      image: constructionProject,
      alt: "Pabco Gypsum - მშენებლობითი კომპანიის ვებსაიტი",
      color: "from-red-600 to-red-800",
      tech: ["Angular", "NestJS", "MongoDB"],
      url: "https://pabcogypsum.com/"
    },
    {
      name: "JACKY'S ELECTRONICS",
      description: "ელექტრონული კომერციის ვებსაიტი",
      image: ecommerceProject,
      alt: "Jacky's Electronics - ელექტრონული კომერციის ვებსაიტი",
      color: "from-cyan-500 to-blue-600",
      tech: ["React", "Microservices", "Tailwind"],
      url: "https://www.jackyselectronics.com/"
    },
  ];

  return (
    <section id="პორტფოლიო" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-white/30 to-gray-100/50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 font-georgian">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              პროექტები
            </span>
          </h2>
          <h3 className="text-2xl lg:text-3xl text-gray-600 mb-8 font-georgian">ჩვენი ნამუშევრები</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-georgian">
            ყველა პროექტი უნიკალურია და შექმნილია კლიენტის სპეციფიკური საჭიროებების შესაბამისად
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 cursor-pointer ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => window.open(project.url, '_blank')}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* View Project Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                  <button className={`bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 font-georgian`}>
                    🔎 ნახვა
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 text-gray-800 font-georgian group-hover:text-purple-600 transition-colors duration-300">
                  {project.name}
                </h4>
                
                <p className="text-gray-600 mb-6 font-georgian leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm rounded-full font-medium shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Gradient Line */}
                <div className={`w-full h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}></div>
              </div>


            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 font-georgian">გაქვთ საინტერესო იდეა?</h3>
            <p className="text-lg mb-6 font-georgian">მოდით ერთად გავქმნათ შემდეგი წარმატებული პროექტი</p>
            <a
              href="tel:+995568694879"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian group"
            >
              <span className="group-hover:animate-bounce mr-3">💬</span>
              გვესაუბრეთ პროექტზე
            </a>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-300/20 rounded-full blur-xl animate-pulse"></div>
      </div>
    </section>
  );
}