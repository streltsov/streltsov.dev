import React from 'react';
import './App.css';
import SkillsBody from '../SkillsBody/SkillsBody';
import ProjectsBody from '../ProjectsBody/ProjectsBody';

const App = () => {
  return (
    <div className="App">
      <ProjectsBody />
      <SkillsBody />
    </div>
  );
};

export default App;
