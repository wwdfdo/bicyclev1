import React from "react";
import instagram from "../../images/footer-icons/instagram.png";
import facebook from "../../images/footer-icons/facebook.png";
import twitter from "../../images/footer-icons/twitter.png";
import linkedin from "../../images/footer-icons/linkedin.png";
import discord from "../../images/footer-icons/discord.png";
// import Logo from "../Header/Logo";
import Footerlogo from "../../images/pedalspayfooterlogo1.png";

const Footer = () => {
  return (
    <div className="text-textcolor flex flex-col justify-between mx-auto w-full items-center pt-10 bg-[#000000]">
      {/* <h2 className="text-center text-2xl">PedalsPay</h2> */}
      <img className="w-[190px]" src={Footerlogo} alt="" />
      <div className="flex gap-5 mt-5">
        <div className="w-[31px]">
          <a href="https://www.instagram.com/pedalspay/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="w-[31px]">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="" />
          </a>
        </div>
        <div className="w-[31px]">
          <a href="https://twitter.com/PedalsPay">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <div className="w-[31px]">
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="w-[31px]">
          <a href="https://discord.gg/BxuYPbYCBh">
            <img src={discord} alt="discord" />
          </a>
        </div>
      </div>
      <h2 className="text-center py-5">
        Copyright © 2022.Pedalspay Labs All Rights Reserved.
      </h2>

      {/* <div className="flex lg:flex-row  lg:justify-between items-center lg:text-left text-center gap-8 text-white"> */}
      {/* <div className="flex flex-col">
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Contact
          </h2>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div> */}
      {/* <div>
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Useful Links
          </h2>
          <ul>
            <li>What Is Paddlepay?</li>
            <li>The Opportunity</li>
            <li>Team And Advisors</li>
            <li>The Technology</li>
          </ul>
        </div> */}
      {/* <div>
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Recent post
          </h2>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div> */}
      <div>
        {/* <div>
            <h2 className="mb-3 text-[#51AD6D] font-sans font-semibold">
              NEWSLETTER
            </h2>
            <form className="flex" action="#">
              <input
                className="border-none py-1 text-black font-semibold outline-0 w-3/5 pl-2"
                type="text"
              />
              <input
                className="bg-[#51AD6D] px-3 py-1  ml-1"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div> */}
      </div>
    </div>
    // </div>
  );
};

export default Footer;
