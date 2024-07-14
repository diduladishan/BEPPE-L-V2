import React from "react";
import backgroundImage from "../assets/landingSection01/backgroundImage.png";
import MovingText from "./logoAnimation";

import left from "../assets/landingSection01/left.png";
import right from "../assets/landingSection01/right.png";

function LandingSection01() {
  return (
    <div>
      <div>
        <img src={backgroundImage} alt="background image" className="" />
      </div>
      {/* 
      <div className="flex items-center gap-2 bg-[#000] border-2 border-indigo-600">
        <p className="font-bold text-[28px] text-white">BEPPE</p>
      </div> */}
      <MovingText />
    </div>
  );
}

export default LandingSection01;
