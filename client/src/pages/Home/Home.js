import React from 'react';
import './Home.css';
import { useTheme } from '../../context/ThemeContext';
import { Typewriter } from 'react-simple-typewriter';
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import Fade from 'react-reveal/Fade';
import Resume from '../../assets/docs/Resume.pdf';

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className='container-fluid home-container' id="home">
      <button
        className='theme-btn'
        onClick={handleTheme}
        aria-label="Toggle Theme"
        type="button"
        onKeyDown={(e) => e.key === 'Enter' && handleTheme()}
      >
        {theme === 'light' ? (<FaMoon size={25} />) : (<IoIosSunny size={25} />)}
      </button>
      <Fade right duration={1000}>
        <div className='container home-content'>
          <h1>Hi, I'm Dhruv Jindal</h1>
          <h2>
            <Typewriter
              words={[
                'FullStack Dev',
                'Mern Stack Dev',
                'React Native Dev',
                'Eat Sleep Code Repeat!'
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </h2>
          <Fade bottom>
            <div className='home-buttons'>
              <button className='btn-primary' onClick={() => alert('Hire me clicked!')}>Hire Me</button>
              <a className='btn-cv' href={Resume} download="Dhruv_Jindal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
