import React from "react";
import AsiaOneFooter from "../asiaonefooter/asiaonefooter";
import HarleyFooter from "../harleyfooter/harleyfooter";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <HarleyFooter />
        <AsiaOneFooter />
      </div>
    </footer>
  );
};

export default Footer;
