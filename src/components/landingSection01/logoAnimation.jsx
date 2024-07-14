import React from "react";
import "./movingText.css";
import left from "../assets/landingSection01/left.png";
import right from "../assets/landingSection01/right.png";

const MovingText = () => {
  const textArray = new Array(30).fill(
    <div className="flex items-center bg-[#000] border-x-8 border-[#fff] px-1">
      <p className="font-bold text-[28px] text-white px-6 py-5">BEPPE</p>
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
