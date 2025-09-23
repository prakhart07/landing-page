import React from "react";
import "../Assests/CSS/Main.css"
import img from"../Assests/Images/pluralsight-white.png"

function Footer(){
    return(
        
        <footer>
            <section className="container space-between lists">
                <div>
                    <div className="text-primary link-header">Customer Support</div>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Order Tracker</a></li>
                        <li><a href="#">Returns &amp; Refunds</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Store Locator</a></li>
                        <li><a href="#">Site Map</a></li>
                    </ul>
                </div>
                <div>
                    <div className="text-primary link-header">Company Info</div>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Mobile Apps</a></li>
                    </ul>
                </div>
                <div>
                    <div className="text-primary link-header">Privacy &amp; Terms</div>
                    <ul>
                        <li><a href="#">Privacy &amp; Security</a></li>
                        <li><a href="#">Statement</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
                <div className="social">
                    <div className="text-primary link-header">Follow Us</div>
                    <ul>
                        <li><a className="twitter" href="#" /></li>
                        <li><a className="facebook" href="#" /></li>
                        <li><a className="instagram" href="#" /></li>
                        <li><a className="pinterest" href="#" /></li>
                        <li><a href="#" /></li>
                    </ul>
                    <div>
                        <div className="link-header">Email Updates</div>
                        <div className="link-subheader">Exclusive sales, special offers, and more.</div>
                        <input className="form-control" type="text" placeholder="Enter email address" />
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </section>
            {/* PS DEMO */}
            <section className="ps">
                <div className="flex flex-column align-center">
                    <img src={img} />
                    <div className="demo">This site is created for demonstrative purposes only and does not offer any real products or services.</div>
                </div>
            </section>
            <div className="text-primary copyright">©Pluralsight 2025</div>
        </footer>
    );
}
export default Footer; 
