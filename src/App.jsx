import { useState } from 'react'
import React from 'react';

import './assets/styles/App.css'
import Nav from './components/Nav'
import Header from './components/Header';
import Card from './components/Card';
import Project from './components/Project';
import Footer from './components/footer';




function App() {

  return (
  <div>

    <Nav />
    <Header />
    <Card />
    <Project />
    <Footer />

    
    
  </div>

);
}

export default App;
