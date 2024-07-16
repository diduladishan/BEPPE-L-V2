import React, { useEffect } from "react";
import CarouselComponent from "./carousel";
import AOS from "aos";
import "aos/dist/aos.css";

function SectionTwo() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="2xl:px-16 xl:px-15 lg:px-13 md:px-12 sm:px-10 px-8">
      <div class="grid grid-cols-2 2xl:gap-16 xl:gap-14 lg:gap-12 md:gap-10 sm:gap-8 gap-6 py-16">
        <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2">
          <div className="bg-[#a2e969]">
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="2xl:text-[50px] xl:text-[45px] lg:text-[40px] md:text-[36px] sm:text-[32px] text-[28px] font-black">
                WHAT IS BEPPE?
              </p>
              <p className="2xl:text-[20px] xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px]">
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
          className="px-8 bg-[#e9c169] 2xl:col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2"
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
