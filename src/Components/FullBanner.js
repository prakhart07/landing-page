import React from "react";
import "../Assests/CSS/Main.css"

function FullBanner(){
    return(
        
        < section className = "full-banner" >
        <div className="full-banner-image" />
        <div className="flex flex-column align-center center full-banner-sidebar">
          <h4>Trail Review</h4>
          <div>Asphalt</div>
          <div>National Park</div>
          <a className="btn btn-default" href="#">See Review</a>
        </div>
      </section >
    );
}

export default FullBanner;