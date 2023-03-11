import React, { useState } from 'react';
import './menu.css';

const Menu = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  }

  const closeOverlay = () => {
    setShowOverlay(false);
  }

  return (
    <div className="menu-icon-container">
      <button className="menu" onClick={toggleOverlay}>
        <span className="menu-icon__bar"></span>
        <span className="menu-icon__bar"></span>
        <span className="menu-icon__bar"></span>
      </button>
      {showOverlay && (
        <div className="overlay">
          <button className="close-button" onClick={closeOverlay}>X</button>
          <div className="overlay-text">
            <p>{props.line1}</p>
            <div className="line"></div>
            <p>{props.line2}</p>
            <div className="line"></div>
            <p>{props.line3}</p>
            <div className="line"></div>
            <p>{props.line4}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
