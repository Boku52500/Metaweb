export default function Advantages() {
  const advantages = [
    {
      icon: "fas fa-award",
      title: "პროფესიონალიზმი",
      description: "7 წლიანი გამოცდილება ვებსაიტების დამზადებაში",
    },
    {
      icon: "fas fa-clock",
      title: "პუნქტუალურობა",
      description: "ყველა პროექტი ეწყობა დადგენილ ვადებში",
    },
    {
      icon: "fas fa-lightbulb",
      title: "კრეატიულობა",
      description: "უნიკალური და ინოვაციური დიზაინის გადაწყვეტილებები",
    },
    {
      icon: "fas fa-rocket",
      title: "ინოვაციურობა",
      description: "უახლესი ტექნოლოგიები და ტრენდები",
    },
    {
      icon: "fas fa-shield-alt",
      title: "სანდოობა",
      description: "150+ კმაყოფილი კლიენტი და გაგრძელებული თანამშრომლობა",
    },
    {
      icon: "fas fa-star",
      title: "ხარისხი",
      description: "მაღალი ხარისხის სტანდარტები ყველა პროექტში",
    },
  ];

  return (
    <section id="უპირატესობები" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">რატომ ჩვენ?</h2>
          <h3 className="text-2xl text-gray-600">ჩვენი უპირატესობები</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm card-hover text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${advantage.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-xl font-semibold mb-4">{advantage.title}</h4>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
