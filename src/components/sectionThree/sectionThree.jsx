import React from "react";
import backgroundImage from "../assets/sectionThree/backgroundThree2.png";
import branchTop from "../assets/sectionThree/branch-top.png";

function SectionThree() {
  return (
    <div className="">
      <div className="relative">
        <img src={backgroundImage} alt="background image" className="" />

        <div className="flex items-center justify-center absolute 2xl:bottom-64 xl:bottom-56 lg:bottom-44 md:bottom-36 sm:bottom-32 bottom-12 left-[50%] right-[50%]">
          <button class="bg-transparent  text-white text-center font-bold py-[2px] sm:py-[2px] rounded-xl border-2 border-[#fff] 2xl:text-[45px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[18px] 2xl:px-16 xl:px-15 lg:px-13 md:px-13 sm:px-6 px-5">
            MINT
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
