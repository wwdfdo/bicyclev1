import React from "react";
import gps from "../../../images/gps.svg";
import greenzone from "../../../images/greenZone.png";
import earning1 from "../../../images/earning1.svg";
import earning2 from "../../../images/earning2.svg";
// import mobileapp4 from "../../../images/mobileapp4.png";
import marketplace5 from "../../../images/marketplace5.png";

const HowToPlay5 = () => {
  return (
    <div>
      <div className="w-5/6 mx-auto font-Montserrat">
        <div>
          <h2 className="text-center text-[2.5em] font-[500]">
            5, MEASURE RUNNING OUTDOORS WITH GPS
          </h2>
        </div>
        <div className="flex justify-center w-6/5 mx-auto gap-10 mt-16 ">
          <div className="flex items-center justify-center gap-5">
            <img className="w-[40px]" src={gps} alt="" />
            <span className="w-1/2">STRONG GPS</span>
          </div>
          <div className="flex items-center gap-4">
            <span>ENSURE</span>
            <span className="w-[16px] h-[16px] bg-[#000] rounded-3xl "></span>
            <span>RUNNING</span>
          </div>
          <div className="flex items-center justify-center gap-5">
            <img className="w-[40px]" src={greenzone} alt="" />
            <span className="w-1/2">RUN WITHIN GREEN ZONE</span>
          </div>
        </div>
      </div>
      <div className="w-full font-Montserrat mx-auto mt-24">
        <div className="w-5/6 flex justify-center mx-auto">
          <div className="w-1/3">
            <div>
              <div className="mt-28 ml-36">
                <h4 className="font-[600] text-[1em] mb-2">ANTI-CHEATING</h4>
                <p>YOU ARE NOT EARNING IF MOONWALKING</p>
              </div>
            </div>
            <div className="mt-[60px]  ml-20 text-[1em] font-[600]">
              <p>OPTIMAL SPEED RANGE</p>
            </div>
          </div>
          <div className="w-5/6">
            <img src={marketplace5} alt="" />
          </div>
          <div className="relative w-1/3">
            <div className="absolute top-[26%] -ml-40">
              <h4 className="text-center font-[600]">STRONG GPS</h4>
              <div className="flex justify-center mt-5 ml-20 gap-6">
                <div className="flex flex-col items-center">
                  <img src={earning1} alt="" />
                  <div className="w-[1px] h-[28px] mt-1 bg-[#000]"></div>
                  <p className="mt-2 font-[500]">EARING</p>
                </div>
                <div className="flex flex-col item-center">
                  <img className="w-[120px]" src={earning2} alt="" />
                  <p className="w-full text-center mt-2 font-[500]">
                    LOW/NO EARNING
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[27%] left-0 -ml-[50px] text-[1em] font-[600]">
              <p>CHANGE SNEAKER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay5;
