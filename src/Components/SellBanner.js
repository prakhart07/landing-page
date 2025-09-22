import React from "react";
import "../Assests/CSS/Main.css"

function SellBanner(){
    return(
        
        < div className = "container" >
           
            < section >
            <div className="flex align-center center banner">
                <img alt="Brown Boots" src="img/brown-boots.jpg" />
                <div className="banner-text">
                    <div className="text-light">Couples retreat weekend</div>
                    <div className="text-secondary">Save an extra 20%</div>
                    <div className="text-primary">when you buy 2 pairs of boots</div>
                </div>
                <img alt="Grey Boots" src="img/grey-boots.jpg" />
            </div>
        </section >
      </div >
    );
}