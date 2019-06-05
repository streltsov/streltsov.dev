import React from 'react';
import './VisitingCard.css';
import SocialIcons from './SocialIcons/SocialIcons';
import EmailEnvelope from '../../assets/email_envelope.svg';

const VisitingCard = () => {
  return (
    <div className="VisitingCard">
      <span className="greeting">Привет! Я</span>
      <h1 className="name">Герман Стрельцов</h1>
      <h2 className="occupation">Frontend разработчик</h2>
      <span className="email">
        <img style={{height: '16px'}} src={EmailEnvelope} alt="" />
        <a className="email" href="mailto:mail@streltsov.org">
          mail@streltsov.org
        </a>
      </span>
      <SocialIcons />
    </div>
  );
};

export default VisitingCard;
