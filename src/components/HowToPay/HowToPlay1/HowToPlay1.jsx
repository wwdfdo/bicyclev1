import React from "react";
import shoe from "../../../images/bicycle.png";
import foot from "../../../images/foot.png";
import shoecoin from "../../../images/shoecoin.png";
import flash from "../../../images/flash.png";
import headerbgimage from "../../../images/headerbgimage.png";

const HowToPlay1 = () => {
  return (
    <div>
      <div className="relative">
        <img src={headerbgimage} alt="" />
        <div className=" absolute top-[0%] right-0 w-full h-full mx-auto">
          <h2 className="md:py-40 py-5 font-Montserrat font-[700] md:text-[4em] text-[1.5em] text-center ">
            HOW TO MAKE YOURS <br /> RIDES COUNT
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:w-3/5 w-5/6 mx-auto gap-10">
        <div className="flex flex-col gap-5">
          <div className="text-center">
            <h2 className="font-Montserrat md:text-[2.5em] text-[1em] tracking-[.18em] font-[500]">
              1、CHOOSE A SNEAKER THAT FITS <br /> YOUR FITNESS LEVEL
            </h2>
          </div>
          <div className="text-center">
            <p className="font-Montserrat font-[500] md:text-[1.3125em] text-[1em]">
              YOU ONLY EARN WHEN YOU HAVE AN NFT SNEAKER <br /> AND MOVE
              OUTDOORS WITH GPS
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center md:text-[1.3125em] text-[.8em] mt-10 gap-10">
          <div className="flex gap-10">
            <div className="flex flex-col md:gap-5 gap-2">
              <div>
                <img src={shoe} alt="" />
              </div>
              <div className="flex justify-center ">
                <span>WALKER</span>
                <img className="w-[14px] h-[23px]" src={foot} alt="" />
              </div>

              <span className="text-center">1-6 (KM/HR)</span>

              <div className="flex justify-center">
                <span>1</span>
                <img className="w-[18.5px] h-[30px]" src={flash} alt="" />
                <span>4</span>
                <img className="w-[29px] h-[29px]" src={shoecoin} alt="" />
              </div>
            </div>
            <div className="flex flex-col md:gap-5 gap-2">
              <div>
                <img src={shoe} alt="" />
              </div>
              <div className="flex justify-center">
                <span>WALKER</span>
                <img className="w-[14px] h-[23px]" src={foot} alt="" />
                <img className="w-[14px] h-[23px]" src={foot} alt="" />
              </div>

              <span className="text-center">1-6 (KM/HR)</span>

              <div className="flex justify-center">
                <span>1</span>
                <img className="w-[18.5px] h-[30px]" src={flash} alt="" />
                <span>4</span>
                <img className="w-[29px] h-[29px]" src={shoecoin} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col md:gap-5 gap-2">
              <div>
                <img src={shoe} alt="" />
              </div>
              <div className="flex justify-center">
                <span>WALKER</span>
                <img className="w-[14px] h-[23px]" src={foot} alt="" />
                <img className="w-[14px] h-[23px]" src={foot} alt="" />
                <img className="w-[14px] h-[23px]" src={foot} alt="" />
              </div>

              <span className="text-center">1-6 (KM/HR)</span>

              <div className="flex justify-center">
                <span>1</span>
                <img className="w-[18.5px] h-[30px]" src={flash} alt="" />
                <span>4</span>
                <img className="w-[29px] h-[29px]" src={shoecoin} alt="" />
              </div>
            </div>
            <div className="flex flex-col md:gap-5 gap-2">
              <div>
                <img src={shoe} alt="" />
              </div>
              <div className="flex justify-center">
                <span>WALKER</span>
                <img className="w-[14px] h-[23px]" src={foot} alt="" />
              </div>

              <span className="text-center">1-6 (KM/HR)</span>

              <div className="flex justify-center">
                <span>1</span>
                <img className="w-[18.5px] h-[30px]" src={flash} alt="" />
                <span>4</span>
                <img className="w-[29px] h-[29px]" src={shoecoin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay1;
