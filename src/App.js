import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/navbar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        </Routes>
    </Router>

    
  );
}

export default App;
