import React from "react";
import "./About.css";

import aboutImg from "../../assets/sittingWithLaptop-removebg-preview.png";
import cursorIcon from "../../assets/cursor-icon-removebg-preview.png";
import serverIcon from "../../assets/server-icon-removebg-preview.png";
import uiIcon from "../../assets/UI-icon-removebg-preview.png";

const About = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">About</h2>

      <div className="about-content">
        <img
          src={aboutImg}
          alt="me sitting with laptop"
          className="about-img"
        />

        <ul className="about-items">
          <li className="about-item">
            <img src={cursorIcon} alt="frontend icon" />
            <div className="about-itemtext">
              <h3>Frontend Developer</h3>
              <p>
                I love creating clean, responsive, and user-friendly interfaces.
                Turning ideas into interactive designs excites me, and I focus on
                building experiences that are visually appealing and easy to use.
              </p>
            </div>
          </li>

          <li className="about-item">
            <img src={serverIcon} alt="backend icon" />
            <div className="about-itemtext">
              <h3>Backend Developer</h3>
              <p>
                I enjoy working behind the scenes to build secure, efficient, and
                scalable systems. From handling databases to managing server
                logic, I make applications run smoothly.
              </p>
            </div>
          </li>

          <li className="about-item">
            <img src={uiIcon} alt="ui design icon" />
            <div className="about-itemtext">
              <h3>UI Designer</h3>
              <p>
                I’m a beginner UI designer focused on creating clean, 
                user-friendly interfaces , I’m still learning, and tryingg to grow with every project
                and putting effort into making designs that are both attractive and easy to use.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
