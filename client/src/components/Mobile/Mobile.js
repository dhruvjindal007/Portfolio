import React, { useState, useEffect, useRef, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
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
  { to: "home", icon: <FcHome aria-hidden="true" />, label: "Home" },
  { to: "about", icon: <FcAbout aria-hidden="true" />, label: "About" },
  { to: "education", icon: <FcReadingEbook aria-hidden="true" />, label: "Education" },
  { to: "techstack", icon: <FcBiotech aria-hidden="true" />, label: "Tech Stack" },
  { to: "projects", icon: <FcVideoProjector aria-hidden="true" />, label: "Projects" },
  { to: "contact", icon: <FcBusinessContact aria-hidden="true" />, label: "Contact" },
];

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const mainRef = typeof document !== "undefined" ? document.querySelector("main") : null;

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Focus trap & keyboard support
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();

      if (e.key === "Tab" && menuRef.current) {
        const focusableEls = menuRef.current.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableEls.length) return;
        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [menuOpen, closeMenu]);

  // Lock background scroll & make main inert
  useEffect(() => {
    if (!mainRef) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      mainRef.setAttribute("aria-hidden", "true");
    } else {
      document.body.style.overflow = "";
      mainRef.removeAttribute("aria-hidden");
    }
    return () => {
      document.body.style.overflow = "";
      mainRef.removeAttribute("aria-hidden");
    };
  }, [menuOpen, mainRef]);

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <button
        className="menu-icon"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu-list"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        {menuOpen ? <AiOutlineMenuFold /> : <GiHamburgerMenu />}
      </button>

      {menuOpen && (
        <>
          {/* Backdrop for overlay */}
          <div
            className="mobile-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <ul
            id="mobile-menu-list"
            className="menu-list"
            role="list"
            ref={menuRef}
          >
            {menuItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  spy
                  smooth
                  offset={-80}
                  duration={410}
                  onClick={closeMenu}
                  activeClass="mobile-active-link"
                  className="mobile-nav-link"
                  aria-current="false"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </ScrollLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
};

export default MobileNav;
