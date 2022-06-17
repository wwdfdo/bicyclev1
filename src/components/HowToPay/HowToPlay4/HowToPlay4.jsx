import React from "react";
// import mobileapp3 from "../../../images/mobileapp3.png";
import marketplace4 from "../../../images/marketplace4.png";

const HowToPlay4 = () => {
  return (
    <div className="mt-40 mb-20">
      <div className="">
        <h2 className="text-center text-[2.5em] w-3/5 mx-auto ">
          4、EQUIP YOUR SNEAKER, MOVE OUTDOORS, BURN ENERGY AND EARN HANDSOME
          REWARDS
        </h2>

        <div className="flex justify-center mt-20">
          <div className="flex flex-col justify-center relative font-[500] text-[1.25em]">
            <div className="absolute w-[100%] top-[50%] -mt-[110px] right-0">
              EARN MYSTERY BOXES
            </div>
            <div className="absolute w-[100%] bottom-[50%] -mb-[150px] right-2">
              ENERGY CAP
            </div>
          </div>
          <div className="w-1/2">
            <img src={marketplace4} alt="" />
          </div>
          <div className="flex flex-col justify-center  relative font-[500] text-[1.25em]">
            <div className="absolute w-[100%] top-[13%] -ml-[150px] left-0">
              SNEAKER TYPE
            </div>
            <div className="absolute w-[100%] bottom-[20%] -ml-[110px] left-0">
              EARNING CAP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay4;
