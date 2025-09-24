import React from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
import SellBaner from "./SellBanner";
import FullBanner from "./FullBanner";
import Categories from "./Categories";


function Mainscreen(){
    return(
 <div>
      <Navbar />
      <Hero />
      <SellBaner />
      <Categories />
      <FullBanner />
    </div>
    );
}
export default Mainscreen;