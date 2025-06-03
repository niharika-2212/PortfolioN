import React from 'react';
import "../styles/Projects.css"
function Card(props) {
  return (
    <div className="project">
      <div className="subheading">{props.title}</div>
      <img src={props.image} alt="project 1" className="project-image" />
      <div className="project-description">{props.description}</div>
      <a
        href={props.githubLink}
        className="card-button button-rev"
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub
      </a>
    </div>
  )

}

export default Card;