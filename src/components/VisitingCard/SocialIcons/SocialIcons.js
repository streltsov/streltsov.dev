import React from 'react';
import './SocialIcons.css';
import SocialIcon from './SocialIcon/SocialIcon';
import GitHubLogo from '../../../assets/github_logo.svg';
import LinkedInLogo from '../../../assets/linkedin_logo.svg';

const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <SocialIcon link="https://github.com/streltsov" image={GitHubLogo} />
      <SocialIcon
        link="https://www.linkedin.com/in/german-streltsov"
        image={LinkedInLogo}
      />
    </div>
  );
};

export default SocialIcons;
