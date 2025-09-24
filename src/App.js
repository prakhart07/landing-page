import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/navbar';
import Footer from "./Components/Footer"
import Mainscreen from './Components/mainscreen';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Dashboard from './Components/dashboard';
import { useState } from "react";
 
function App() {

   const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Mainscreen />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      
        </Routes>
        <Footer/>
    </Router>

    
  );
}

export default App;
