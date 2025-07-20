import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Advantages from "@/components/advantages";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Advantages />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
