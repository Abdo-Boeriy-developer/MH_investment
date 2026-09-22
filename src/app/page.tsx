// import Footer from "@/layout/Footer/Footer";
import Hero from "@/layout/Hero/Hero";
import OurServices from "@/layout/OurServices/OurServices";
import OurSolutions from "@/layout/OurSolutions/OurSolutions";
import Services from "@/layout/Services/Services";
import WhyUse from "@/layout/WhyUse/WhyUse";
import Projects from "@/Sections/contracting/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container">
        <OurServices />
      </div>
      <OurSolutions />
      <div className="container">
        <Services />
      </div>
      <WhyUse />
      <Projects />
      {/* <Footer /> */}
    </main>
  );
}
