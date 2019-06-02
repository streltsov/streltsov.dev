import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <div className="ProjectCard">
      <img src={props.image} alt="" />
      <div className="description">
        <span className="description__heading">{props.heading}</span>
        <p className="description__summary">{props.summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
