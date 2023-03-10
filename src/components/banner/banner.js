import * as React from "react";
import "./banner.css";
import harley from "../images/harleylogo.png"
import aologo from "../images/asiaonelogo.png"

const Banner = () => {
  return (
      <div className="banner">
        <div className="aologo-wrapper">
          <img src={aologo} alt="Asia One Logo" className="aologo" />
        </div>
        <div className="harley-wrapper">
          <img src={harley} alt="Harley Davidson Logo" className="harleyimage" />
        </div>
        <h1>STORIES OF FREEDOM</h1>
      </div>
  );
}

export default Banner;
