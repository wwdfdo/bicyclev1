import "./CardSlider.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { cardsArray } from "../../arrays/cardsArray";

const CardSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute lg:right-[36.5%] lg:block hidden -bottom-7 z-10 text-[#73f59b] p-1 rounded-3xl bg-slate-100  hover:text-[#68edff] next text-md"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute -bottom-7 lg:left-[36.5%] lg:block hidden z-10 text-[#73f59b]  p-1 rounded-3xl bg-slate-100  hover:text-[#68edff] prev text-md"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    centerPadding: 40,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Bikes" className=" lg:w-[95%] w-5/6  mx-auto mt-32">
      <h2 className="text-textcolor font-rubik font-bold text-center py-20 text-[2.5em]">
        {" "}
        NFTs Showcase
      </h2>
      <div>
        <Slider {...settings}>
          {cardsArray.map((card) => (
            <div className="pr-2 pl-5">
              <div className=" bg-cardbgcolor p-3 rounded-2xl">
                <div className={`${card.color}  rounded-2xl p-2`}>
                  {" "}
                  <img src={card.img} alt="" />
                </div>
                <div className="bg-cardbgcolor font-semibold font-mono rounded-b-md py-5 text-textcolor">
                  {/* <div>
                    <h2 className="text-md text-center pb-4">{card.name}</h2>
                  </div> */}
                  <div className=" text-base flex flex-col gap-2 px-3">
                    <div className=" flex justify-between">
                      <p className="text-xl">Model No</p>
                      <button className="bg-[#0000FF] py-[1px] tracking-widest text-[14px] font-semibold px-2 rounded-xl">
                        BSC
                      </button>
                    </div>
                    <div className=" flex justify-between items-center">
                      <p>Current Price</p>
                      <p className=" text-lg pr-2">TBD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
