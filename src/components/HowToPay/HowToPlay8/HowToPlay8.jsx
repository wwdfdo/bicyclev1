import React from "react";
import anroid from "../../../images/android.png";
import ios from "../../../images/ios.png";
import qrcode from "../../../images/qrcode.png";

const HowToPlay8 = () => {
  return (
    <div className="mt-40">
      <div className="w-3/5 mx-auto">
        <div>
          <h2 className="text-center text-[3.5em] font-[700]">
            YOUR DRIVES COUNT WITH PEDALSPAY!
          </h2>
        </div>
        <div className="flex justify-center gap-20 mt-32 ">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-4 text-[1.3125em] font-[500]">
              <div>
                <img className="w-[78px] h-[91px]" src={anroid} alt="" />
              </div>
              <div>
                <span>
                  DOWNLOAD <br /> FOR ANDROID
                </span>
              </div>
            </div>
            <div className="mt-6">
              <img className="w-[160px] h-[160px]" src={qrcode} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-4 text-[1.3125em] font-[500]">
              <div>
                <img className="w-[78px] h-[91px]" src={ios} alt="" />
              </div>
              <div>
                <span>
                  DOWNLOAD <br /> FOR IPHONE
                </span>
              </div>
            </div>
            <div className="mt-6">
              <img className="w-[160px] h-[160px]" src={qrcode} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay8;
