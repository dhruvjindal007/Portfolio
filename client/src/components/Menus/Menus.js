import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import ghibli from "../../assets/images/ghibli.png";
import {
  FcAbout,
  FcHome,
  FcReadingEbook,
  FcOpenedFolder,
  FcContacts,
} from "react-icons/fc";
import { FaComputer } from "react-icons/fa6";

const menuItems = [
  { to: "home", icon: <FcHome />, label: "Home" },
  { to: "about", icon: <FcAbout />, label: "About" },
  { to: "education", icon: <FcReadingEbook />, label: "Education" },
  { to: "techstack", icon: <FaComputer />, label: "Tech Stack" },
  { to: "projects", icon: <FcOpenedFolder />, label: "Projects" },
  { to: "contact", icon: <FcContacts />, label: "Contact" },
];

const Menus = ({ toggle }) => (
  <>
    {toggle && (
      <div className="navbar-profile-row">
        <img src={ghibli} alt="profile" className="navbar-profile-pic" />
      </div>
    )}

    <Fade left duration={1300}>
      <nav className={toggle ? "nav-items sidebar-open" : "nav-items sidebar-closed"}>
        <div className="nav-item">
          {menuItems.map((item, index) => (
            <div key={index} className="nav-link" tabIndex={0}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                // ARIA for accessibility if needed here
              >
                {item.icon}
                {toggle && <span>{item.label}</span>}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </Fade>
  </>
);

export default Menus;
