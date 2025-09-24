import React from "react";
import "../Assests/CSS/Main.css";
import { useNavigate } from "react-router-dom";
import img from "../Assests/Images/carved-rock-logo.png";
import profileimg from "../Assests/Images/profile-pic.jpg";





function Navbar({ isLoggedIn, setIsLoggedIn }) { // ✅ Added props for login state
  const navigate = useNavigate();

  const handleLogout = () => {
    if (setIsLoggedIn) setIsLoggedIn(false); // mark user as logged out
    navigate("/login"); // redirect to login page
  };

    return(
         <nav className="header-nav">
        <div className="container flex space-between"></div>
         {/* BRANDING */}
          <div className="flex align-center brand">
            <a href="#">
              <img className="logo" alt="Carved Rock Fitness" src={img}/>
                </a>
          </div>
          {/* SEARCH */}
          <div className="flex flex-one align-center">
            <div>
              <form>
                <input className="search-box" aria-label="Search" placeholder="What can we help you find?" type="search" />
                <button className="search-button" type="submit">SEARCH</button>
              </form>
              <ul className="flex space-between nav-list">
                <li><a href="#">Clothing</a></li>
                <li><a href="#">Footwear</a></li>
                <li><a href="#">Equipment</a></li>
                <li><a href="#">Bags &amp; Travel</a></li>
                <li><a href="#">Trail Reviews</a></li>
              </ul>
            </div>
            
       <div className="flex flex-column account">
          {/* ✅ Conditional button: show Log In if not logged in, Log Out if logged in */}
          {!isLoggedIn ? (
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          ) : (
            <button
              className="login-btn"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
        </div>

          
          </div>
      
      </nav>
    )
}
export default Navbar;
    
