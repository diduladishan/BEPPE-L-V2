import React from "react";
import CarouselComponent from "./carousel";

function SectionTwo() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-4 py-16">
        <div className="px-16">
          <div>
            <p className="text-[50px] font-black">WHAT IS BEPPE?</p>
            <p className="text-[20px]">
              Immerse yourself in the mystical world of 'Ethereal Dreams,' a
              mesmerizing digital artwork that transcends the boundaries of
              reality and fantasy. This NFT captures the essence of otherworldly
              beauty, with intricate details and vibrant colors that evoke a
              sense of wonder and enchantment. Own a piece of the digital realm
              and let 'Ethereal Dreams' inspire your imagination.
            </p>
          </div>
        </div>

        <div className="px-8">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
