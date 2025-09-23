import React from "react";
import "../Assests/CSS/Main.css"
import img1 from "../Assests/Images/carved-rock-logo.png"
import img2 from "../Assests/Images/profile-pic.jpg"
function Navbar(){

    return(
         <nav className="header-nav">
        <div className="container flex space-between"></div>
         {/* BRANDING */}
          <div className="flex align-center brand">
            <a href="#">
              <img className="logo" alt="Carved Rock Fitness" src={img1} />
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
            {/* PROFILE */}
            <div className="flex align-center profile">
              <div className="flex flex-column account">
                John Doe <a href="#">Log Out</a>
              </div>
              <div className="profile-pic"><img alt="John Doe" src={img2} /></div>
            </div>
          </div>
      
      </nav>
    )
}
export default Navbar;
    
