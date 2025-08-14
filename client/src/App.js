import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Edu from "./pages/Edu/Edu";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import Mobile from "./components/Mobile/Mobile";
import { ToastContainer } from "react-toastify";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("sidebar-collapsed", !sidebarExpanded);
  }, [sidebarExpanded]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Always-visible theme toggle button fixed on right */}
      <button
        className="theme-btn right-fixed"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? <FaMoon size={20} /> : <IoIosSunny size={22} />}
      </button>

      <Mobile />
      <Layout
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
      />
      <main className="main-content" role="main">
        <About />
        <Edu />
        <Techstack />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <h4 className="text-center">Footer © 2025</h4>
      </footer>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        aria-label="Scroll to top"
      />
    </>
  );
}

export default App;
