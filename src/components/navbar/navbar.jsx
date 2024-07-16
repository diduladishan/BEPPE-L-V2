import React, { useState } from "react";
import mainLogo from "../assets/navbar/main-logo.png";
import openSea from "../assets/navbar/opensea.png";
import telegram from "../assets/navbar/telegram.png";
import twitter from "../assets/navbar/twitter.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#040b25] p-4 bg-opacity-70 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="text-white text-lg font-bold">MyLogo</div> */}

        <div className="flex items-center gap-1">
          <img src={mainLogo} alt="opensea icon" className="w-[55px]" />
          <p className="text-[35px] text-[#fff] font-semibold">BEPPELOGO</p>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-16 text-[26px] font-semibold">
          <a
            href="#"
            className="block lg:inline-block lg:mt-0 text-white hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block lg:inline-block lg:mt-0 text-white hover:text-gray-300"
          >
            Mint
          </a>
          <a
            href="#"
            className="block lg:inline-block lg:mt-0 text-white hover:text-gray-300"
          >
            Wallet
          </a>
          <a
            href="#"
            className="block lg:inline-block lg:mt-0 text-white hover:text-gray-300"
          >
            RoadMap
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <img src={openSea} alt="opensea icon" className="w-[45px]" />
          <img src={telegram} alt="telegram icon" className="w-[45px]" />
          <img src={twitter} alt="twitter icon" className="w-[45px]" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu for smaller screens */}
      <div
        className={`lg:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <a
          href="#"
          className="block mt-2 text-white border-t-[1px] border-[#d34a1a] h-[60px] flex items-center font-semibold"
        >
          Home
        </a>
        <a
          href="#"
          className="block mt-2 text-white border-t-[1px] border-[#d34a1a] h-[60px] flex items-center font-semibold"
        >
          Mint
        </a>
        <a
          href="#"
          className="block mt-2 text-white border-t-[1px] border-[#d34a1a] h-[60px] flex items-center font-semibold"
        >
          Wallet
        </a>
        <a
          href="#"
          className="block mt-2 text-white border-t-[1px] border-[#d34a1a] h-[60px] flex items-center font-semibold"
        >
          RoadMap
        </a>

        <div className="flex items-center gap-6 border-t-[1px] border-[#d34a1a] h-[60px]">
          <img src={openSea} alt="opensea icon" className="w-[30px]" />
          <img src={telegram} alt="telegram icon" className="w-[30px]" />
          <img src={twitter} alt="twitter icon" className="w-[30px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
