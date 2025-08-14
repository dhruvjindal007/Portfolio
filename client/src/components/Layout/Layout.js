import React, { useEffect, useRef, useCallback } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menus from "../Menus/Menus";
import "./Layout.css";

const Layout = ({ sidebarExpanded, setSidebarExpanded }) => {
  const sidebarRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const mainRef = useRef(null);
  const prevFocusedRef = useRef(null);

  const isReducedMotion = typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const closeSidebar = useCallback(() => {
    setSidebarExpanded(false);
  }, [setSidebarExpanded]);

  const handleToggle = () => setSidebarExpanded(prev => !prev);

  // Manage body scroll lock and focus trapping for mobile/off-canvas
  useEffect(() => {
    const body = document.body;

    // Save the previously focused element to restore later
    if (sidebarExpanded) {
      prevFocusedRef.current = document.activeElement;
      body.style.overflow = "hidden";
      // Mark main as inert via aria-hidden and data attribute for styling hooks if needed
      if (mainRef.current) {
        mainRef.current.setAttribute("aria-hidden", "true");
        mainRef.current.dataset.inert = "true";
      }
      // Focus the first focusable element in sidebar
      const focusables = sidebarRef.current
        ? sidebarRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        : [];
      if (focusables.length) {
        firstFocusableRef.current = focusables[0];
        lastFocusableRef.current = focusables[focusables.length - 1];
        firstFocusableRef.current.focus({ preventScroll: true });
      }
    } else {
      body.style.overflow = "";
      if (mainRef.current) {
        mainRef.current.removeAttribute("aria-hidden");
        delete mainRef.current.dataset.inert;
      }
      // Restore focus to the element that triggered sidebar
      if (prevFocusedRef.current && prevFocusedRef.current.focus) {
        prevFocusedRef.current.focus({ preventScroll: true });
      }
    }

    return () => {
      body.style.overflow = "";
      if (mainRef.current) {
        mainRef.current.removeAttribute("aria-hidden");
        delete mainRef.current.dataset.inert;
      }
    };
  }, [sidebarExpanded]);

  // Handle ESC to close and focus trap loop
  useEffect(() => {
    if (!sidebarExpanded) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeSidebar();
      }
      if (e.key === "Tab" && sidebarRef.current) {
        const focusables = sidebarRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [sidebarExpanded, closeSidebar]);

  // Close on backdrop click (mobile/off-canvas state)
  const handleBackdropClick = (e) => {
    // Only close if the click is directly on the backdrop area
    if (e.currentTarget === e.target) {
      closeSidebar();
    }
  };

  return (
    <div className={`sidebar-section ${sidebarExpanded ? "sidebar-expanded" : ""}`}>
      {/* Backdrop for mobile when sidebar is open */}
      {sidebarExpanded && (
        <div
          className="sidebar-backdrop"
          onClick={handleBackdropClick}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            transition: isReducedMotion ? "none" : "opacity 0.3s ease",
            opacity: 1,
            zIndex: 9
          }}
        />
      )}

      <aside
        ref={sidebarRef}
        className="sidebar"
        role="dialog"
        aria-label="Main navigation"
        aria-modal={sidebarExpanded ? "true" : "false"}
      >
        <button
          className="sidebar-toggle-btn"
          onClick={handleToggle}
          aria-expanded={sidebarExpanded}
          aria-label={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
          title={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarExpanded ? <AiOutlineDoubleLeft size={30} /> : <AiOutlineDoubleRight size={30} />}
        </button>

        {/* Navigation content */}
        <nav role="navigation" aria-label="Primary">
          <Menus toggle={sidebarExpanded} />
        </nav>
      </aside>

      <main id="content" className="main-container" ref={mainRef} tabIndex={-1}>
        <Home />
      </main>
    </div>
  );
};

export default Layout;
