import React from "react";
import Applestore from "../../images/applestore1.png";
import Googleplay from "../../images/googleplay1.png";
// import ridebike from "../../images/cartoon2.png";
import ridebike from "../../images/viewportimage2.jpg";

// import viewportImg from "../../images/viewportImgv1.png";
// import video2 from "../../images/viewportVideo3.mkv";

const ViewPort = () => {
  return (
    // <div className="flex flex-col md:flex-row md:w-4/5 mx-auto  md:gap-16 gap-2 justify-between bg-[#000] items-center h-[100vh]">
    //   <div className=" w-5/6 lg:w-2/5 text-white  flex flex-col gap-12 mt-36 ">
    //     <div className="w-full">
    //       <h1 className=" lg:text-[3.5em] text-[2.5em] font-[700] font-montserrat text-titlecolor leading-tight">
    //         Bikes Are Not a Sign of Poverty, They Are a Great{" "}
    //         <span className="text-[#73f59b]"> Equalizer</span>
    //       </h1>
    //     </div>
    //     <div>
    //       <p className=" text-[1.2em] leading-relaxed font-montserrat font-400 font-semibold text-titlecolor">
    //         PedalPay is a futuristic, eco-mobility platform combining worlds of
    //         Game-Fi and Social-Fi into the most green mode of mobility, cycling.
    //       </p>
    //     </div>
    //     <div className="flex gap-6">
    //       <button className="border-[1px] border-[#ffffff] rounded-[3px]">
    //         <img className=" w-[160px]" src={Applestore} alt="" />
    //       </button>
    //       <button className="border-[1px] border-[#ffffff] rounded-[3px]">
    //         <img className=" w-[160px]" src={Googleplay} alt="" />
    //       </button>
    //     </div>
    //   </div>

    //   <video
    //     className="lg:absolute lg:right-0 lg:top-8 mt-32 lg:w-3/5"
    //     loop={true}
    //     autoPlay="autoPlay"
    //     muted
    //   >
    //     <source src={video2} type="video/mp4"></source>
    //   </video>
    //   {/* <img
    //     className="lg:absolute lg:right-[3%] lg:top-[17%] lg:w-1/2"
    //     src={viewportImg}
    //     alt=""
    //   /> */}
    // </div>
    <div className="min-h-[100vh] mt-[50px] pt-[40px] pb-20">
      <div className="pt-[20px] px-[10px] ">
        <div className="w-5/6  flex md:flex-row flex-col justify-between md:gap-10 gap-16 mx-auto items-center relative ">
          <div className="md:w-2/5 w-full text-[#ffffff] flex flex-col md:gap-16 gap-8 mt-8">
            <div>
              <h2 className="md:text-[3.5em] text-[2rem] font-[700] font-montserrat leading-[1.1]">
                {" "}
                Bikes Are Not a Sign of Poverty, They Are a Great{" "}
                <span className="text-[#ffffff]"> Equalizer</span>
              </h2>
            </div>
            <div>
              <p className="md:text-[1.2em] text-[0.8em] leading-relaxed font-montserrat font-400">
                {" "}
                PedalPay is a futuristic, eco-mobility platform combining worlds
                of Game-Fi and Social-Fi into the most green mode of mobility,
                cycling.
              </p>
            </div>
            <div className="flex">
              <button className="border-[1px] border-[#ffffff] rounded-[3px] mr-5">
                <img className=" w-[160px]" src={Applestore} alt="" />
              </button>
              <button className="border-[1px] border-[#ffffff] rounded-[3px]">
                <img className=" w-[160px]" src={Googleplay} alt="" />
              </button>
            </div>
          </div>
          <div className="md:w-3/5 w-full md:absolute md:right-0 md:top-0 md:-mr-[7rem] ">
            <div>
              <img loading="Lazy" src={ridebike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPort;
