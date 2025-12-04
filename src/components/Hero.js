import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">
            ⚡ Nouveau : IA Conversationnelle
          </span>
          <h1>
            La prospection B2B <br />
            qui <span className="gradient-text">convertit vraiment</span> <span className="emoji">🎯</span>
          </h1>
          <p>
            Transformez LinkedIn en pipeline commercial automatisé. Dealmind trouve les décideurs, enrichit leurs emails et lance des conversations intelligentes qui bookent des meetings.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn-primary">
              Commencer gratuitement →
            </a>
            <a href="#how-it-works" className="btn-secondary">
              📺 Voir la démo
            </a>
          </div>
          <div className="social-proof">
            <div className="avatars">
              <div className="avatar">JD</div>
              <div className="avatar">ML</div>
              <div className="avatar">SP</div>
              <div className="avatar">+K</div>
            </div>
            <div className="social-proof-text">
              Rejoint par <strong>1,200+ commerciaux</strong> en Europe 🇪🇺
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="mockup-card">
            <div className="mockup-header">
              <div className="mockup-avatar">TM</div>
              <div className="mockup-info">
                <h4>Thomas Martin</h4>
                <p>Sales Manager @ TechCorp</p>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">1,247</div>
                <div className="stat-label">Leads enrichis</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">47%</div>
                <div className="stat-label">Taux réponse</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">€142K</div>
                <div className="stat-label">Pipeline généré</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">89</div>
                <div className="stat-label">Meetings bookés</div>
              </div>
            </div>
          </div>
          <div className="floating-element floating-1"></div>
          <div className="floating-element floating-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

