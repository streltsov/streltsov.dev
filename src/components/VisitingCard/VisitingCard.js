import React from 'react';
import './VisitingCard.css';
import SocialIcons from './SocialIcons/SocialIcons';

const VisitingCard = () => {
  return (
    <div className="VisitingCard">
      <span className="greeting">Привет! Я</span>
      <h1 className="name">Герман Стрельцов</h1>
      <h2 className="occupation">Frontend разработчик</h2>
      <a className="email" href="mailto:mail@streltsov.org">
        mail@streltsov.org
      </a>
      <SocialIcons />
    </div>
  );
};

export default VisitingCard;
