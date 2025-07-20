import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "შეტყობინება გაგზავნილია",
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
    <section id="კონტაქტი" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">დაგვიკავშირდით</h2>
          <p className="text-xl text-gray-300">
            მიიღეთ უფასო კონსულტაცია თქვენი ბიზნესის გასაძლიერებლად
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                საიტის დამზადება და ვებსაიტის დიზაინი
              </h3>
              <p className="text-gray-300 mb-8">
                ჩვენ ვიღებთ ვალდებულებას, რომ შევქმნათ ვებსაიტი, რომელიც აღემატება თქვენს
                მოლოდინს. დაგვიკავშირდით და მოგვითხარით თქვენი იდეა!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <p className="text-gray-400">ტელეფონი</p>
                    <a
                      href="tel:+995568694879"
                      className="text-xl font-semibold hover:text-primary transition-colors"
                    >
                      568 69 48 79
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <p className="text-gray-400">ელ-ფოსტა</p>
                    <a
                      href="mailto:info@metaweb.ge"
                      className="text-xl font-semibold hover:text-primary transition-colors"
                    >
                      info@metaweb.ge
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <p className="text-gray-400">მისამართი</p>
                    <p className="text-xl font-semibold">თბილისი, საქართველო</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-2xl font-semibold mb-6">სწრაფი კონტაქტი</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="თქვენი სახელი"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="ტელეფონის ნომერი"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="ელ-ფოსტა"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="თქვენი შეტყობინება"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? "იგზავნება..." : "შეტყობინების გაგზავნა"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
