import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
