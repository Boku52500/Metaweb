import { useEffect, useState } from "react";

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
      name: "METASHOP.GE",
      description: "ელექტრონული კომერციის ვებსაიტი",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "METASHOP.GE - ელექტრონული კომერციის ვებსაიტი",
      color: "from-purple-500 to-purple-700",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      name: "BIZNESGROUP.GE",
      description: "კორპორაციული ვებსაიტი",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "BIZNESGROUP.GE - კორპორაციული ვებსაიტი",
      color: "from-blue-500 to-blue-700",
      tech: ["WordPress", "PHP", "MySQL"]
    },
    {
      name: "RESTAURANT.GE",
      description: "რესტორნის ვებსაიტი",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "RESTAURANT.GE - რესტორნის ვებსაიტი",
      color: "from-green-500 to-green-700",
      tech: ["Vue.js", "Laravel", "Stripe"]
    },
    {
      name: "TRAVELGEORGIA.GE",
      description: "ტურისტული სააგენტო",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "TRAVELGEORGIA.GE - ტურისტული სააგენტოს ვებსაიტი",
      color: "from-cyan-500 to-cyan-700",
      tech: ["Next.js", "Prisma", "Tailwind"]
    },
    {
      name: "REALESTATE.GE",
      description: "უძრავი ქონების ვებსაიტი",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "REALESTATE.GE - უძრავი ქონების ვებსაიტი",
      color: "from-orange-500 to-orange-700",
      tech: ["Angular", "Express", "MongoDB"]
    },
    {
      name: "EDUCATION.GE",
      description: "საგანმანათლებლო პლატფორმა",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "EDUCATION.GE - საგანმანათლებლო პლატფორმა",
      color: "from-pink-500 to-pink-700",
      tech: ["React", "Firebase", "TypeScript"]
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
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 100}ms`
              }}
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
                    🔍 ნახვა
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

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
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