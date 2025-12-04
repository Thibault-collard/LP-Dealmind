import React from 'react';
import logo from '../Dealmind.io.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
        <img src={logo} alt="Dealmind" className="logo-img" />
          <p>La plateforme de prospection B2B intelligente qui transforme LinkedIn en machine à convertir.</p>
        </div>
        <div className="footer-links">
          <h4>Produit</h4>
          <ul>
            <li><a href="#features">Fonctionnalités</a></li>
            <li><a href="#pricing">Tarifs</a></li>
            <li><a href="#demo">Intégrations</a></li>
            <li><a href="#demo">Changelog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

