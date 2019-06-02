import React from 'react';
import SkillCard from '../../components/SkillCard/SkillCard';
import HTML5Logo from '../../assets/html5_logo.svg';
import CSS3Logo from '../../assets/css3_logo.svg';
import JavaScriptLogo from '../../assets/javascript_logo.svg';
import ReactLogo from '../../assets/react_logo.svg';
import ReduxLogo from '../../assets/redux_logo.svg';
import WebpackLogo from '../../assets/webpack_logo.svg';
import GitLogo from '../../assets/git_logo.svg';
import GitHubLogo from '../../assets/github_logo.svg';
import './SkillsBody.css';

const SkillsBody = () => {
  return (
    <div className="SkillsBody">
      <SkillCard image={HTML5Logo} caption="HTML5" />
      <SkillCard image={CSS3Logo} caption="CSS3" />
      <SkillCard image={JavaScriptLogo} caption="JavaScript" />
      <SkillCard image={ReactLogo} caption="React" />
      <SkillCard image={ReduxLogo} caption="Redux" />
      <SkillCard image={WebpackLogo} caption="Webpack" />
      <SkillCard image={GitLogo} caption="Git" />
      <SkillCard image={GitHubLogo} caption="GitHub" />
    </div>
  );
};

export default SkillsBody;
