import React from "react";
import { FaSnowflake } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
import { SiEventstore } from "react-icons/si";
import "./EcosystemCards.css";

const EcosystemCards = () => {
  return (
    <div
      id="Modes"
      className="flex flex-col justify-center  mx-auto gap-3 pt-[80px] pb-20"
    >
      <h2 className="text-[#000000] font-[700] font-montserrat text-center md:text-[2.5em] text-[2.1em] pb-5">
        Ecosystem Modes
      </h2>
      <div className="container w-4/5 mx-auto">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <IoIosBicycle className="text-[#fff] text-6xl relative" />
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
                Users can earn money while cycling between their residences and
                work places.{" "}
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
                Users/Organizations can arrange special cycling occasion . Also
                participants can earn without any rush{" "}
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
                Users can earn money while participate global seasonal event and
                having fun !{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemCards;
