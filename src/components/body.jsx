import React from "react";
// import Header from "./Header/Header";
import ViewPort from "./ViewPort/ViewPort";
// import Overview from "./Overview/Overview";
import OverviewAnimate from "./OverviewAnimate/OverviewAnimate";
// import SlickSlider from "./Slider/SlickSlider";
// import RidingMode from "./RidingMode/RidingMode";
// import OurTeam from "./OurTeam/OurTeam";
// import TimelineRoadMap from "./TimelineRoadMap/TimelineRoadMap";
import Footer from "./Footer/FooterTwo";
// import Modes2 from "./Mode2/Mode2";
import NftEconomy from "./NftEconomy/NftEconomy";
// import Socialfy from "./Socialfy/Socialfy";
import NeonRoadMap from "./NeonRoadMap/NeonRoadMap";
import TokenEconomy from "./TokenEconomy/TokenEconomy";
// import Cards from "./Cards/Cards";
// import EcosystemCards from "./EcosystemCards/EcosystemCards";
// import SocialFiCards from "./SocialFiCards/SocialFiCards";
// import EcosystemSlider from "./EcosystemSlider/EcosystemSlider";
import EcosystemCardSlider from "./EcosystemCardSlider/EcosystemCardSlider";
import SocialFiCardsNew from "./SocialFiCardsNew/SocialFiCardsNew";

// import BackgroundAnimation from "./BackgroundAnimation/BackgroundAnimation";

// import PieChart from "./PieChart/PieChart";
// import IndexPiechart from "./PieChart2/IndexPiechart";

// import CardSlider from "./CardSlider/CardSlider";
// import Modes from "./Modes/Modes";

const Body = () => {
  return (
    <div className="text-[white] bg-gradient-to-r from-[#551777] via-[#090118] to-[#CB577D] font-sans box-border m-0 overflow-x-hidden w-[100%] h-[100%] p-0">
      <ViewPort />
      <OverviewAnimate />
      {/* <CardSlider /> */}
      {/* <Overview /> */}
      {/* <SlickSlider /> */}
      {/* <RidingMode /> */}
      {/* <OurTeam /> */}
      {/* <Modes /> */}
      {/* <Cards /> */}
      {/* <EcosystemSlider /> */}
      <EcosystemCardSlider />
      {/* <EcosystemCards /> */}
      <NftEconomy />
      <SocialFiCardsNew />
      {/* <Socialfy /> */}
      <NeonRoadMap />
      <TokenEconomy />

      {/* <BackgroundAnimation /> */}

      {/* <PieChart /> */}
      {/* <IndexPiechart /> */}
      {/* <TimelineRoadMap /> */}

      <Footer />
    </div>
  );
};

export default Body;
