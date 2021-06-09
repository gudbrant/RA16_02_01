import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

import {useState} from 'react';

function Portfolio({allProjects}) {
  const [selectedFilter, selectFilter] = useState("All");

  const projects = allProjects.filter(project => {
    if (selectedFilter === "All") {
      return true;
    }
    return project.category === selectedFilter;
  });
  
  return(
    <>
      <Toolbar
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected={selectedFilter}
      onSelectFilter={(filter) => {selectFilter(filter)}}/>
      <ProjectList projects={projects}/>
    </>
  )
}

export default Portfolio;