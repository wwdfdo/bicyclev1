import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import { menus } from "../../arrays/menuArray";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Header = () => {
  const [navId, setNavId] = useState();

  return (
    <div className="w-full min-h-[64px] fixed z-20 bg-gradient-to-r from-[#551777] via-[#090118] to-[#CB577D] font-bold text-[#000] font-montserrat">
      <div className="lg:w-4/5 lg:flex lg:justify-between items-center mx-auto pt-[15px]">
        <Logo width={"w-[200px]"} />
        <Navigation menus={menus} navId={navId} setNavId={setNavId} />
        <MobileNav menus={menus} />
      </div>
    </div>
  );
};

export default Header;
