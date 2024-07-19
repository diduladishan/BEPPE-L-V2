import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import TextReveal from "text-reveal";
import "./rowComponent.css";

function Roadmap() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="background-example">
      {/* <div className="flex items-center justify-center pt-52">
        <div
          className=""
          style={{
            fontSize: "15rem",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            fontWeight: 700,
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <TextReveal
            text={["ROADMAP "]}
            textColor="black"
            fillColor="white"
            fillDelay={10}
            fillSpeed={200}
          />
        </div>
      </div> */}

      <div
        className="flex items-center mt-[200px] mb-[230px]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max bg-opacity-50">
          <p className="text-[80px] font-semibold text-white px-[160px] py-[35px]">
            PHASE 01
          </p>
        </div>

        <div className="bg-[#05670e] w-max bg-opacity-90">
          <p className="text-[70px] font-semibold text-white px-[100px] py-[35px]">
            Presale Launch
          </p>
        </div>
      </div>

      <div
        className="flex items-center justify-end mb-[230px]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="bg-[#05670e] w-max bg-opacity-90">
          <p className="text-[70px] font-semibold text-white px-[100px] py-[35px]">
            Presale Launch
          </p>
        </div>

        <div className="bg-[#000] w-max bg-opacity-50">
          <p className="text-[80px] font-semibold text-white px-[160px] py-[35px]">
            PHASE 2
          </p>
        </div>
      </div>

      <div
        className="flex items-center mb-[230px]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max bg-opacity-50">
          <p className="text-[80px] font-semibold text-white px-[160px] py-[35px]">
            PHASE 3
          </p>
        </div>

        <div className="bg-[#05670e] w-max bg-opacity-90">
          <p className="text-[70px] font-semibold text-white px-[100px] py-[35px]">
            Presale Launch
          </p>
        </div>
      </div>

      <div
        className="flex items-center justify-end mb-[230px]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="bg-[#05670e] w-max bg-opacity-90">
          <p className="text-[70px] font-semibold text-white px-[100px] py-[35px]">
            Presale Launch
          </p>
        </div>

        <div className="bg-[#000] w-max bg-opacity-50">
          <p className="text-[80px] font-semibold text-white px-[160px] py-[35px]">
            PHASE 4
          </p>
        </div>
      </div>

      <div
        className="flex items-center mb-[230px]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="bg-[#000] w-max bg-opacity-50">
          <p className="text-[80px] font-semibold text-white px-[160px] py-[35px]">
            PHASE 5
          </p>
        </div>

        <div className="bg-[#05670e] w-max bg-opacity-90">
          <p className="text-[70px] font-semibold text-white px-[100px] py-[35px]">
            Presale Launch
          </p>
        </div>
      </div>

      <div
        className="flex items-center justify-end"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="bg-[#05670e] w-max bg-opacity-90">
          <p className="text-[70px] font-semibold text-white px-[100px] py-[35px]">
            Presale Launch
          </p>
        </div>

        <div className="bg-[#000] w-max bg-opacity-50">
          <p className="text-[80px] font-semibold text-white px-[160px] py-[35px]">
            PHASE 6
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
