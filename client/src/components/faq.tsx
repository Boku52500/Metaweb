import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById("ხშირი-შეკითხვები");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      category: "ფასები",
      question: "რამდენი ღირს საიტის დამზადება საქართველოში?",
      answer: "საიტის დამზადების ღირებულება დამოკიდებულია პროექტის სირთულეზე. მარტივი ბიზნეს საიტი იწყება 800 ლარიდან, ხოლო რთული ონლაინ მაღაზია შეიძლება ღირდეს 2000-5000 ლარი. ყველა შემთხვევაში გვაქვს ინდივიდუალური მიდგომა."
    },
    {
      id: 2,
      category: "დრო",
      question: "რამდენ დროში მზადდება ვებსაიტი?",
      answer: "ჩვეულებრივ, მარტივი საიტის დამზადება 1-2 კვირას, ხოლო რთული პროექტები 1-2 თვეს მოითხოვს. დეტალური ვადები განისაზღვრება პროექტის ტექნიკური დავალების მიხედვით."
    },
    {
      id: 3,
      category: "მომსახურება",
      question: "ხდება თუ არა SEO ოპტიმიზაცია saitis damzadeba-ში?",
      answer: "დიახ, ყველა ჩვენ მიერ შექმნილი ვებსაიტი ოპტიმიზირებულია Google-ის საძიებო სისტემისთვის. ვუზრუნველვყოფთ ძირითად SEO-ს, რაც ხელს უწყობს თქვენი საიტის კარგ რანჟირებას."
    },
    {
      id: 4,
      category: "ტექნოლოგიები",
      question: "რა ტექნოლოგიებით ამზადებთ ვებსაიტებს?",
      answer: "ჩვენ ვიყენებთ თანამედროვე ტექნოლოგიებს: React, TypeScript, WordPress, Laravel. ყველა საიტი მობილურ მოწყობილობებზეა ადაპტირებული და სწრაფად იტვირთება."
    },
    {
      id: 5,
      category: "მხარდაჭერა",
      question: "ვებსაიტის ასწყობის შემდეგ რა მომსახურებას იღებ?",
      answer: "ვაძლევთ 3 თვის უფასო ტექნიკურ მხარდაჭერას, რაც მოიცავს შეცდომების გასწორებას და მინორულ განახლებებს. შემდგომ ვთავაზობთ წლიურ მხარდაჭერის პაკეტებს."
    },
    {
      id: 6,
      category: "ონლაინ მაღაზია",
      question: "შეგიძლიათ ონლაინ მაღაზიის გაკეთება?",
      answer: "დიახ, ვქმნით სრულყოფილ ონლაინ მაღაზიებს გადახდის სისტემებით (BoG, TBC Pay), ინვენტარის მართვით და ადმინისტრაციულ პანელით. გვაქვს გამოცდილება ყველა ტიპის E-commerce პროექტზე."
    },
    {
      id: 7,
      category: "დიზაინი",
      question: "ითვალისწინებთ თუ არა ჩემს დიზაინის მოთხოვნებს?",
      answer: "აბსოლუტურად! ჩვენ მუშაობს გამოცდილი UI/UX დიზაინერები, რომლებიც გაითვალისწინებენ თქვენს ყველა მოთხოვნას და შექმნიან უნიკალურ, თქვენი ბრენდისთვის შესაფერის დიზაინს."
    },
    {
      id: 8,
      category: "კონკურენცია",
      question: "როგორ გაარჩევ თქვენს სერვისს კონკურენტებისგან?",
      answer: "ჩვენ გვქვს ყველაზე გამოცდილი გუნდი საქართველოში, ვიყენებთ უახლეს ტექნოლოგიებს, ვაძლევთ სრულ გარანტიას და ხელმისაწვდომ ფასებს. ყველა კლიენტი იღებს 24/7 მხარდაჭერას."
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  return (
    <section id="ხშირი-შეკითხვები" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-georgian">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              ხშირი შეკითხვები
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-georgian mb-6 sm:mb-8">
            საიტის დამზადების შესახებ ყველაზე ხშირი კითხვების პასუხები
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between group"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center mb-2">
                        <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text px-3 py-1 bg-blue-50 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-georgian group-hover:text-blue-600 transition-colors duration-300">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 transform transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-blue-600 transform transition-all duration-300 group-hover:scale-110" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <div className="w-full h-px bg-gradient-to-r from-blue-100 to-purple-100 mb-4 sm:mb-6"></div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-georgian">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-georgian">
                ვერ იპოვეთ პასუხი თქვენს კითხვაზე?
              </h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 font-georgian text-white/90">
                დაგვიკავშირდით და მიიღეთ უფასო კონსულტაცია საიტის დამზადების შესახებ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+995557915146"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian group"
                >
                  <span className="group-hover:animate-pulse mr-3">📞</span>
                  დარეკეთ ახლავე
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById("კონტაქტი");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian group"
                >
                  <span className="group-hover:animate-bounce mr-3">💬</span>
                  მოგვწერეთ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}