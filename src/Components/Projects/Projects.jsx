import React from "react";
import "./Projects.css";

// project images
import calculatorImg from "../../assets/Calculator-removebg-preview.png";
import tictactoeImg from "../../assets/TicTacToe-removebg-preview.png";
import weatherImg from "../../assets/Weather-removebg-preview.png";
import workingImg from "../../assets/Working1-removebg-preview.png";

const Projects = () => {
  return (
    <section className="projects-container">
      <h2 className="projects-title">Projects</h2>

      {/* ===== MINI PROJECTS ===== */}
      <div className="projects-section">
        <h3 className="projects-subtitle">Mini Projects</h3>

        <div className="projects-grid">
          {/* Calculator */}
          <div className="project-card">
            <img src={calculatorImg} alt="Calculator" />
            <h4>Calculator</h4>
            <p>
              A simple calculator built using HTML, CSS, and JavaScript with
              basic arithmetic operations.
            </p>
            <a
              href="https://gopalwadhwani.github.io/calculate-me/"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* Tic Tac Toe */}
          <div className="project-card">
            <img src={tictactoeImg} alt="Tic Tac Toe" />
            <h4>Tic Tac Toe</h4>
            <p>
              Classic Tic Tac Toe game made using HTML, CSS, and JavaScript with
              interactive gameplay.
            </p>
            <a
              href="https://gopalwadhwani.github.io/tic-tac-toe/"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* Weather App */}
          <div className="project-card">
            <img src={weatherImg} alt="Weather App" />
            <h4>Weather App</h4>
            <p>
              A weather application that fetches real-time weather data using an
              API and displays temperature and conditions.
            </p>
          </div>
        </div>
      </div>

      {/* ===== MAJOR PROJECTS ===== */}
      <div className="major-project">
        <h3 className="projects-subtitle">Major Projects</h3>

        <div className="working-container">
          <img src={workingImg} alt="Working" />
          <p>currently working on major projects — will update soon!</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
