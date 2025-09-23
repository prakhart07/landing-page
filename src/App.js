import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/navbar';
import Categories from './Components/Categories';
import FullBanner from './Components/FullBanner';

import Hero from "./Components/Hero";
import SellBanner from './Components/SellBanner';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/fullbanner" element={<FullBanner />} />
        <Route path="/hero" element={<Hero />} />
        <Route path = "/sellbanner" element = {<SellBanner/>}/>
        </Routes>
    </Router>

    
  );
}

export default App;
