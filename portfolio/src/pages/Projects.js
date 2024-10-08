import React from "react";
import ProjectItem from "../pages/ProjectItem.js";
import { ProjectList } from "../helpers/ProjectList.js";

import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
