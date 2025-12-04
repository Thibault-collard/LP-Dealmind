import React from 'react';
import logo from '../Dealmind.io.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Dealmind" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#features">Fonctionnalités</a></li>
        <li><a href="#how-it-works">Comment ça marche</a></li>
        <li><a href="#pricing">Tarifs</a></li>
        
      </ul>
    </nav>
  );
};

export default Nav;

