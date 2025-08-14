import React, { useMemo } from "react";
import "./Menus.css";
import { Link as ScrollLink } from "react-scroll";
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
  { to: "home", icon: <FcHome aria-hidden="true" focusable="false" />, label: "Home" },
  { to: "about", icon: <FcAbout aria-hidden="true" focusable="false" />, label: "About" },
  { to: "education", icon: <FcReadingEbook aria-hidden="true" focusable="false" />, label: "Education" },
  { to: "techstack", icon: <FaComputer aria-hidden="true" focusable="false" />, label: "Tech Stack" },
  { to: "projects", icon: <FcOpenedFolder aria-hidden="true" focusable="false" />, label: "Projects" },
  { to: "contact", icon: <FcContacts aria-hidden="true" focusable="false" />, label: "Contact" },
];

const Menus = ({ toggle }) => {
  // Avoid re-creating items on every render
  const items = useMemo(() => menuItems, []);

  return (
    <>
      {toggle && (
        <div className="navbar-profile-row">
          <img
            src={ghibli}
            alt="Studio Ghibli-inspired profile avatar"
            className="navbar-profile-pic"
            loading="lazy"
            width="90"
            height="90"
            decoding="async"
          />
        </div>
      )}

      <nav
        className={toggle ? "nav-items sidebar-open" : "nav-items sidebar-closed"}
        aria-label="Main navigation"
        role="navigation"
      >
        <ul className="nav-list" role="list">
          {items.map((item, index) => (
            <li
              key={item.to}
              className="nav-item"
              style={{ "--stagger": `${index * 60}ms` }}
            >
              <ScrollLink
                to={item.to}
                spy
                smooth
                offset={-100}
                duration={500}
                className="nav-link"
                activeClass="active"
                tabIndex={0}
                aria-label={item.label}
                // react-scroll adds 'active' class; map it to aria-current without manual DOM querying
                onSetActive={() => {
                  // react-scroll sets .active on the current link; aria-current is better for AT
                  // We can rely on CSS + a small attribute set using currentTarget when callback fires
                  // However, react-scroll does not pass event; use document query scoped by label
                  // Safer: let CSS handle visuals; set aria-current at render time using isDynamic prop below
                }}
              >
                {item.icon}
                {toggle && <span className="nav-text">{item.label}</span>}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menus;
