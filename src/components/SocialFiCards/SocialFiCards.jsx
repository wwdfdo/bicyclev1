import React from "react";

import { IoIosBicycle } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";

import "./SocialFiCards.css";

const SocialFiCards = () => {
  return (
    <div
      id="Social"
      className="flex flex-col justify-center  mx-auto gap-3 pt-[80px] pb-20"
    >
      <h2 className="text-[#000000] font-[700] font-montserrat text-center md:text-[2.5em] text-[2.1em]">
        Social-Fi
      </h2>
      <div className="container1 w-4/5 mx-auto">
        <div className="card1">
          <div className="faceo face4">
            <div className="content1">
              <div className="icon">
                <IoIosBicycle className="text-[#fff] text-6xl relative" />
              </div>

              <h3>Bicycle Clubs</h3>
            </div>
          </div>
          <div className="faceo face5">
            <div className="content1">
              <p>PedalPay connects to the society through cycling clubs</p>
            </div>
          </div>
        </div>

        <div className="card1">
          <div className="faceo face4">
            <div className="content1">
              <div className="icon">
                <CgCommunity className="text-[#fff] text-6xl relative" />
              </div>

              <h3>Community Programs</h3>
            </div>
          </div>
          <div className="faceo face5">
            <div className="content1">
              <p>
                NFT holders meet each other, share their remarkable experience
                and build new events{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFiCards;
