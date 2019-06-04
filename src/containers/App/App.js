import React from 'react';
import './App.css';
import VisitingCard from '../../components/VisitingCard/VisitingCard';
import ProjectsBody from '../ProjectsBody/ProjectsBody';
import SkillsBody from '../SkillsBody/SkillsBody';

const App = () => {
  return (
    <div className="App">
      <VisitingCard />
      <SkillsBody />
      <ProjectsBody />
    </div>
  );
};

export default App;
