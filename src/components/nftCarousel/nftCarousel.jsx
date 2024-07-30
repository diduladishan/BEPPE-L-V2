// Carousel.js
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import img1 from "../assets/nftCarousel/1.png";
import img2 from "../assets/nftCarousel/2.png";
import img3 from "../assets/nftCarousel/3.png";
import img4 from "../assets/nftCarousel/4.png";
import img5 from "../assets/nftCarousel/5.png";
import img6 from "../assets/nftCarousel/6.png";
import img7 from "../assets/nftCarousel/7.png";
import img8 from "../assets/nftCarousel/8.png";
import img9 from "../assets/nftCarousel/9.png";
// Continue importing all images up to 10-15 images

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .slick-slide img {
    width: 450px; /* Set image width */
    height: auto; /* Maintain aspect ratio */
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  // Add all imported images here
];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex items-center justify-center my-[100px] ">
        <p className="font-black text-[#652f46] text-center w-max px-16 text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] border-4 border-[#364e38] rounded-lg">
          NFT Collection
        </p>
      </div>

      <CarouselWrapper>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Carousel ${index}`} />
            </div>
          ))}
        </Slider>
      </CarouselWrapper>
    </div>
  );
};

export default Carousel;
