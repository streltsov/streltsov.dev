import React from 'react';
import './ProjectsBody.css';
import StreltsovLogo from '../../assets/streltsov_logo.png';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const ProjectsBody = () => {
  return (
    <div className="ProjectsBody">
      <h2 className="heading">Мои работы:</h2>
      <div className="projects-cards">
        <ProjectCard
          image={StreltsovLogo}
          heading="Этот сайт"
          summary="Мое портфолио"
        />
        <ProjectCard
          image="https://addons.cdn.mozilla.net/user-media/addon_icons/1018/1018618-64.png?modified=6dff873a"
          heading="Kanzi"
          summary="Kanzi can help you build English vocabulary while surfing the web."
        />
      </div>
    </div>
  );
};

export default ProjectsBody;
