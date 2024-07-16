import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Roadmap() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mb-[100px]">
      <div
        className="flex items-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max">
          <p className="text-[80px] font-semibold text-white">PHASE 1</p>
        </div>

        <div className="bg-[#65e66c] w-max">
          <p className="text-[80px] font-semibold text-white">Presale Launch</p>
        </div>
      </div>

      <div
        className="flex items-center justify-end"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max">
          <p className="text-[80px] font-semibold text-white">PHASE 2</p>
        </div>

        <div className="bg-[#65e66c] w-max">
          <p className="text-[80px] font-semibold text-white">
            Presale Launch 2
          </p>
        </div>
      </div>

      <div
        className="flex items-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max">
          <p className="text-[80px] font-semibold text-white">PHASE 3</p>
        </div>

        <div className="bg-[#65e66c] w-max">
          <p className="text-[80px] font-semibold text-white">Presale Launch</p>
        </div>
      </div>

      <div
        className="flex items-center justify-end"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max">
          <p className="text-[80px] font-semibold text-white">PHASE 4</p>
        </div>

        <div className="bg-[#65e66c] w-max">
          <p className="text-[80px] font-semibold text-white">
            Presale Launch 2
          </p>
        </div>
      </div>

      <div
        className="flex items-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max">
          <p className="text-[80px] font-semibold text-white">PHASE 5</p>
        </div>

        <div className="bg-[#65e66c] w-max">
          <p className="text-[80px] font-semibold text-white">Presale Launch</p>
        </div>
      </div>

      <div
        className="flex items-center justify-end"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max">
          <p className="text-[80px] font-semibold text-white">PHASE 6</p>
        </div>

        <div className="bg-[#65e66c] w-max">
          <p className="text-[80px] font-semibold text-white">
            Presale Launch 2
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
