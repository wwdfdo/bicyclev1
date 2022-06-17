import React from "react";
import newlogo from "../../images/pedalspaywhite.png";

const Logo = ({ width, center }) => {
  return (
    <div className={`${width} ${center}`}>
      {/* <img src={logo} alt="lOGO" /> */}
      <img src={newlogo} className="md:ml-0 ml-5" alt="Paddle logo" />
      {/* <img src={logoTwo} alt="lOGOTWO" /> */}
      {/* <h1 className="text-2xl md:ml-0 ml-5">PedalsPay</h1> */}
    </div>
  );
};

export default Logo;
