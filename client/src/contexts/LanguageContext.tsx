import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ka' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Georgian translations (default)
const translations = {
  ka: {
    // Navigation
    'nav.advantages': 'უპირატესობები',
    'nav.services': 'სერვისები',
    'nav.portfolio': 'პორტფოლიო',
    'nav.pricing': 'ფასები',
    'nav.contact': 'კონტაქტი',
    
    // Hero Section
    'hero.title': 'საუკეთესო საიტის დამზადება საქართველოში',
    'hero.subtitle': 'ჩვენ ვამზადებთ თანამედროვე, სწრაფ და ეფექტურ ვებსაიტებს, რომლებიც ზრდის თქვენს ბიზნესს',
    'hero.cta.primary': 'საიტის შეკვეთა',
    'hero.cta.secondary': 'დაკავშირება',
    'hero.phone': '557 91 51 46',
    'hero.stats.projects': 'დასრულებული პროექტი',
    'hero.stats.clients': 'კმაყოფილი კლიენტი',
    'hero.stats.experience': 'წლიანი გამოცდილება',
    
    // Advantages Section
    'advantages.title': 'რატომ ჩვენ?',
    'advantages.subtitle': 'ჩვენი უპირატესობები',
    'advantages.speed.title': 'სწრაფი მუშაობა',
    'advantages.speed.desc': 'საიტის დამზადება 3-7 დღეში',
    'advantages.seo.title': 'SEO ოპტიმიზაცია',
    'advantages.seo.desc': 'Google-ში #1 პოზიციისთვის',
    'advantages.support.title': '24/7 მხარდაჭერა',
    'advantages.support.desc': 'ყოველდღიური ტექნიკური მხარდაჭერა',
    'advantages.responsive.title': 'რესპონსიული დიზაინი',
    'advantages.responsive.desc': 'ყველა მოწყობილობაზე იდეალური',
    'advantages.security.title': 'უსაფრთხოება',
    'advantages.security.desc': 'SSL სერტიფიკატი და მონაცემთა დაცვა',
    'advantages.hosting.title': 'უფასო ჰოსტინგი',
    'advantages.hosting.desc': '1 წლის განმავლობაში',
    
    // Services Section
    'services.title': 'ჩვენი სერვისები',
    'services.subtitle': 'სრული სპექტრის ვებ მომსახურება',
    'services.website.title': 'ვებსაიტის დამზადება',
    'services.website.desc': 'ნებისმიერი სირთულის კორპორაცული ვებსაიტები, ონლაინ მაღაზიები, ლენდინგ გვერდები',
    'services.design.title': 'ვებ დიზაინი',
    'services.design.desc': 'თანამედროვე და მიმზიდველი დიზაინი თქვენი ბრენდისთვის',
    'services.seo.title': 'SEO ოპტიმიზაცია',
    'services.seo.desc': 'Google-ში ძიების შედეგებში მაღალი რანჟირება',
    'services.maintenance.title': 'ტექნიკური მხარდაჭერა',
    'services.maintenance.desc': 'საიტის განახლება, მოვლა და უსაფრთხოების უზრუნველყოფა',
    
    // Portfolio Section
    'portfolio.title': 'პროექტები',
    'portfolio.subtitle': 'ჩვენი ნამუშევრები',
    'portfolio.view': 'ნახვა',
    'portfolio.corp1.title': 'კორპორაციული ვებსაიტი',
    'portfolio.corp1.desc': 'თანამედროვე კორპორაციული საიტი სრული ფუნქციონალით',
    'portfolio.ecom1.title': 'ონლაინ მაღაზია',
    'portfolio.ecom1.desc': 'ელექტრონული კომერციის პლატფორმა გადახდის სისტემით',
    'portfolio.landing1.title': 'ლენდინგ გვერდი',
    'portfolio.landing1.desc': 'კონვერტაციის მაღალი განაკვეთით',
    
    // Pricing Section
    'pricing.title': 'ფასები',
    'pricing.subtitle': 'აირჩიეთ თქვენთვის შესაფერისი პაკეტი',
    'pricing.basic.title': 'საბაზისო',
    'pricing.basic.price': '500₾',
    'pricing.basic.features': '5 გვერდი|რესპონსიული დიზაინი|SEO ოპტიმიზაცია|კონტაქტის ფორმა|1 წელი ჰოსტინგი',
    'pricing.standard.title': 'სტანდარტული',
    'pricing.standard.price': '1000₾',
    'pricing.standard.features': '10 გვერდი|რესპონსიული დიზაინი|SEO ოპტიმიზაცია|კონტაქტის ფორმა|ადმინ პანელი|1 წელი ჰოსტინგი|ტექნიკური მხარდაჭერა',
    'pricing.premium.title': 'პრემიუმ',
    'pricing.premium.price': '2000₾',
    'pricing.premium.features': 'ასაწყობი გვერდები|რესპონსიული დიზაინი|SEO ოპტიმიზაცია|ონლაინ მაღაზია|გადახდის სისტემა|ადმინ პანელი|1 წელი ჰოსტინგი|24/7 მხარდაჭერა',
    'pricing.cta': 'პაკეტის შერჩევა',
    
    // Contact Section
    'contact.title': 'კონტაქტი',
    'contact.subtitle': 'მიიღეთ უფასო კონსულტაცია თქვენი ბიზნესის განსავითარებლად',
    'contact.info.title': 'საიტის დამზადება და ვებსაიტის დიზაინი',
    'contact.info.desc': 'ჩვენ ვიღებთ პასუხისმგებლობას, რომ შევქმნით ვებსაიტს, რომელიც აღემატება თქვენს მოლოდინებს. დაგვიკავშირდით და გაგვიზიარეთ თქვენი იდეა!',
    'contact.phone': 'ტელეფონი',
    'contact.email': 'ელ-ფოსტა',
    'contact.form.title': 'მოგვწერეთ',
    'contact.form.namePlaceholder': 'თქვენი სახელი *',
    'contact.form.phonePlaceholder': 'ტელეფონის ნომერი *', 
    'contact.form.emailPlaceholder': 'ელ-ფოსტა *',
    'contact.form.messagePlaceholder': 'თქვენი შეტყობინება *',
    'contact.form.sending': 'იგზავნება...',
    'contact.form.submit': 'შეტყობინების გაგზავნა',
    'contact.form.submitting': 'იგზავნება...',
    'contact.form.quick': 'სწრაფი პასუხისთვის დარეკეთ:',
    'contact.social': 'გამოგვყევით სოციალურ ქსელებში',
    
    // Contact Success Page
    'success.title': 'გმადლობთ დაინტერესებისთვის! 🎉',
    'success.subtitle': 'თქვენი შეტყობინება წარმატებით გაიგზავნა',
    'success.next.title': 'რას ელოდოთ შემდეგ?',
    'success.next.step1': '5-10 წუთში - ჩვენი სპეციალისტი დაგიკავშირდებათ',
    'success.next.step2': 'უფასო კონსულტაცია - განვიხილავთ თქვენს მოთხოვნებს',
    'success.next.step3': '24 საათში - მიიღებთ დეტალურ წინადადებას',
    'success.urgent': 'გადაუდებელი საკითხისთვის',
    'success.email.label': 'ელ-ფოსტით',
    'success.back': 'მთავარ გვერდზე დაბრუნება',
    'success.footer': 'საიტის დამზადება, ვებსაიტის დიზაინი და SEO ოპტიმიზაცია საქართველოში',
    
    // Footer
    'footer.tagline': 'საიტის დამზადება, ვებსაიტის დიზაინი და SEO ოპტიმიზაცია საქართველოში'
  },
  en: {
    // Navigation
    'nav.advantages': 'Advantages',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Best Website Development in Georgia',
    'hero.subtitle': 'We create modern, fast and effective websites that grow your business',
    'hero.cta.primary': 'Order Website',
    'hero.cta.secondary': 'Get in Touch',
    'hero.phone': '557 91 51 46',
    'hero.stats.projects': 'Completed Projects',
    'hero.stats.clients': 'Satisfied Clients',
    'hero.stats.experience': 'Years of Experience',
    
    // Advantages Section
    'advantages.title': 'Why Choose Us?',
    'advantages.subtitle': 'Our advantages',
    'advantages.speed.title': 'Fast Delivery',
    'advantages.speed.desc': 'Website ready in 3-7 days',
    'advantages.seo.title': 'SEO Optimization',
    'advantages.seo.desc': 'For #1 position in Google',
    'advantages.support.title': '24/7 Support',
    'advantages.support.desc': 'Daily technical support',
    'advantages.responsive.title': 'Responsive Design',
    'advantages.responsive.desc': 'Perfect on all devices',
    'advantages.security.title': 'Security',
    'advantages.security.desc': 'SSL certificate and data protection',
    'advantages.hosting.title': 'Free Hosting',
    'advantages.hosting.desc': 'For 1 year duration',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Full spectrum web services',
    'services.website.title': 'Website Development',
    'services.website.desc': 'Corporate websites, online stores, landing pages',
    'services.design.title': 'Web Design',
    'services.design.desc': 'Modern and attractive design for your brand',
    'services.seo.title': 'SEO Optimization',
    'services.seo.desc': 'High ranking in Google search results',
    'services.maintenance.title': 'Technical Support',
    'services.maintenance.desc': 'Website updates, maintenance and security',
    
    // Portfolio Section
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'See what websites we have created for our clients',
    'portfolio.view': 'View',
    'portfolio.corp1.title': 'Corporate Website',
    'portfolio.corp1.desc': 'Modern corporate site with full functionality',
    'portfolio.ecom1.title': 'Online Store',
    'portfolio.ecom1.desc': 'E-commerce platform with payment system',
    'portfolio.landing1.title': 'Landing Page',
    'portfolio.landing1.desc': 'With high conversion rate',
    
    // Quality Features
    'quality.high': 'High Quality',
    'quality.realtime': 'Real Time',
    'quality.fast': 'Fast',
    'quality.modern': 'Modern',
    
    // Call to Action
    'cta.ready.title': 'Ready to Get Started?',
    'cta.ready.subtitle': 'Get free consultation and stay one step ahead of competitors',
    'cta.unique.projects': 'Every project is unique and created according to the specific needs of the client',
    'cta.call.title': 'Call Now',
    'cta.call.subtitle': 'Do you have an interesting idea? Let\'s discuss the structure, design and functionality of the website together',
    'cta.chat.title': 'Talk About Project',
    
    // Pricing Section
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Choose the package that suits you',
    'pricing.intro': 'All packages include professional design, technical support and warranty',
    
    // Single Page Package
    'pricing.single.title': 'Single Page Website',
    'pricing.single.desc': 'Fast and effective website',
    'pricing.single.price': '699₾',
    'pricing.single.from': 'from',
    'pricing.single.features': '1 page|Mobile optimization|SEO optimization|Contact form|Social media integration',
    
    // Multi Page Package
    'pricing.multi.title': 'Multi-Page Website',
    'pricing.multi.desc': 'Complex website for business',
    'pricing.multi.price': '999₾',
    'pricing.multi.from': 'from',
    'pricing.multi.features': 'Multiple pages|Admin panel|Content management|Photo gallery|Blog/News',
    
    // Online Store Package
    'pricing.store.title': 'Online Store',
    'pricing.store.desc': 'Full-featured e-commerce',
    'pricing.store.price': '1799₾',
    'pricing.store.from': 'from',
    'pricing.store.features': 'Catalog|Cart|Online payment|User account|Order management',
    
    // Unique Website Package
    'pricing.unique.title': 'Unique Website',
    'pricing.unique.desc': 'Individual design and functionality',
    'pricing.unique.price': '5000₾',
    'pricing.unique.from': 'from',
    'pricing.unique.features': '100% unique design|Individual functionality|API integrations|Analytics|Unlimited technical support',
    
    'pricing.order': 'Order',
    'pricing.custom.title': 'Can\'t find a suitable package?',
    'pricing.custom.subtitle': 'Contact us for individual offer according to your needs',
    'pricing.custom.consultation': 'Individual Consultation',
    'pricing.custom.write': 'Write to Us',
    
    // Legacy pricing (keeping for backward compatibility)
    'pricing.basic.title': 'Basic',
    'pricing.basic.price': '500₾',
    'pricing.basic.features': '5 pages|Responsive design|SEO optimization|Contact form|1 year hosting',
    'pricing.standard.title': 'Standard',
    'pricing.standard.price': '1000₾',
    'pricing.standard.features': '10 pages|Responsive design|SEO optimization|Contact form|Admin panel|1 year hosting|Technical support',
    'pricing.premium.title': 'Premium',
    'pricing.premium.price': '2000₾',
    'pricing.premium.features': 'Unlimited pages|Responsive design|SEO optimization|Online store|Payment system|Admin panel|1 year hosting|24/7 support',
    'pricing.cta': 'Choose Package',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Get free consultation for your business development',
    'contact.info.title': 'Website Development and Web Design',
    'contact.info.desc': 'We take responsibility to create a website that exceeds your expectations. Contact us and share your idea!',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.title': 'Write to Us',
    'contact.form.namePlaceholder': 'Your Name *',
    'contact.form.phonePlaceholder': 'Phone Number *',
    'contact.form.emailPlaceholder': 'Email *',
    'contact.form.messagePlaceholder': 'Your Message *',
    'contact.form.sending': 'Sending...',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Sending...',
    'contact.form.quick': 'For quick response call:',
    'contact.social': 'Follow us on social media',
    
    // Contact Success Page
    'success.title': 'Thank you for your interest! 🎉',
    'success.subtitle': 'Your message was sent successfully',
    'success.next.title': 'What to expect next?',
    'success.next.step1': '5-10 minutes - Our specialist will contact you',
    'success.next.step2': 'Free consultation - We will discuss your requirements',
    'success.next.step3': '24 hours - You will receive a detailed proposal',
    'success.urgent': 'For urgent matters',
    'success.email.label': 'By email',
    'success.back': 'Back to Home',
    'success.footer': 'Website development, web design and SEO optimization in Georgia',
    
    // Footer
    'footer.tagline': 'Website development, web design and SEO optimization in Georgia'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('ka');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ka' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update document language and title
    document.documentElement.lang = lang;
    if (lang === 'en') {
      document.title = 'Website Development - Metaweb.ge | Web Design, SEO and Web Development';
    } else {
      document.title = 'საიტის დამზადება საქართველოში - Metaweb.ge | ვებსაიტის დიზაინი, SEO';
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ka']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}