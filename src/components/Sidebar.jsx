import React from "react";
import { NavLink as Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside className="main-sidebar nav-pills sidebar-dark-primary sidebar-no-expand elevation-1">
        <p className="brand-link">
          <img
            src="/assets/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-1"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </p>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-map-marker-alt"></i>
                  <p>หน้าแรก</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/documents" className="nav-link">
                  <i className="nav-icon fas fa-utensils"></i>
                  <p>เอกสารออนไลน์</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
