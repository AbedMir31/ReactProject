import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Parallax from './components/Parallax';
import Home from './pages/home';

import "./App.css";


function App() {
  return (
    <div className="App">
      <div className = "base-container">
        <Parallax />
        <div className = "overlay">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
          <Navbar />
          <Footer />
        </div>
    </div>
  );
}

export default App;
