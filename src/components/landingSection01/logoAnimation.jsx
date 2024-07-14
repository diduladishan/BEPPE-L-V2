// MovingText.js
import React from "react";
import "./movingText.css";

const MovingText = () => {
  const textArray = new Array(10).fill("beppe").join(" ");

  return (
    <div className="moving-container">
      <div className="moving-text">
        {textArray} {textArray} {textArray} {textArray}
      </div>
    </div>
  );
};

export default MovingText;
