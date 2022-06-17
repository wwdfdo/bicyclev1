import React, { useLayoutEffect } from "react";
import { useState } from "react";
import Main from "../Main";
import "./PedalspayPreloader.css";

const PedalspayPreloader = () => {
  const [loading, setloading] = useState(undefined);
  //   const [completed, setcompleted] = useState(undefined);

  useLayoutEffect(() => {
    setTimeout(() => {
      setloading(true);
      //   setTimeout(() => {
      //     setcompleted(true);
      //   }, 1000);
    }, 4000);
  }, []);

  return (
    <div>
      {!loading ? (
        <div id="preloader"></div>
      ) : (
        <>
          <Main />
        </>
      )}
    </div>
  );
};

export default PedalspayPreloader;
