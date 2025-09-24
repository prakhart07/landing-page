
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/navbar';
import Categories from './Components/Categories';
import FullBanner from './Components/FullBanner';
import SellBanner from './Components/SellBanner';
import Hero from "./Components/Hero";
import Contact from "./Components/ContactUs";
import NewContact from "./Components/NewContact"
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/fullbanner" element={<FullBanner />} />
        <Route path="/hero" element={<Hero />} />
        <Route path = "/sellbanner" element = {<SellBanner/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/newcontact" element={<NewContact/>} />
        
        </Routes>
    </Router>

    
  );
}

export default App;
