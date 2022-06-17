import React from "react";
// import mobileapp1 from "../../../images/mobileapp1.png";
import shoe1 from "../../../images/shoe1.svg";
import shoeBox from "../../../images/shoeBox.png";
import marketplace2 from "../../../images/marketplace2.png";

const HowToPlay2 = () => {
  return (
    <div className="mt-40 mx-auto md:w-4/5 w-11/12">
      <div className="flex md:flex-row flex-col justify-center items-center gap-4">
        <div className="md:w-1/3 w-full md:justify-self-end justify-self-center">
          <h2 className="md:text-[2.5em] font-[1em] font-[500] md:text-left text-center">
            2、FIND A SNEAKER FROM THE IN-APP MARKETPLACE
          </h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="md:w-[50%] w-[80%]">
            <img src={marketplace2} alt="" />
          </div>
          <div className="flex flex-col self-start md:text-[1.25em] text-[0.6em]">
            <div className="mt-[54px]">SEARCH FILTER</div>
            <div className="md:mt-8 mt-5">
              <img className="md:w-full w-3/4" src={shoe1} alt="" />
            </div>
            <div className="mt-12">
              OWN MORE SNEAKERS TO <br />
              GAIN HIGHER ENERGY LEVEL
            </div>
            <div>
              <img
                className="md:w-[383px] w-[240px] md:-ml-[50px] -ml-[30px]"
                src={shoeBox}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay2;
