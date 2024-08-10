import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MovingText from "./logoAnimation";
import boatBackground from "../assets/romeo/boat-background.png";
import maleCharacter from "../assets/romeo/male-character.png";
import femaleCharacter from "../assets/romeo/female-character.png";
import leftGrass from "../assets/romeo/left-grass.png";
import rightGrass from "../assets/romeo/right-grass.png";
import upperGrass from "../assets/romeo/upper-grass.png";
import topic from "../assets/romeo/topic2.png";

function LandingSection01() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div>
      <div className="relative -z-20">
        <div
          className="absolute top-0 right-0"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="2000"
        >
          <img src={maleCharacter} alt="opensea icon" className="w-full" />
        </div>
        <div
          className="absolute top-0 right-0"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="2000"
        >
          <img src={femaleCharacter} alt="opensea icon" className="w-full" />
        </div>
        <div
          className="absolute top-0 right-0"
          data-aos="slide-right"
          data-aos-delay="500"
        >
          <img src={leftGrass} alt="opensea icon" className="w-full" />
        </div>
        <div
          className="absolute top-0 right-0"
          data-aos="slide-left"
          data-aos-delay="1000"
        >
          <img src={rightGrass} alt="opensea icon" className="w-full" />
        </div>
        <div className="absolute top-0 right-0" data-aos="slide-down">
          <img src={upperGrass} alt="opensea icon" className="w-full" />
        </div>
        <div
          className="absolute top-0 right-0"
          data-aos="zoom-out"
          data-aos-duration="2500"
          data-aos-delay="3000"
        >
          <img src={topic} alt="opensea icon" className="w-full" />
        </div>
        <img src={boatBackground} alt="background image" />
      </div>

      <MovingText />
    </div>
  );
}

export default LandingSection01;
