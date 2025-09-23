import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/navbar';
import Categories from './Components/Categories';
import FullBanner from './Components/FullBanner';
import SellBanner from './Components/SellBanner';
import Hero from "./Components/Hero";
import Footer from "./Components/Footer"
import Mainscreen from './Components/mainscreen';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainscreen />} />

        {/* <Route path="/navbar" element={<Navbar />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/fullbanner" element={<FullBanner />} />
        <Route path="/hero" element={<Hero />} />
        <Route path = "/sellbanner" element = {<SellBanner/>}/> */}
        </Routes>
        <Footer/>
    </Router>

    
  );
}

export default App;
