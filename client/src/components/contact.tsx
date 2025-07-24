import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
// Google Ads conversion tracking
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export default function Contact() {
  const { t, language } = useLanguage();
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

    const element = document.getElementById(language === 'en' ? "contact" : "კონტაქტი");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track Google Ads conversion click
      if (typeof window !== 'undefined' && window.gtag_report_conversion) {
        window.gtag_report_conversion();
      }

      // Submit form data to server API (fallback to reliable email service)
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: language === 'ka' ? "შეტყობინება გაგზავნილია! 🎉" : "Message sent! 🎉",
          description: language === 'ka' ? `ჩვენ დაგიკავშირდებით ამ ნომერზე: ${formData.phone}` : `We will contact you at this number: ${formData.phone}`,
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
        
        // Redirect to contact success page after 2 seconds
        setTimeout(() => {
          window.location.href = language === 'en' ? '/contact-success?lang=en' : '/contact-success';
        }, 2000);
      } else {
        const error = await response.json();
        toast({
          title: language === 'ka' ? "შეცდომა ❌" : "Error ❌",
          description: language === 'ka' ? "შეტყობინება ვერ გაიგზავნა. გაიმეორეთ ცდა." : "Message could not be sent. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: language === 'ka' ? "შეცდომა ❌" : "Error ❌",
        description: language === 'ka' ? "შეტყობინება ვერ გაიგზავნა. გაიმეორეთ ცდა." : "Message could not be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id={language === 'en' ? "contact" : "კონტაქტი"} className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-georgian text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-georgian mb-6 sm:mb-8">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white font-georgian">
                  {t('contact.info.title')}
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg font-georgian leading-relaxed">
                  {t('contact.info.desc')}
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4 sm:space-x-6 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-110">
                      <i className="fas fa-phone text-white text-base sm:text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 font-georgian text-sm sm:text-base">{t('contact.phone')}</p>
                      <a
                        href="tel:+995557915146"
                        onClick={() => {
                          if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                            return window.gtag_report_conversion("tel:+995557915146");
                          }
                          return true;
                        }}
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-yellow-300 transition-colors font-georgian group-hover:text-yellow-300"
                      >
                        557 91 51 46
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 sm:space-x-6 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                      <i className="fas fa-envelope text-white text-base sm:text-lg md:text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 font-georgian text-sm sm:text-base">{t('contact.email')}</p>
                      <a
                        href="mailto:info@metaweb.ge"
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-yellow-300 transition-colors font-georgian group-hover:text-yellow-300 break-all"
                      >
                        info@metaweb.ge
                      </a>
                    </div>
                  </div>


                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
                  <p className="text-gray-400 mb-3 sm:mb-4 font-georgian text-sm sm:text-base">{language === 'ka' ? 'გამოგვყევით სოციალურ ქსელებში' : 'Follow us on social media'}</p>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a href="https://www.facebook.com/metawebstudios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className="fab fa-facebook-f text-white text-sm sm:text-base"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/metawebge/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className="fab fa-linkedin-in text-white text-sm sm:text-base"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <h4 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white font-georgian">{t('contact.form.title')}</h4>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="relative group">
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('contact.form.namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white h-12 sm:h-14 rounded-xl sm:rounded-2xl font-georgian text-base sm:text-lg focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <Input
                      type="tel"
                      name="phone"
                      placeholder={t('contact.form.phonePlaceholder')}
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white h-12 sm:h-14 rounded-xl sm:rounded-2xl font-georgian text-base sm:text-lg focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white h-12 sm:h-14 rounded-xl sm:rounded-2xl font-georgian text-base sm:text-lg focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <Textarea
                      name="message"
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white resize-none rounded-xl sm:rounded-2xl font-georgian text-base sm:text-lg focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300 min-h-[100px] sm:min-h-[120px]"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 font-georgian h-12 sm:h-14 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full"></div>
                        {t('contact.form.sending')}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="group-hover:animate-pulse mr-2 sm:mr-3">🚀</span>
                        {t('contact.form.submit')}
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10">
                  <p className="text-gray-300 text-xs sm:text-sm font-georgian text-center">
                    📞 {language === 'ka' ? 'სწრაფი პასუხისთვის დარეკეთ:' : 'For quick response call:'} 
                    <a 
                      href="tel:+995557915146" 
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                          return window.gtag_report_conversion("tel:+995557915146");
                        }
                        return true;
                      }}
                      className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors ml-1"
                    >
                      557 91 51 46
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}