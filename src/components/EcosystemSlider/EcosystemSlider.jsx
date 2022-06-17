import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
// import { IoIosBicycle } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
import { SiEventstore } from "react-icons/si";
import "./EcosystemSlider.css";
import ecoslide1 from "../../images/ecosystemsliderimage1.png";

const EcosystemSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute lg:right-[36.5%] lg:block hidden -bottom-7 z-10 text-[#73f59b] p-1 rounded-3xl bg-slate-100  hover:text-[#68edff] next text-md"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute -bottom-7 lg:left-[36.5%] lg:block hidden z-10 text-[#73f59b]  p-1 rounded-3xl bg-slate-100  hover:text-[#68edff] prev text-md"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    centerPadding: 40,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      <h2 className="text-[#000000] font-[700] font-montserrat text-center md:text-[2.5em] text-[2.1em] pb-5">
        Ecosystem Modes
      </h2>
      <div className="container w-4/5 mx-auto">
        <Slider {...settings}>
          <div className="card w-[300px] pr-2 pl-5">
            <div className="face face1 ">
              <div className="content">
                <div className="icon">
                  <img src={ecoslide1} alt="" />
                </div>

                <h3>Solo-Mode</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>Users can earn money from day-to-day cycling. </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <BsBriefcase className="text-[#fff] text-6xl relative" />
                </div>

                <h3>Worker</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Users can earn money while cycling between their residences
                  and work places.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <GiLaurelsTrophy className="text-[#fff] text-6xl relative" />
                </div>

                <h3>Racing</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Great opportunity to users can earn money whatever win or loss
                  their race.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <SiEventstore className="text-[#fff] text-6xl relative" />
                </div>

                <h3>Special Events</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Users/Organizations can arrange special cycling occasion .
                  Also participants can earn without any rush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <FaSnowflake className="text-[#fff] text-6xl relative" />
                </div>
                <h3>Seasonal Events</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Users can earn money while participate global seasonal event
                  and having fun !{" "}
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default EcosystemSlider;
