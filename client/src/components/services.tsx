export default function Services() {
  const services = [
    {
      icon: "fas fa-code",
      title: "ვებ-გვერდის დამზადება",
      description:
        "ჩვენ ვქმნით თანამედროვე, ფუნქციურ და მომხმარებელზე ორიენტირებულ ვებ-გვერდებს, რომლებიც მოერგება თქვენს ბიზნესის საჭიროებებს.",
    },
    {
      icon: "fas fa-paint-brush",
      title: "ვებსაიტის დიზაინი",
      description:
        "უნიკალური და მომხიბვლელი დიზაინი, რომელიც ასახავს თქვენი ბრენდის იდენტობას და მაქსიმალურად აღიქმება მომხმარებლების მიერ.",
    },
    {
      icon: "fas fa-search",
      title: "SEO ოპტიმიზაცია",
      description:
        "SEO მომსახურება, რომელიც უზრუნველყოფს თქვენი ვებ-გვერდის უკეთეს ხილვადობას საძიებო სისტემებში და ზრდის ორგანული ტრაფიკის მოცულობას.",
    },
    {
      icon: "fas fa-cogs",
      title: "ზედამხედველობა",
      description:
        "გთავაზობთ ვებ-გვერდის ზედამხედველობის სერვისს, რათა უზრუნველვყოთ მისი სტაბილური მუშაობა და უსაფრთხოება.",
    },
  ];

  return (
    <section id="სერვისები" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">ჩვენი სერვისები</h2>
          <p className="text-xl text-gray-600">სრული სპექტრის ციფრული გადაწყვეტილებები</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${service.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
