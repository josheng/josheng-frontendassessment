import React from "react";
import "./asiaonefooter.css";
import AsiaOneLogo from "../images/asiaonefooter.png"

const AsiaOneFooter = () => {
  return (
    <div className="asiaonefooter">
      <img src={AsiaOneLogo} alt="Asia One Logo" />
      <div className="links">
        <a href="#">About Us</a>
        <a href="#">Advertise With Us</a>
        <a href="#">Work With Us</a>
        <a href="#">Privacy Statement</a>
      </div>
      <div className="coyreg">
        <p><span style={{ color:"#d05800"}}>@asiaone 2023</span> Company Registration No.: 201815023K</p>
      </div>
    </div>
  );
};

export default AsiaOneFooter;
