// App.js - Main Application Component with dynamic sidebar margin & theme toggle sync

import { useState } from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Edu from "./pages/Edu/Edu";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Mobile from "./components/Mobile/Mobile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [theme] = useTheme();
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const sidebarWidth = sidebarExpanded ? 210 : 80;

  return (
    <div id={theme}>
      <ToastContainer />
      <Mobile />
      <Layout sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
      <main className="main-content" style={{ marginLeft: sidebarWidth }}>
        <About />
        <Edu />
        <Techstack />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <h4 className="text-center">Footer © 2025</h4>
      </footer>
      <ScrollToTop smooth color="#f29f67" style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }} />
    </div>
  );
}

export default App;
