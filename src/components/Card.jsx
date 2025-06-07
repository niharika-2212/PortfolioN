import React from 'react';
import "../styles/Projects.css"
function Card(props) {
  console.log(props.image);
  return (
    <div className="project">
      <div className="subheading">{props.title}</div>
      <img src={props.image} alt="project 1" />
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