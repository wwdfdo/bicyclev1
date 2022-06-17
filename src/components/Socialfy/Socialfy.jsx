import React from "react";
import "./Socialfy.css";
import { IoIosBicycle } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";

const Socialfy = () => {
  return (
    <div
      id="Social"
      className="flex flex-col justify-center  mx-auto gap-3 pt-[80px] pb-20"
    >
      <h2 className="text-[#000000] font-[700] font-montserrat text-center text-[2.5em] pb-16">
        Social-Fi
      </h2>
      <div className="flex md:flex-row flex-col  md:w-2/5 w-4/5  gap-10 justify-center mx-auto">
        <div className="ecosystem-item px-[10px] md:w-[420px] w-full mx-auto my-[20px] ">
          <div className="ecosystem-content pt-[54px] px-[20px] pb-[60px] relative h-[100%] text-center ">
            <IoIosBicycle className="text-[#000000] eco-img mx-auto mb-10 text-[8rem]" />
            <p className="text-[#000000] text-xl px-4">Bicycle Clubs</p>
          </div>
        </div>
        <div className="ecosystem-item px-[10px] md:w-[420px] w-full mx-auto my-[20px] ">
          <div className="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
            <CgCommunity className="text-[#000000] eco-img mx-auto mb-10 text-[8rem]" />
            <p className="text-[#000000] text-xl px-4">Community Programs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialfy;
