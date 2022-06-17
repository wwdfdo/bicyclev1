import React from "react";
import "./SocialFiCardsNew.css";
import socialevent from "../../images/socialeventImg.png";
import clubevent from "../../images/clubeventImg.jpg";

const SocialFiCardsNew = () => {
  return (
    <div
      id="Social"
      className="flex flex-col justify-center  mx-auto gap-3 pt-[80px] pb-20"
    >
      <h2 className="text-[#000000] font-[700] font-montserrat text-center md:text-[2.5em] text-[2.1em]">
        Social-Fi
      </h2>
      <div className="container1 w-4/5 mx-auto">
        <div className="card1 pr-2 pl-5">
          <div className="face4 face5 ">
            <div className="content1">
              <div className="icon1">
                <img src={clubevent} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#cbeaf5] face4 face6">
            <div className="content1">
              <h3 className="text-[#1f6074] text-2xl font-Montserrat font-[700]">
                Bicycle Clubs
              </h3>
              <p className="text-[#1f6074]">
                PedalPay connects to the society through cycling clubs
              </p>
            </div>
          </div>
        </div>

        <div className="card1 pr-2 pl-5">
          <div className="face4 face5 ">
            <div className="content1">
              <div className="icon1">
                <img src={socialevent} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#e0eaa4] face4 face6">
            <div className="content1">
              <h3 className="text-[#666f2a] text-2xl font-Montserrat font-[700]">
                Community Programs
              </h3>
              <p className="text-[#666f2a]">
                NFT holders meet each other, share their remarkable experience
                and build new events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFiCardsNew;
