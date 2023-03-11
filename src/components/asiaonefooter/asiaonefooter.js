import React from "react";
import "./asiaonefooter.css";
import AsiaOneLogo from "../images/asiaonefooter.png"

const AsiaOneFooter = () => {
  return (
    <div className="asiaonefooter">
      <img src={AsiaOneLogo} alt="Asia One Logo" />
      <div className="links">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
    </div>
  );
};

export default AsiaOneFooter;
