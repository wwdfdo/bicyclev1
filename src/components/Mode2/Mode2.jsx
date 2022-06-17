import React from "react";

import "./Mode2.css";

import { FaSnowflake } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
import { SiEventstore } from "react-icons/si";

const Modes2 = () => {
  return (
    // <div className="flex w-5/6 justify-center gap-4 mx-auto mt-20">
    //   <div className="w-1/3 text-center border-4 border-white py-40 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
    //     <FaRunning className="neon" />
    //     <p className="neon">Solo modes running/walking/biking</p>
    //   </div>
    //   <div className="w-1/3 text-center border-4 border-white py-40">
    //     <img className="mx-auto" src={mode2} alt="" />
    //     <p>Solo modes running/walking/biking</p>
    //   </div>
    //   <div className="w-1/3 text-center border-4 border-white py-40">
    //     <img className="mx-auto" src={mode3} alt="" />
    //     <p>Solo modes running/walking/biking</p>
    //   </div>
    // </div>

    <div
      id="Modes"
      className="flex flex-col justify-center  mx-auto gap-3 mt-24"
    >
      <h2 className="text-[#000000] font-[700] font-montserrat text-center text-[2.5em] pb-16">
        Ecosystem Modes
      </h2>
      <div className="ecosystem-box flex flex-wrap justify-center  w-4/6 mx-auto">
        <div className="ecosystem-item basis-1/3 px-[15px] mb-[30px] ">
          <div className="ecosystem-content1">
            <IoIosBicycle className="text-[#ffffff] eco-img1 mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl text-center px-4">Solo-Mode</p>
          </div>
        </div>
        <div className="ecosystem-item basis-1/3 px-[15px] mb-[30px]">
          <div className="ecosystem-content1">
            <BsBriefcase className="text-[#ffffff] eco-img1 mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl text-center px-4">Worker</p>
          </div>
        </div>
        <div className="ecosystem-item basis-1/3 px-[15px] mb-[30px] ">
          <div className="ecosystem-content1">
            <GiLaurelsTrophy className="text-[#ffffff] eco-img1 mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl text-center px-4">Rasing</p>
          </div>
        </div>

        <div className="ecosystem-item basis-1/3 px-[15px] mb-[30px] ">
          <div className="ecosystem-content1">
            <SiEventstore className="text-[#ffffff] eco-img1 mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl text-center px-4">Events</p>
          </div>
        </div>
        <div className="ecosystem-item basis-1/3 px-[15px] mb-[30px] ">
          <div className="ecosystem-content1">
            <FaSnowflake className="text-[#ffffff] eco-img1 mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl text-center px-4">
              Season Event
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modes2;
