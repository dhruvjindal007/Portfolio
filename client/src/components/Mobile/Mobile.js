import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import "./Mobile.css";

const menuItems = [
  { to: "home", icon: <FcHome />, label: "Home" },
  { to: "about", icon: <FcAbout />, label: "About" },
  { to: "education", icon: <FcReadingEbook />, label: "Education" },
  { to: "techstack", icon: <FcBiotech />, label: "Tech Stack" },
  { to: "projects", icon: <FcVideoProjector />, label: "Projects" },
  { to: "contact", icon: <FcBusinessContact />, label: "Contact" },
];

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(!menuOpen);

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation menu">
      <button
        className="menu-icon"
        onClick={handleMenuClick}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu-list"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        {menuOpen ? <AiOutlineMenuFold /> : <GiHamburgerMenu />}
      </button>

      {menuOpen && (
        <div id="mobile-menu-list" className="menu-list" role="menu">
          {menuItems.map((item) => (
            <div key={item.to} className="nav-link" role="menuitem" tabIndex={0}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={410}
                onClick={handleMenuClick}
                activeClass="active-link"
                tabIndex={-1}
              >
                {item.icon} {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
