import React from 'react';
import './headertext.css';

function HeaderText(props) {
  return (
    <div className='text-wrapper'>
      <h2>{props.header}</h2>
      {props.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default HeaderText;
