import React from "react";
import backgroundImage from "../assets/sectionThree/backgroundThree.png";
import branchTop from "../assets/sectionThree/branch-top.png";

function SectionThree() {
  return (
    <div className="bg-[#000]">
      <div>
        <img
          src={branchTop}
          alt="background image"
          className="border border-[#ff3668]"
        />
      </div>

      <div className="relative">
        <img
          src={backgroundImage}
          alt="background image"
          className="border border-[#ff3668]"
        />

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
