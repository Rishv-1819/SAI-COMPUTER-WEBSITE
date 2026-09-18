import React from "react";
import "./Header.css";

import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <h2>Recruitment Management System</h2>

      </div>

      <div className="header-center">

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search applicants, jobs..."
          />

        </div>

      </div>

      <div className="header-right">

        <button className="notification-btn">

          <FaBell />

          <span className="badge">3</span>

        </button>

        <div className="profile">

          <FaUserCircle className="profile-icon" />

          <div>

            <h4>HR Admin</h4>

            <p>Administrator</p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;