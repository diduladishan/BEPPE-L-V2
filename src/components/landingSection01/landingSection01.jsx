import { React, useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import backgroundImage from "../assets/landingSection01/backgroundImagesWithBranchers.png";
import MovingText from "./logoAnimation";

import topBranch from "../assets/landingSection01/top-branch.png";
import bottomBranch from "../assets/landingSection01/bottom-branch.png";

import leftBranchGroup from "../assets/landingSection01/leftBranchGroup.png";
import rightBranchGroup from "../assets/landingSection01/rightBranchGroup.png";

import boatBackground from "../assets/romeo/boat-background.png";
import maleCharacter from "../assets/romeo/male-character.png";
import femaleCharacter from "../assets/romeo/female-character.png";
import leftGrass from "../assets/romeo/left-grass.png";
import rightGrass from "../assets/romeo/right-grass.png";
import upperGrass from "../assets/romeo/upper-grass.png";
import topic from "../assets/romeo/topic.png";

import "./test.css";

function LandingSection01() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      {/* <div>
        <div class="page-bg"></div>

        <div class="animation-wrapper">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
          <div class="particle particle-3"></div>
          <div class="particle particle-4"></div>
        </div>
      </div> */}

      <div className="relative -z-20">
        {/* <div className="absolute top-[-60px] right-0">
          <img src={topBranch} alt="opensea icon" className="w-full" />
        </div> */}

        {/* <div className="absolute bottom-[-100px] right-0">
          <img src={bottomBranch} alt="opensea icon" className="w-full" />
        </div> */}

        {/* <div className="absolute bottom-[-70px] left-0">
          <img src={leftBranchGroup} alt="opensea icon" className="w-full" />
        </div>

        <div className="absolute bottom-[70px] right-0">
          <img src={rightBranchGroup} alt="opensea icon" className="w-full" />
        </div> */}
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
