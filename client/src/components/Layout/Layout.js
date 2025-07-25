// Layout.js - Sidebar layout controlling sidebar toggle and syncing state with App.js

import React from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = ({ sidebarExpanded, setSidebarExpanded }) => {
  const handleToggle = () => setSidebarExpanded((prev) => !prev);

  return (
    <div className="sidebar-section">
      <div className={`sidebar${sidebarExpanded ? " sidebar-toggle" : ""}`}>
        <div className="sidebar-toggle-icons">
          <p
            tabIndex={0}
            role="button"
            aria-label={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
            onClick={handleToggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleToggle();
            }}
          >
            {sidebarExpanded ? <AiOutlineDoubleLeft size={30} /> : <AiOutlineDoubleRight size={30} />}
          </p>
        </div>
        <Menus toggle={sidebarExpanded} />
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
