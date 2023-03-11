import React from "react";
import "./harleyfooter.css";
import harleylogo from "../images/haryleyfootimage.png";
import harleyright from "../images/harleyright.png";

const HarleyFooter = () => {

  return (
    <div className="harleybanner">
      <div className="image">
        <img src={harleylogo} alt="Harley-Davidson Logo" />
      </div>
      <div className="harley-text">
        <h2>To know more about Harley-Davidson motorcycles and products</h2>
        <button>Click Here</button>
      </div>
      <div className="imageright">
        <img src={harleyright} alt="Vector" />
      </div>
    </div>
  );
};

export default HarleyFooter;
