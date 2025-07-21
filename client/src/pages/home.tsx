import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Advantages from "@/components/advantages";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Pricing from "@/components/team";
import FAQ from "@/components/faq";
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
      <Pricing />
      {/* <FAQ /> */}
      <Contact />
      <Footer />
    </main>
  );
}
