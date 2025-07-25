import "./About.css";
import Me from "../../assets/images/Me.jpg";

const About = () => (
  <section className="section-card about-section" id="about" tabIndex={-1} aria-label="About Me section">
    <div className="about-row">
      <div className="about-img">
        <img src={Me} alt="Dhruv Jindal Profile" loading="lazy" tabIndex={0} />
      </div>
      <div className="about-content">
        <h1 tabIndex={0}>About Me</h1>
        <p tabIndex={0}>
          I am a passionate developer skilled in building modern web applications. 
          I love working with new technologies and turning ideas into reality.
        </p>
      </div>
    </div>
  </section>
);

export default About;
