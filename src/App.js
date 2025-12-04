import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
    </div>
  );
}

export default App;

