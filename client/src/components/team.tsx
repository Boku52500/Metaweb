export default function Team() {
  const teamMembers = [
    {
      name: "ნიკა მამარდაშვილი",
      position: "დამფუძნებელი",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      alt: "ნიკა მამარდაშვილი - დამფუძნებელი",
    },
    {
      name: "ანა გოგნაძე",
      position: "ვებ დეველოპერი",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      alt: "ანა გოგნაძე - ვებ დეველოპერი",
    },
    {
      name: "გიორგი კაცაძე",
      position: "ვებ დეველოპერი",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      alt: "გიორგი კაცაძე - ვებ დეველოპერი",
    },
    {
      name: "ნინო ბერიძე",
      position: "SEO სპეციალისტი",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      alt: "ნინო ბერიძე - SEO სპეციალისტი",
    },
  ];

  return (
    <section id="გუნდი" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">გუნდი</h2>
          <h3 className="text-2xl text-gray-600">გაეცანით ჩვენი გუნდი</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover text-center"
            >
              <img
                src={member.image}
                alt={member.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <div className="gradient-line w-12 mx-auto mb-4"></div>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
