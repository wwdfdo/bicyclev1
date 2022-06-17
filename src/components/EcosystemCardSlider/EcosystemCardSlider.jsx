import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./EcosystemCardSlider.css";
import { ecosystemCardsArray } from "../../arrays/ecosystemCardsArray";
import { useState } from "react";

const EcosystemCardSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow  absolute cursor-pointer z-10 text-[#000] lg:right-[0] right-0 top-[50%] hover:text-[#68edff] next text-4xl"
        onClick={onClick}
      >
        <IoIosArrowForward className="hidden md:block" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow  absolute cursor-pointer z-10 text-[#000] lg:left-[0] left-0 top-[50%] hover:text-[#68edff] prev text-4xl"
        onClick={onClick}
      >
        <IoIosArrowBack className="hidden md:block" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="Modes"
      className="flex flex-col justify-center  mx-auto gap-3 pt-[80px] pb-20"
    >
      <h2 className="text-[#000000] font-[700] font-montserrat text-center md:text-[2.5em] text-[2.1em]">
        Ecosystem Modes
      </h2>
      <div className="container w-4/5 mx-auto">
        <Slider {...settings}>
          {ecosystemCardsArray.map((card, idx) => (
            <div
              key={idx}
              className={`${
                idx === imageIndex ? "slide activeSlide" : "slide"
              } `}
            >
              <div className="card pr-2 pl-5">
                <div className="face face1 ">
                  <div className="content">
                    <div className="icon">
                      <img src={card.img} alt="" />
                    </div>
                  </div>
                </div>
                <div className={`${card.background} face face2`}>
                  <div className="content">
                    <h3
                      className={`${card.color} text-2xl font-Montserrat font-[700] `}
                    >
                      {card.heading}
                    </h3>
                    <p className={`${card.textColor}`}>{card.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EcosystemCardSlider;
