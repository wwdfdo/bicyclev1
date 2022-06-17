import React from "react";
import { membersArray } from "../../arrays/membersArray";

const OurTeam = () => {
  return (
    <div className="w-3/4 mx-auto lg:pt-10 pb-28" id="team">
      <div>
        <h2 className="text-[2.5em]  text-textcolor font-rubik font-bold text-center lg:pt-0 pt-24 lg:mt-16 mb-16 mt-0">
          Our Team
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col gap-10">
        {membersArray.map((member) => (
          <div key={member.id} className="relative">
            <img className="rounded-lg" src={member.img} alt="" />
            <div
              className={`w-full ${member.color} absolute text-black top-0 h-full p-5 cursor-pointer opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-500 hover: rounded-lg`}
            >
              <h2 className="text-white">{member.job}</h2>
              <p className="text-white">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
