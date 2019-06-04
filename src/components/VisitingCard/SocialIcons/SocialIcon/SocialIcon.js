import React from 'react';
import './SocialIcon.css';

const SocialIcon = props => {
  return (
    <div className="SocialIcon">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img style={{height: '24px'}} src={props.image} alt="" />
      </a>
    </div>
  );
};

export default SocialIcon;
