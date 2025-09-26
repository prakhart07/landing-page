import React, { useState } from "react";
import "../Assests/CSS/Main.css";
import { useNavigate } from "react-router-dom";
import img from "../Assests/Images/carved-rock-logo.png";
import profileimg from "../Assests/Images/profile-pic.jpg";
import guestav from "../Assests/Images/user.png";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Remove auth token if used
    localStorage.removeItem("authToken");
    if (setIsLoggedIn) setIsLoggedIn(false); // mark user as logged out
    setShowDropdown(false);
    navigate("/login"); // redirect to login page
  };

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  return (
    <nav className="header-nav">
      <div className="container flex space-between">
        {/* BRANDING */}
        <div className="flex align-center brand">
          <a href="#">
            <img className="logo" alt="Carved Rock Fitness" src={img} />
          </a>
        </div>

        {/* SEARCH */}
        <div className="flex flex-one align-center">
          <div>
            <form>
              <input
                className="search-box"
                aria-label="Search"
                placeholder="What can we help you find?"
                type="search"
              />
              <button className="search-button" type="submit">
                SEARCH
              </button>
            </form>

            <ul className="flex space-between nav-list">
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Footwear</a>
              </li>
              <li>
                <a href="#">Equipment</a>
              </li>
              <li>
                <a href="#">Bags &amp; Travel</a>
              </li>
              <li>
                <a href="#">Trail Reviews</a>
              </li>
            </ul>
          </div>

          {/* Profile */}
          <div className="flex flex-column account" style={{ position: "relative" }}>
            <div onClick={handleProfileClick}>
              <img
                src={isLoggedIn ? profileimg : guestav}
                alt="Profile"
                className="profile-pic"
              />
            </div>

            {/* Dropdown */}
            {isLoggedIn && showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: 0,
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  zIndex: 100,
                  width: "200px",
                }}
              >
                <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid #eee" }}>
                  <p style={{ margin: 0, fontWeight: "500" }}>Admin User</p>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
                    admin@company.com
                  </p>
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    border: "none",
                    backgroundColor: "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  onClick={() => alert("Settings clicked")}
                >
                  Settings
                </button>
                <button
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    border: "none",
                    backgroundColor: "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#dc2626",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
