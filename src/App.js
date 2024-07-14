import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import LandingSection01 from "./components/landingSection01/landingSection01";
import MovingText from "./components/landingSection01/logoAnimation";
import SectionTwo from "./components/sectionTwo/sectionTwo";
import SectionThree from "./components/sectionThree/sectionThree";

function App() {
  return (
    <div>
      <Navbar />
      <LandingSection01 />
      {/* <MovingText /> */}

      <SectionTwo />

      <SectionThree />
    </div>
  );
}

export default App;
