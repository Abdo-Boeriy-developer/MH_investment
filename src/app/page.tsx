// import Footer from "@/_Components/Footer/Footer";
// import Header from "@/_Components/Header/Header";
import Hero from "@/_Components/Hero/Hero";
import OurServices from "@/_Components/OurServices/OurServices";
import OurSolutions from "@/_Components/OurSolutions/OurSolutions";
import Projects from "@/_Components/projects/Projects";
import Services from "@/_Components/Services/Services";
import WhyUse from "@/_Components/WhyUse/WhyUse";

export default function Home() {
  return (
    <>
      <h1>
        {/* <Header /> */}
        <Hero />
        <div className="container">
          <OurServices />
        </div>
        <OurSolutions />
        <div className="container">
          <Services />
        </div>
        <WhyUse />
        <div className="container">
          <Projects />
        </div>
        {/* <Footer /> */}
      </h1>
    </>
  );
}
