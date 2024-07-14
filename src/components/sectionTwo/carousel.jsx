import React from "react";
import Slider from "react-slick";
import carouselSlide01 from "../assets/sectionTwo/carouselSlide01.png";
import carouselSlide02 from "../assets/sectionTwo/carouselSlide02.png";

const CarouselComponent = () => {
  const settings = {
    dots: true, // This enables the dots below the carousel
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* <h2> Carousel Example </h2> */}
      <Slider {...settings}>
        <div className="p-4">
          <img src={carouselSlide01} alt="background image" className="" />
        </div>

        <div className="p-4">
          <img src={carouselSlide02} alt="background image" className="" />
        </div>

        <div className="p-4">
          <img src={carouselSlide01} alt="background image" className="" />
        </div>

        <div className="p-4">
          <img src={carouselSlide02} alt="background image" className="" />
        </div>

        <div className="p-4">
          <img src={carouselSlide01} alt="background image" className="" />
        </div>

        <div className="p-4">
          <img src={carouselSlide02} alt="background image" className="" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
