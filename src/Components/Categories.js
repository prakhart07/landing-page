import React from "react";
import "../Assests/CSS/Main.css"
import img1 from "../Assests/Images/category-1.jpg"
import img2 from "../Assests/Images/category-2.jpg"
import img3 from "../Assests/Images/category-3.jpg"
import img4 from "../Assests/Images/category-4.jpg"

function Categories(){
    return(
        <section>
            <div className="category">
                <a href="#">
                    <img alt="Splash Chic" src={img1} />
                    <div className="category-text">
                        <h3>Splash Chic</h3>
                        <div>Women's Wet Gear</div>
                    </div>
                </a>
            </div>
            <div className="category">
                <a href="#">
                    <img alt="Kid Klimbers" src={img2} />
                    <div className="category-text">
                        <h3>Kid Klimbers</h3>
                        <div>Children's Gear</div>
                    </div>
                </a>
            </div>
            <div className="category">
                <a href="#">
                    <img alt="Pack It In" src={img3} />
                    <div className="category-text">
                        <h3>Pack It In</h3>
                        <div>Camping Gear</div>
                    </div>
                </a>
            </div>
            <div className="category">
                <a href="#">
                    <img alt="Nature's AC" src={img4} />
                    <div className="category-text">
                        <h3>Nature's AC</h3>
                        <div>Men's Shorts</div>
                    </div>
                </a>
            </div>
        </section>
    );
}
export default Categories;