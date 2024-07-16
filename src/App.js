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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <LandingSection01 />
      <SectionTwo />
      <SectionThree />
      {/* <SectionFour /> */}

      <Roadmap />
      {/* <div className="relative">
        <div className="absolute top-0  w-full">
          <Navbar />
        </div>
        <LandingSection01 />
      </div> */}

      {/* <MovingText /> */}
      {/* <SectionTwo />
      <SectionThree />
      <SectionFour /> */}
    </div>
  );
}

export default App;
