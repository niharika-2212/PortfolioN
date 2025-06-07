import React from "react";
import "../styles/Projects.css"
// import image1 from "../assets/3.jpg"; // Replace with your actual image path
import Card from "./Card";
import projectData from "../assets/projects.json"; // Assuming you have a JSON file with project data

function Projects() {
  return (
    <div className="projects">
      <div className="heading">Projects</div>
      <div className="project-container">
        {projectData.map((project)=>{
          return (
            <Card key={project.id} title={project.title} image={project.image} description={project.description} githubLink={project.url} />
          )
        })}
      </div>
    </div>
  )

}

export default Projects;