import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import LandingSection01 from "./components/landingSection01/landingSection01";
import MovingText from "./components/landingSection01/logoAnimation";
import SectionTwo from "./components/sectionTwo/sectionTwo";
import SectionThree from "./components/sectionThree/sectionThree";
import SectionFour from "./components/sectionFour/sectionFour";

function App() {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute top-0  w-full">
          <Navbar />
        </div>
        <LandingSection01 />
      </div>

      {/* <MovingText /> */}
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;
