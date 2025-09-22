import React from "react";
import "../Assests/CSS/Main.css"
function Categories(){
    return(
        <section>
            <div className="category">
                <a href="#">
                    <img alt="Splash Chic" src="img/category-1.jpg" />
                    <div className="category-text">
                        <h3>Splash Chic</h3>
                        <div>Women's Wet Gear</div>
                    </div>
                </a>
            </div>
            <div className="category">
                <a href="#">
                    <img alt="Kid Klimbers" src="img/category-2.jpg" />
                    <div className="category-text">
                        <h3>Kid Klimbers</h3>
                        <div>Children's Gear</div>
                    </div>
                </a>
            </div>
            <div className="category">
                <a href="#">
                    <img alt="Pack It In" src="img/category-3.jpg" />
                    <div className="category-text">
                        <h3>Pack It In</h3>
                        <div>Camping Gear</div>
                    </div>
                </a>
            </div>
            <div className="category">
                <a href="#">
                    <img alt="Nature's AC" src="img/category-4.jpg" />
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