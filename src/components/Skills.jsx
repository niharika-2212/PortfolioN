import React from "react";
import "../styles/Skills.css"
import tech from "../assets/tech.json";
import lang from "../assets/lang.json";
import tools from "../assets/tools.json";
import SkillItem from "./SkillItem.jsx";

function Skills() {
  return (
    <div className="skills">
      <div className="skill-heading">
        <div className="heading">Skills</div>
      </div>
      <div className="skill-container">
        <div className="technologies">
          <div className="subheading">Technologies</div>
          <div className="tech-list">
            {tech.map((item) => {
              return (
                <SkillItem key={item.id} name={item.name} icon={item.icon} />
              )
            })}
          </div>
        </div>
        <div className="languages">
          <div className="subheading">Programming Languages</div>
          <div className="tech-list">
            {lang.map((item) => {
              return (
                <SkillItem key={item.id} name={item.name} icon={item.icon} />
              )
            })}
          </div>
        </div>
        <div className="tools">
          <div className="subheading">Tools</div>
          <div className="tech-list">
            {tools.map((item) => {
              return (
                <SkillItem key={item.id} name={item.name} icon={item.icon} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;