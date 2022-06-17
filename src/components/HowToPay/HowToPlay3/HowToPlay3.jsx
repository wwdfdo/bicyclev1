import React from "react";
// import mobileapp2 from "../../../images/mobileapp2.png";
import box from "../../../images/box.png";
import gem from "../../../images/gem.png";
import gst2 from "../../../images/gst2.png";
import marketplace3 from "../../../images/marketplace3.png";

const HowToPlay3 = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto mt-40 ">
        <h2 className="text-[2.5em] text-center tracking-[.4em] font-[500]">
          3、SNEAKER DETAIL PAGE
        </h2>
        <div className="flex justify-center mt-32">
          <div className="flex flex-col relative w-1/3 font-[500]">
            {/* <div className="absolute left-50 ml-[120px] w-full top-6 text-[1.25em]">
              HIGHER QUALITY SOCKET BOOSTS THE GEM'S ATTRIBUTE
            </div> */}
            <div className="absolute left-64 w-full top-[27%] text-[1.25em]">
              QUALITY
            </div>
            <div className="absolute left-36 w-full bottom-[24%] text-[1.25em] ">
              <h3>EFFICIENCY</h3>
              <p>
                Enhance GST <br /> earning
              </p>
            </div>
            <div className="absolute w-[100%] bottom-[0%] -mb-20 left-40 flex flex-col gap-4">
              <div>
                <h3 className="font-[700] text-[1.25em] mb-5">LUCK</h3>
                <p className="text-[1.25em]">Enhance Mystery Box Drop Rate</p>
              </div>
              <div className="flex gap-2 w-full">
                <img className="w-[50px] h-[40px]" src={box} alt="" />
                <span>=</span>
                <img className="w-[50px] h-[40px]" src={gem} alt="" />
                <img className="w-[50px] h-[40px]" src={gst2} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img className="w-[1/3]" src={marketplace3} alt="" />
          </div>
          <div className="w-1/3 relative text-[1.25em] font-[500]">
            <div className="absolute w-full top-6 right-32">
              INCREASE SNEAKER'S ATTRIBUTE WITH GEMS
            </div>
            <div className="absolute w-full right-32 top-[34%]">
              <p>REPAIR AFTER MOVING OUTDOORS</p>
            </div>
            <div className="absolute w-full bottom-[25%] right-32">
              <h2>COMFORT</h2>
              <p>
                Enhance GTM earning <br />
                (at level 30)
              </p>
            </div>
            <div className="absolute w-full bottom-[3%] right-60">
              <h2>RESILIENCE</h2>
              <p>Reduces repair costs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay3;
