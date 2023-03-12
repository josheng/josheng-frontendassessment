import React from 'react';
import './avatar.css';

const Avatar = (props) => {
  return (
    <div className="avatar-container">
      <div className="avatar">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="quoteimg">
        <img src={props.image2} alt={props.name} />
      </div>
      <div className="quote">{props.quote}</div>
    </div>
  );
}

export default Avatar;
