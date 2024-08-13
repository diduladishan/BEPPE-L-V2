import React from "react";
import backgroundImage from "../assets/sectionThree/backgroundThree3.png";
import "./button.css";

function SectionThree() {
  return (
    <div className="bg-transparent">
      <div className="relative">
        <img src={backgroundImage} alt="background image" className="" />

        <div className="flex items-center justify-center absolute 2xl:bottom-64 xl:bottom-56 lg:bottom-44 md:bottom-36 sm:bottom-32 bottom-12 left-[50%] right-[50%] cursor-pointer">
          <div>
            <div className="flex justify-center items-center">
              <p className="text-center font-bold text-black bg-[#fff] opacity-90 rounded-xl border-2 border-[#fff] w-max px-3 text-[16px] sm:text-[20px] mb-6">
                SOL 0.8
              </p>
            </div>

            <div class="button-neon button-1 bg-[#fff] opacity-80  rounded-xl border-2 border-[#fff] 2xl:px-16 xl:px-15 lg:px-13 md:px-13 sm:px-6 px-5">
              <p className="text-black text-center font-bold py-[2px] sm:py-[2px]  2xl:text-[45px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[18px]">
                Mint
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
