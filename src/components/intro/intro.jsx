import React, { useEffect, useState } from "react";
import doorLeft from "../assets/intro/door-left.png";
import doorRight from "../assets/intro/door-right.png";

function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the transform value based on scroll position
  const maxScroll = 1800; // Maximum scroll value at which the doors are fully open
  const leftTransform = Math.min((scrollY / maxScroll) * 100, 100); // Percentage from 0% to 100%
  const rightTransform = Math.min((scrollY / maxScroll) * 100, 100); // Percentage from 0% to 100%

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={doorLeft}
        alt="door left"
        className="absolute left-0 top-0 w-[1900px] transition-transform duration-500"
        style={{
          transform: `translateX(-${leftTransform}%)`,
        }}
      />
      <img
        src={doorRight}
        alt="door right"
        className="absolute right-0 top-0 w-[1900px] transition-transform duration-500"
        style={{
          transform: `translateX(${rightTransform}%)`,
        }}
      />
    </div>
  );
}

export default Intro;
