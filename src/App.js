import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './Components/navbar';
import Footer from "./Components/Footer"
import Mainscreen from './Components/mainscreen';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Dashboard from './Components/dashboard';
import Users from './Components/users';
import RouteLoader from './Components/RouteLoader';
import Analytics from './Components/Analytics';
import { useState } from "react";

import { Import } from 'lucide-react';

 
 
function App() {

   const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
     <BrowserRouter>
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <RouteLoader />
      <Routes>
        <Route path="/" element={<Mainscreen />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/users" element={<Users />} />
           <Route path="/analytics" element={<Analytics />} />
        
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      
        </Routes>
        <Footer/>
    </BrowserRouter>

    
  );
}

export default App;
