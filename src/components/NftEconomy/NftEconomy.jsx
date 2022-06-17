import React from "react";
import economyImg from "../../images/nfteconomyImg2.png";

const NftEconomy = () => {
  return (
    <div
      id="Economy"
      className="flex flex-col gap-10 justify-center mx-auto w-full  pt-[80px] pb-20 bg-[#000000]"
    >
      <div className="w-4/6 mx-auto">
        <h2 className="text-textcolor font-[700] font-montserrat text-center md:text-[2.5em] text-[2.1em] mb-0 md:mt-10">
          NFT Economy
        </h2>
      </div>

      <div className="w-4/6 mx-auto">
        <img src={economyImg} alt="" />
      </div>
    </div>
  );
};

export default NftEconomy;
