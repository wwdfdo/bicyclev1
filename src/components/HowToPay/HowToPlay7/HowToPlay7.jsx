import React from "react";
import mobileapp7 from "../../../images/mobileapp7.png";
import mintshoe from "../../../images/mintshoe.png";
import shoecoinmedium from "../../../images/shoecoinmedium.png";

const HowToPlay7 = () => {
  return (
    <div className="w-3/4 mx-auto mt-40">
      <div className="flex justify-around">
        <div>
          <img className="w-[589px]" src={mobileapp7} alt="" />
        </div>
        <div className="flex flex-col mt-10 gap-8">
          <h3 className="text-[2.5em] font-[500]">7、BURN GST</h3>

          <div>
            <h4 className="text-[1.3125em] font-[500]">
              1. MINT A NEW SNEAKER <br /> TO SELL OR KEEh4 IT
            </h4>
            <img className="w-[331px] mt-6" src={mintshoe} alt="" />
          </div>
          <div>
            <h4 className="text-[1.3125em] font-[500]">
              2. MINT A NEW SNEAKER <br /> TO SELL OR KEEh4 IT
            </h4>
            <img className="w-[201px] mt-6" src={shoecoinmedium} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay7;
