import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Dealmind ✨</h3>
          <p>La plateforme de prospection B2B intelligente qui transforme LinkedIn en machine à convertir. Fait avec ❤️ à Lyon.</p>
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
        <div className="footer-links">
          <h4>Ressources</h4>
          <ul>
            <li><a href="#demo">Documentation</a></li>
            <li><a href="#demo">Blog</a></li>
            <li><a href="#demo">Guides</a></li>
            <li><a href="#demo">Cas clients</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Entreprise</h4>
          <ul>
            <li><a href="#demo">À propos</a></li>
            <li><a href="#demo">Carrières</a></li>
            <li><a href="#demo">Contact</a></li>
            <li><a href="#demo">Legal</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Dealmind. Tous droits réservés. Made with 💜 in France 🇫🇷</p>
      </div>
    </footer>
  );
};

export default Footer;

