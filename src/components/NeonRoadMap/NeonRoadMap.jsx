import React from "react";
import NeonRoadMapImg from "../../images/neonroadmap8.jpg";

const NeonRoadMap = () => {
  return (
    <div id="Roadmap" className="w-full relative pt-[80px]">
      <div className="bg-[#000]">
        <h2 className="text-textcolor font-[700] font-montserrat text-center md:text-[2.5em] text-[2.1em] md:absolute md:left-[50%] md:p-0 pt-8 md:-ml-24 md:mt-10">
          Road Map
        </h2>
        <img src={NeonRoadMapImg} alt="" />
      </div>
    </div>
  );
};

export default NeonRoadMap;
