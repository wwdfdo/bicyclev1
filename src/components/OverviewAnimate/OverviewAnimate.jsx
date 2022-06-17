import React from "react";
import "./OverviewAnimate.css";
import overviewImg from "../../images/overviewglowImage.png";

const OverviewAnimate = () => {
  return (
    <div id="Overview" className=" pt-[80px] pb-20 bg-[#000000]">
      <div className="drop-shadow-2xl">
        <div>
          <h2 className="md:text-[2.5em] text-[2.1em] font-500 font-montserrat font-bold text-center text-titlecolor pb-16">
            Overview
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col md:w-5/6 w-[90%] justify-between mx-auto items-center gap-20">
          <img className="lg:w-1/2" src={overviewImg} alt="" />
          <div className=" box md:w-1/2 w-full h-[140%] text-titlecolor py-10 px-10 rounded-lg font-mono">
            <div className="z-10 text-[#ffffff]">
              <div>
                <h3 className="neon md:text-[1.45em] text-[1em] mb-6 font-[600] font-montserrat">
                  EXPERIENCE JUST FOR RIDER OFFER
                </h3>
              </div>
              <div>
                <p className="neon md:leading-loose leading-[1.5] text-semibold font-400 font-montserrat md:text-lg md:text-[1.2em] text-[0.9em]  ">
                  Pedalpay is a tokenized sports application based on web3.
                  Users can purchase NFTs in the form of virtual bicycles which
                  are linked to real riding activities. By riding around, users
                  will earn our in-app token, which can either be used in-app or
                  cashed out for profit. Our goal is to push our community
                  toward a healthier lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewAnimate;
