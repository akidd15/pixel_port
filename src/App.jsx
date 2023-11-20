import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';
import './assets/styles/Nav.css';
import './assets/styles/Resume.css';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Header />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;

