import React from "react";
import piechart from "../../images/Piechart4.png";
import piechart1 from "../../images/Piechart5.png";

const TokenEconomy = () => {
  return (
    <div id="Tokonomics" className="pt-[80px] pb-20">
      <h2 className="text-[#000000] font-[700] font-montserrat text-center md:text-[2.5em] text-[2.1em] pb-12">
        Token Economy
      </h2>
      <div className="flex md:flex-row flex-col w-[95%] justify-center items-center gap-8 mx-auto">
        <div className="flex flex-col">
          <img src={piechart} alt="" />
          <img src={piechart1} alt="" />
        </div>
        <div className="overflow-auto w-full">
          <table className="table-auto text-[#000000] mx-auto lg:w-6 w-[100%]">
            <tbody>
              <tr className="bg-[#ff0081]  text-[#ffffff]">
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg"></td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  Allocation
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  Token
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  Value
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg w-24">
                  Vesting
                </td>
              </tr>
              <tr>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  Public
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  15%
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  15,000,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  $300,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg w-24"></td>
              </tr>
              <tr className="bg-[#0001ff]  text-[#ffffff]">
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  Team
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  10%
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  10,000,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  $200,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg w-24">
                  12 Months cliff linear vesting over 24months
                </td>
              </tr>
              <tr>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  Advisor
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  5%
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  5,000,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  $100,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg w-24">
                  12 Months cliff linear vesting over 24months
                </td>
              </tr>
              <tr className="bg-[#0001ff]  text-[#ffffff]">
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  Marketing/Media
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  20%
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  20,000,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  $400,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg w-24">
                  Linear vesting Over 24months
                </td>
              </tr>
              <tr>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  LP
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  25%
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  25,000,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  $500,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg w-24">
                  Ondemand
                </td>
              </tr>
              <tr className="bg-[#0001ff] text-[#ffffff]">
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  Ecosystem
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  25%
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  25,000,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  $500,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg w-24">
                  Ondemand
                </td>
              </tr>
              <tr>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg"></td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg"></td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  100,000,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg">
                  2,000,000
                </td>
                <td className="lg:py-3 lg:px-2 font-[500] font-montserrat whitespace-nowrap py-1 px-1 text-sm lg:text-lg w-24"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TokenEconomy;
