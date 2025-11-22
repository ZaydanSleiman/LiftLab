import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Exercises from './pages/Exercises';
import NutritionPlan from './pages/NutritionPlan';

import Chest from './pages/Chest';
import Back from './pages/Back';
import Biceps from './pages/Biceps';
import Triceps from './pages/Triceps';
import Legs from './pages/Legs';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Router>
        <div className="layout">
          <nav className="navbar">
            <button onClick={toggleTheme} className="theme-toggle">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <Navbar />
          </nav>

          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/chest" element={<Chest />} />
              <Route path="/back" element={<Back />} />
              <Route path="/biceps" element={<Biceps />} />
              <Route path="/triceps" element={<Triceps />} />
              <Route path="/legs" element={<Legs />} />
              <Route path="/nutrition" element={<NutritionPlan />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
