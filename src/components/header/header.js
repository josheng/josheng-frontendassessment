import React from "react";
import Menu from "../menu/menu";
import Banner from "../banner/banner";
import data from "./menu.json"

const Header= () => {
  return (
    <header>
      <div className="container">
        <Menu
          line1={data.line1}
          line2={data.line2}
          line3={data.line3}
          line4={data.line4} />
        <Banner />
      </div>
    </header>
  );
};

export default Header;
