import { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Pricing() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById(language === 'en' ? "contact" : "კონტაქტი");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(language === 'en' ? "pricing" : "ფასები");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [language]);

  const pricingPlans = [
    {
      name: t('pricing.single.title'),
      price: t('pricing.single.price'),
      priceNote: t('pricing.single.from'),
      description: t('pricing.single.desc'),
      icon: "📄",
      color: "from-blue-500 to-blue-700",
      features: t('pricing.single.features').split('|')
    },
    {
      name: t('pricing.multi.title'),
      price: t('pricing.multi.price'),
      priceNote: t('pricing.multi.from'),
      description: t('pricing.multi.desc'),
      icon: "📚",
      color: "from-purple-500 to-purple-700",
      features: t('pricing.multi.features').split('|')
    },
    {
      name: t('pricing.store.title'),
      price: t('pricing.store.price'),
      priceNote: t('pricing.store.from'),
      description: t('pricing.store.desc'),
      icon: "🛒",
      color: "from-green-500 to-green-700",
      features: t('pricing.store.features').split('|')
    },
    {
      name: t('pricing.unique.title'),
      price: t('pricing.unique.price'),
      priceNote: t('pricing.unique.from'),
      description: t('pricing.unique.desc'),
      icon: "✨",
      color: "from-orange-500 to-red-600",
      features: t('pricing.unique.features').split('|')
    }
  ];

  return (
    <section id={language === 'en' ? "pricing" : "ფასები"} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-white/30 to-gray-100/50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 font-georgian">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t('pricing.title')}
            </span>
          </h2>
          <h3 className="text-2xl lg:text-3xl text-gray-600 mb-8 font-georgian">{t('pricing.subtitle')}</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-georgian">
            {t('pricing.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-transparent ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Enhanced Border Effect - Only on Hover */}
              <div className={`absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="bg-white rounded-3xl h-full w-full"></div>
              </div>

              {/* Content Container - positioned relatively */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon Header - Fixed Height */}
                <div className="text-center mb-6 h-32 flex flex-col justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mx-auto shadow-xl transition-all duration-300 mb-4`}>
                    <span className="text-4xl">{plan.icon}</span>
                  </div>
                </div>

                {/* Title - Fixed Height */}
                <div className="text-center mb-4 h-16 flex items-center justify-center">
                  <h4 className="text-2xl font-bold text-gray-800 font-georgian">
                    {plan.name}
                  </h4>
                </div>

                {/* Description - Fixed Height */}
                <div className="text-center mb-6 h-12 flex items-center justify-center">
                  <p className="text-gray-600 font-georgian leading-relaxed text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing - Fixed Height and Position */}
                <div className="text-center mb-6 h-20 flex flex-col justify-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent font-georgian`}>
                      {plan.price}
                    </span>
                    <span className="text-lg text-gray-600 ml-2 font-georgian">{plan.priceNote}</span>
                  </div>
                  <div className={`w-24 h-1 bg-gradient-to-r ${plan.color} mx-auto rounded-full`}></div>
                </div>

                {/* Features - Flexible Height */}
                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start font-georgian">
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - Fixed at Bottom */}
                <div className="mt-auto">
                  <button 
                    onClick={scrollToContact}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-georgian`}
                  >
                    {t('pricing.cta')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 font-georgian">{t('pricing.custom.title')}</h3>
            <p className="text-lg mb-6 font-georgian">{t('pricing.custom.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById(language === 'en' ? "contact" : "კონტაქტი");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian group"
              >
                <span className="group-hover:animate-bounce mr-3">💬</span>
                {t('pricing.custom.consultation')}
              </button>
              <a
                href="mailto:info@metaweb.ge"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian group"
              >
                <span className="group-hover:animate-pulse mr-3">✉️</span>
                {t('pricing.custom.write')}
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