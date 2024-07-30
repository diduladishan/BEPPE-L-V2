import React from "react";
import openSea from "../assets/navbar/opensea.png";
import telegram from "../assets/navbar/telegram.png";
import twitter from "../assets/navbar/twitter.png";

function Footer() {
  return (
    <div className="bg-black pt-16 pb-8">
      <p className="text-[55px] text-[#98979d] font-black text-center">LOGO</p>
      <p className="text-[55px] text-[#98979d] font-black text-center">BEPPE</p>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center px-12">
        <div className="flex items-center gap-6 h-[60px]">
          <img
            src={openSea}
            alt="opensea icon"
            className="w-[40px] transform cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out"
          />
          <img
            src={telegram}
            alt="telegram icon"
            className="w-[40px] transform cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out"
          />
          <img
            src={twitter}
            alt="twitter icon"
            className="w-[40px] transform cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out"
          />
        </div>
        <div>
          <p className="text-white text-[20px] text-center lg:text-right">
            Copyright © 2024 BEPPE. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
