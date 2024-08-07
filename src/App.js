import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import LandingSection01 from "./components/landingSection01/landingSection01";
import MovingText from "./components/landingSection01/logoAnimation";
import SectionTwo from "./components/sectionTwo/sectionTwo";
import SectionThree from "./components/sectionThree/sectionThree";
import SectionFour from "./components/sectionFour/sectionFour";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TextAnimation from "./components/roadmap/roadmap";
import AnimatedText from "./components/roadmap/roadmap";
import Roadmap from "./components/roadmap/roadmap";
import NftCarousel from "./components/nftCarousel/nftCarousel";
import Carousel from "./components/nftCarousel/nftCarousel";
import Accordion from "./components/faq/faq";
import Intro from "./components/intro/intro";
import Footer from "./components/footer/footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* <Intro /> */}
      <Navbar />
      <LandingSection01 />
      <SectionTwo />
      <SectionThree />
      <Carousel />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
