import React from "react";
import "./movingText.css";
import left from "../assets/landingSection01/left.png";
import right from "../assets/landingSection01/right.png";

const MovingText = () => {
  const textArray = new Array(30).fill(
    <div className="flex items-center bg-[#000] 2xl:border-x-8 xl:border-x-8 lg:border-x-7 md:border-x-6 sm:border-x-5 border-x-4 border-[#fff] px-1">
      <p className="font-bold 2xl:text-[28px] xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-white px-6 2xl:py-5 xl:py-5 lg:py-4 md:py-4 sm:py-3 py-2">
        BEPPE
      </p>
    </div>
  );

  return (
    <div className="ticker-wrapper bg-[#000]">
      <div className="ticker-content ">{textArray}</div>
      <div className="ticker-content ticker-content-clone">{textArray}</div>
    </div>
  );
};

export default MovingText;
