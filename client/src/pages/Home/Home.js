import React, { useRef, useEffect } from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import Resume from '../../assets/docs/Resume.pdf';

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      homeRef.current?.classList.add('revealed');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (homeRef.current) observer.observe(homeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="home-container"
      id="home"
      aria-label="Home Section"
      ref={homeRef}
    >
      <div className="home-content centered">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Dhruv Jindal</span>
        </h1>
        <h2 className="hero-subtitle">
          <Typewriter
            words={[
              'FullStack Developer',
              'MERN Stack Dev',
              'React Native Dev',
              'Eat Sleep Code Repeat!'
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1500}
          />
        </h2>
        <p className="home-tagline">
          Passionate about creating cutting-edge web and mobile applications with
          clean design and efficient code.
        </p>
        <div className="home-buttons">
          <button
            className="btn-primary"
            onClick={() => alert('Hire me clicked!')}
          >
            Hire Me
          </button>
          <a
            className="btn-cv"
            href={Resume}
            download="Dhruv_Jindal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
