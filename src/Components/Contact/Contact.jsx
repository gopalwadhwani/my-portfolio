import React from "react";

// image imports
import emailIcon from "../../assets/mail-removebg-preview.png";
import linkedinIcon from "../../assets/in-removebg-preview.png";
import githubIcon from "../../assets/github-removebg-preview.png";

// normal CSS import
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="contact">
      <div className="contact-text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className="contact-links">

        {/* Email */}
        <li>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:yourmail@gmail.com">
            gopalwadhwani435@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <img src={linkedinIcon} alt="LinkedIn" />
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        {/* GitHub */}
        <li>
          <img src={githubIcon} alt="GitHub" />
          <a
            href="https://github.com/gopalwadhwani"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/gopalwadhwani
          </a>

        </li>

      </ul>
    </footer>
  );
};

export default Contact;
