import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("კონტაქტი");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "შეტყობინება გაგზავნილია! 🎉",
        description: "ჩვენ დაგიკავშირდებით ამ ნომერზე: " + formData.phone,
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="კონტაქტი" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 font-georgian text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              დაგვიკავშირდით
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 font-georgian mb-8">
            მიიღეთ უფასო კონსულტაცია თქვენი ბიზნესის განსავითარებლად
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-8 text-white font-georgian">
                  საიტის დამზადება და ვებსაიტის დიზაინი
                </h3>
                <p className="text-gray-300 mb-8 text-lg font-georgian leading-relaxed">
                  ჩვენ ვიღებთ პასუხისმგებლობას, რომ შევქმნათ ვებსაიტი, რომელიც აღემატება თქვენს
                  მოლოდინებს. დაგვიკავშირდით და გაგვიზიარეთ თქვენი იდეა!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-110">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 font-georgian">ტელეფონი</p>
                      <a
                        href="tel:+99555791514615"
                        className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors font-georgian group-hover:text-yellow-300"
                      >
                        557 91 51 46
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 font-georgian">ელ-ფოსტა</p>
                      <a
                        href="mailto:info@metaweb.ge"
                        className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors font-georgian group-hover:text-yellow-300"
                      >
                        info@metaweb.ge
                      </a>
                    </div>
                  </div>


                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-gray-400 mb-4 font-georgian">გამოგვყევით სოციალურ ქსელებში</p>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/metawebstudios" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/metawebge/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className="fab fa-linkedin-in text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h4 className="text-3xl font-bold mb-8 text-white font-georgian">მოგვწერეთ</h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <Input
                      type="text"
                      name="name"
                      placeholder="თქვენი სახელი *"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300 h-14 rounded-2xl font-georgian text-lg focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="ტელეფონის ნომერი *"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300 h-14 rounded-2xl font-georgian text-lg focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <Input
                      type="email"
                      name="email"
                      placeholder="ელ-ფოსტა *"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300 h-14 rounded-2xl font-georgian text-lg focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <Textarea
                      name="message"
                      placeholder="თქვენი შეტყობინება *"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300 resize-none rounded-2xl font-georgian text-lg focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 font-georgian h-14 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-3 w-5 h-5 border-2 border-black border-t-transparent rounded-full"></div>
                        იგზავნება...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="group-hover:animate-pulse mr-3">🚀</span>
                        შეტყობინების გაგზავნა
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-gray-300 text-sm font-georgian text-center">
                    📞 სწრაფი პასუხისთვის დარეკეთ: 
                    <a href="tel:+995568694879" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors ml-1">
                      568 69 48 79
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 font-georgian">24/7 ხელმისაწვდომობა</h3>
            <p className="text-lg font-georgian">ჩვენ ყოველთვის მზად ვართ დაგეხმაროთ თქვენი ციფრული მარკეტინგის საჭიროებებში</p>
          </div>
        </div>
      </div>
    </section>
  );
}