import React from "react";
import "./Cards.css";
import { FaSnowflake } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
import { SiEventstore } from "react-icons/si";

const Cards = () => {
  return (
    <div
      id="Modes"
      className="flex flex-col justify-center  mx-auto gap-3 mt-20 pt-[80px] pb-20"
    >
      <h2 className="text-[#000000] font-[700] font-montserrat text-center text-[2.5em] pb-5">
        Ecosystem Modes
      </h2>
      <div className="container w-4/5 mx-auto">
        <div className="card">
          <div className="icon">
            <FaSnowflake className="text-[#000] text-6xl relative" />
          </div>

          <div className="content text-[#fff]">
            <h2 className="font-[600] font-montserrat text-[1.2rem] my-5 ">
              Solo-Mode
            </h2>
            <p className="font-[500] font-montserrat">
              Lorem Ipsum is simply dummy text of the printing and typeset
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <IoIosBicycle className="text-[#000] text-6xl relative" />
          </div>
          <div className="content text-[#fff]">
            <h2 className="font-[600] font-montserrat text-[1.2rem] my-5">
              Worker
            </h2>
            <p className="font-[500] font-montserrat">
              Lorem Ipsum is simply dummy text of the printing and typeset
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <BsBriefcase className="text-[#000] text-6xl relative" />
          </div>
          <div className="content text-[#fff]">
            <h2 className="font-[600] font-montserrat text-[1.2rem] my-5">
              Rasing
            </h2>
            <p className="font-[500] font-montserrat">
              Lorem Ipsum is simply dummy text of the printing and typeset
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <GiLaurelsTrophy className="text-[#000] text-6xl relative" />
          </div>
          <div className="content text-[#fff]">
            <h2 className="font-[600] font-montserrat text-[1.2rem] my-5">
              Special Events
            </h2>
            <p className="font-[500] font-montserrat">
              Lorem Ipsum is simply dummy text of the printing and typeset
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <SiEventstore className="text-[#000] text-6xl relative" />
          </div>
          <div className="content text-[#fff]">
            <h2 className="font-[600] font-montserrat text-[1.2rem] my-5">
              Seasonal Events
            </h2>
            <p className="font-[500] font-montserrat">
              Lorem Ipsum is simply dummy text of the printing and typeset
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
