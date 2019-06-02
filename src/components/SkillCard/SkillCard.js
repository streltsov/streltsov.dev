import React from 'react';
import './SkillCard.css';

const SkillCard = props => {
  return (
    <div className="SkillCard">
      <img src={props.image} alt="" />
      <span>{props.caption}</span>
    </div>
  );
};

export default SkillCard;
