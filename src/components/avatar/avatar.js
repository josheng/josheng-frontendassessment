import React from 'react';
import './avatar.css';

const Avatar = ({ image, image2, name, quote }) => {
  return (
    <div className="avatar-container">
      <div className="avatar">
        <img src={image} alt={name} />
      </div>
      <div className="quoteimg">
        <img src={image2} alt={name} />
      </div>
      <div className="quote">{quote}</div>
    </div>
  );
}

export default Avatar;
