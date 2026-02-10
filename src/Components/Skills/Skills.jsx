import React from "react";
import "./skills.css";

// skill icons
import cIcon from "../../assets/c-removebg-preview.png";
import cppIcon from "../../assets/cpp-removebg-preview.png";
import htmlIcon from "../../assets/html-removebg-preview.png";
import cssIcon from "../../assets/css2-removebg-preview.png";
import jsIcon from "../../assets/js-removebg-preview.png";
import reactIcon from "../../assets/react-removebg-preview.png";
import nodeIcon from "../../assets/node2-removebg-preview.png";
import mongoIcon from "../../assets/mongo1-removebg-preview.png";



const Skills = () => {
  const skills = [
    { name: "C", icon: cIcon },
    { name: "C++", icon: cppIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "MongoDB", icon: mongoIcon },
  ];

  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
