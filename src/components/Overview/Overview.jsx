import React from "react";
import overviewImg from "../../images/Glow6.png";
import "./Overview.css";

const Overview = () => {
  return (
    <div id="Overview" className="pt-0 bg-[#000000]">
      <div className="drop-shadow-2xl py-20">
        <h2 className="text-[2.5em] font-500 font-montserrat font-bold text-center text-[#ffffff] pb-16">
          Overview
        </h2>
        <div className="flex lg:flex-row flex-col md:w-4/5 w-[90%] justify-between mx-auto items-center gap-20">
          <img className="lg:w-1/2" src={overviewImg} alt="" />
          <div className="lg:w-1/2 text-[#ffffff]  py-10 px-10 rounded-lg font-mono">
            <div>
              <h3 className=" neon text-[1.6em] mb-6 font-[600] font-montserrat">
                EXPERIENCE JUST FOR RIDER OFFER
              </h3>
            </div>
            <div>
              
              <p className="text-[1.2em] leading-relaxed font-montserrat font-400">
                Pedalpay is a tokenized sports application based on web3. Users
                can purchase NFTs in the form of virtual bicycles which are
                linked to real riding activities. By riding around, users will
                earn our in-app token, which can either be used in-app or cashed
                out for profit. Our goal is to push our community toward a
                healthier lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
