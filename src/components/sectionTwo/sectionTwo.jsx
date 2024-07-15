import React, { useEffect } from "react";
import CarouselComponent from "./carousel";
import AOS from "aos";
import "aos/dist/aos.css";

function SectionTwo() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div class="grid grid-cols-2 gap-4 py-16">
        <div className="px-16">
          <div>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="text-[50px] font-black">WHAT IS BEPPE?</p>
              <p className="text-[20px]">
                Immerse yourself in the mystical world of 'Ethereal Dreams,' a
                mesmerizing digital artwork that transcends the boundaries of
                reality and fantasy. This NFT captures the essence of
                otherworldly beauty, with intricate details and vibrant colors
                that evoke a sense of wonder and enchantment. Own a piece of the
                digital realm and let 'Ethereal Dreams' inspire your
                imagination.
              </p>
            </div>
          </div>
        </div>

        <div
          className="px-8"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
