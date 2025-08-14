import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Left side: brand/name */}
        <div className="footer-left">
          <span className="footer-brand">Dhruv Jindal</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Middle: navigation links */}
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#techstack">Techstack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right side: social icons */}
        <div className="footer-social">
          <a
            href="https://github.com/dhruvjindal007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-jindal-322408294"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
