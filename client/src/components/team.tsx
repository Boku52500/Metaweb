import { useEffect, useState } from "react";

export default function Team() {
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

    const element = document.getElementById("გუნდი");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "ნიკა მამარდაშვილი",
      position: "დამფუძნებელი",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      alt: "ნიკა მამარდაშვილი - დამფუძნებელი",
      color: "from-purple-500 to-purple-700",
      skills: ["Leadership", "Strategy", "Business Development"]
    },
    {
      name: "ანა გოგნაძე",
      position: "ვებ დეველოპერი",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      alt: "ანა გოგნაძე - ვებ დეველოპერი",
      color: "from-blue-500 to-blue-700",
      skills: ["React", "Node.js", "TypeScript"]
    },
    {
      name: "გიორგი კაცაძე",
      position: "ვებ დეველოპერი",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      alt: "გიორგი კაცაძე - ვებ დეველოპერი",
      color: "from-green-500 to-green-700",
      skills: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      name: "ნინო ბერიძე",
      position: "SEO სპეციალისტი",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      alt: "ნინო ბერიძე - SEO სპეციალისტი",
      color: "from-pink-500 to-pink-700",
      skills: ["SEO", "Analytics", "Content Strategy"]
    },
  ];

  return (
    <section id="გუნდი" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-white/30 to-gray-100/50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 font-georgian">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              გუნდი
            </span>
          </h2>
          <h3 className="text-2xl lg:text-3xl text-gray-600 mb-8 font-georgian">გაეცანით ჩვენი გუნდი</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-georgian">
            ჩვენი მრავალფეროვანი და გამოცდილი გუნდი მუშაობს ერთად, რათა თქვენი ციფრული ოცნებები გავცქოთ რეალობად
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Social Links (appearing on hover) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <i className="fab fa-linkedin-in text-blue-600"></i>
                    </button>
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <i className="fab fa-github text-gray-800"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="text-2xl font-bold mb-2 text-gray-800 font-georgian group-hover:text-purple-600 transition-colors duration-300">
                  {member.name}
                </h4>
                
                <div className={`w-16 h-1 bg-gradient-to-r ${member.color} mx-auto mb-4 rounded-full`}></div>
                
                <p className="text-lg text-gray-600 mb-4 font-georgian font-medium">
                  {member.position}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${member.color} text-white text-sm rounded-full font-medium shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300`}
                      style={{ transitionDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${member.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
              <div className="absolute bottom-20 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 font-georgian">გსურთ ჩვენს გუნდთან მუშაობა?</h3>
            <p className="text-lg mb-6 font-georgian">ჩვენ ყოველთვის ვიღებთ ღია ვაკანსიებს ნიჭიერი პროფესიონალებისთვის</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@metaweb.ge"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian group"
              >
                <span className="group-hover:animate-bounce mr-3">💼</span>
                კარიერა
              </a>
              <a
                href="tel:+995568694879"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian group"
              >
                <span className="group-hover:animate-pulse mr-3">📞</span>
                დაგვიკავშირდით
              </a>
            </div>
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