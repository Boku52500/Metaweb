export default function Portfolio() {
  const projects = [
    {
      name: "METASHOP.GE",
      description: "ელექტრონული კომერციის ვებსაიტი",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "METASHOP.GE - ელექტრონული კომერციის ვებსაიტი",
    },
    {
      name: "BIZNESGROUP.GE",
      description: "კორპორაციული ვებსაიტი",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "BIZNESGROUP.GE - კორპორაციული ვებსაიტი",
    },
    {
      name: "RESTAURANT.GE",
      description: "რესტორნის ვებსაიტი",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "RESTAURANT.GE - რესტორნის ვებსაიტი",
    },
    {
      name: "TRAVELGEORGIA.GE",
      description: "ტურისტული სააგენტო",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "TRAVELGEORGIA.GE - ტურისტული სააგენტოს ვებსაიტი",
    },
    {
      name: "REALESTATE.GE",
      description: "უძრავი ქონების ვებსაიტი",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "REALESTATE.GE - უძრავი ქონების ვებსაიტი",
    },
    {
      name: "EDUCATION.GE",
      description: "საგანმანათლებლო პლატფორმა",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "EDUCATION.GE - საგანმანათლებლო პლატფორმა",
    },
  ];

  return (
    <section id="პორტფოლიო" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">პროექტები</h2>
          <h3 className="text-2xl text-gray-600 mb-8">ჩვენი ნამუშევრები</h3>
          <div className="gradient-line w-24 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                <p className="text-gray-600">{project.description}</p>
                <div className="gradient-line w-12 mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
