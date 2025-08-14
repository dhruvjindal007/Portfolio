import React, { useEffect, useRef } from "react";
import "./About.css";
import Me from "../../assets/images/Me.jpg";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      aboutRef.current?.classList.add("revealed");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          aboutRef.current?.classList.add("revealed");
          observer.unobserve(aboutRef.current);
        }
      },
      { threshold: 0.15 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="section-card about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-row">
        <figure className="about-img">
          <img
            src={Me}
            alt="Portrait of Dhruv Jindal smiling, wearing a dark jacket"
            loading="lazy"
            decoding="async"
            width="220"
            height="220"
            tabIndex={0}
          />
          <figcaption className="visually-hidden">
            Profile picture of Dhruv Jindal
          </figcaption>
        </figure>
        <div className="about-content">
          <h2 id="about-heading">About Me</h2>
          <p>
            I am a passionate developer skilled in building modern web applications.
            I enjoy exploring new technologies, solving complex problems, and turning
            ideas into reality with clean, efficient code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
