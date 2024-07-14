import React from "react";
import backgroundImage from "../assets/landingSection01/backgroundImagesWithBranchers.png";
import MovingText from "./logoAnimation";

import topBranch from "../assets/landingSection01/top-branch.png";
import bottomBranch from "../assets/landingSection01/bottom-branch.png";

import leftBranchGroup from "../assets/landingSection01/leftBranchGroup.png";
import rightBranchGroup from "../assets/landingSection01/rightBranchGroup.png";

function LandingSection01() {
  return (
    <div>
      <div className="">
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

        <img src={backgroundImage} alt="background image" className="" />
      </div>

      <MovingText />
    </div>
  );
}

export default LandingSection01;
