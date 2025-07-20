import { Button } from "@/components/ui/button";
import Counter from "./counter";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("კონტაქტი");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">საიტის დამზადება</h1>
            <h2 className="text-2xl lg:text-3xl mb-8 text-white/90">
              საუკეთესო ხარისხი ხელმისაწვდომ ფასად
            </h2>
            <p className="text-xl mb-8 text-white/80">
              ჩვენი გუნდი ეხმარება კომპანიებს იპოვონ თავიანთი ადგილი ციფრულ სამყაროში.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                სწრაფი შეკვეთა
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <a href="tel:+995568694879">
                  <i className="fas fa-phone mr-2"></i>568 69 48 79
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Counter target={7} />
                <div className="text-white/80">წლიანი გამოცდილება</div>
              </div>
              <div className="text-center">
                <Counter target={150} />
                <div className="text-white/80">კმაყოფილი კლიენტი</div>
              </div>
              <div className="text-center">
                <Counter target={350} />
                <div className="text-white/80">წარმატებული პროექტი</div>
              </div>
              <div className="text-center">
                <Counter target={15} />
                <div className="text-white/80">გუნდის წევრი</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Metaweb - საიტის დამზადება და ვებსაიტის დიზაინი"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
