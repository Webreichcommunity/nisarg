import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Plants from './pages/Plants';
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';



// Import other components

function App() {
  return (
    <Router>
      <Navbar />
      
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
       
        {/* Add routes for other pages */}
      </Routes>
    
      <Footer/>
    </Router>
  );
}

export default App;
