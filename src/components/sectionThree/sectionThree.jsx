import React from "react";
import backgroundImage from "../assets/sectionThree/backgroundThree.png";
import branchTop from "../assets/sectionThree/branch-top.png";

function SectionThree() {
  return (
    <div className="bg-[#000]">
      <div className="relative">
        <div className="absolute top-[-100px]">
          <img src={branchTop} alt="branches image" className="" />
        </div>

        <img src={backgroundImage} alt="background image" className="" />

        <div className="flex items-center justify-center absolute bottom-16 left-[50%]">
          <button class="bg-transparent  text-white font-bold py-1 px-16 text-[45px] rounded-xl border-2 border-[#fff]">
            MINT
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
