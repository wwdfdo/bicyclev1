import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return <div id="preloader"></div>;
};

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

export default Preloader;
