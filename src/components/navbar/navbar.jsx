import React from "react";
import mainLogo from "../assets/navbar/main-logo.png";
import openSea from "../assets/navbar/opensea.png";
import telegram from "../assets/navbar/telegram.png";
import twitter from "../assets/navbar/twitter.png";

function Navbar() {
  return (
    <div className="grid grid-cols-12 bg-[#000] bg-opacity-50  place-items-center py-4">
      <div className="col-span-3">
        <div className="flex items-center gap-1">
          <img src={mainLogo} alt="opensea icon" className="w-[65px]" />
          <p className="text-[#fff] text-[50px] font-semibold">BEPPELOGO</p>
        </div>
      </div>

      <div className="col-span-6">
        <div className="text-[#fff] text-[30px] font-semibold flex items-center justify-center gap-16">
          <p>Home</p>
          <p>Mint</p>
          <p>Wallet</p>
          <p>Roadmap</p>
        </div>
      </div>

      <div className="col-span-3">
        <div className="flex items-center gap-6">
          {/* social media icons */}
          <div className="flex items-center gap-6">
            <img src={openSea} alt="opensea icon" className="w-[45px]" />
            <img src={telegram} alt="telegram icon" className="w-[45px]" />
            <img src={twitter} alt="twitter icon" className="w-[45px]" />
          </div>

          {/* navbar buttons */}
          {/* <div className="flex items-center gap-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button 1
            </button>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button 2
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
