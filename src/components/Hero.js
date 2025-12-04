import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">
            Nouveau : IA Conversationnelle
          </span>
          <h1>
            La prospection B2B <br />
            qui <span className="gradient-text">convertit vraiment</span>
          </h1>
          <p>
            Transformez LinkedIn en pipeline commercial automatisé. Dealmind trouve les décideurs, enrichit leurs emails et lance des conversations intelligentes qui bookent des meetings.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn-primary">
              Commencer gratuitement →
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
              Rejoint par <strong>1,200+ commerciaux</strong> en Europe
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="dashboard-mockup">
            <div className="linkedin-search-section">
              <div className="search-label-top">RECHERCHE LINKEDIN</div>
              <div className="linkedin-search-box">
                <div className="search-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="search-query">
                  <span className="search-term">CEO</span>
                  <span className="search-separator">à</span>
                  <span className="search-term">Paris</span>
                </div>
                <div className="search-result-badge">1024 résultats</div>
              </div>
            </div>
            
            <div className="workflow-section">
              <div className="workflow-grid">
                <div className="workflow-card">
                  <div className="step-icon email">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="workflow-card-content">
                    <h5>Enrichissement Email</h5>
                    <div className="enrichment-ratio">
                      <div className="ratio-header">
                        <span className="ratio-text">856 emails trouvés</span>
                        <span className="ratio-percentage">84%</span>
                      </div>
                      <div className="ratio-bar">
                        <div className="ratio-bar-fill" style={{width: '84%'}}></div>
                      </div>
                      <span className="ratio-source">sur 1024 profils LinkedIn</span>
                    </div>
                    <div className="workflow-stat">
                      <span className="stat-number">856</span>
                      <span className="stat-label">emails trouvés</span>
                    </div>
                  </div>
                  <div className="workflow-arrow">→</div>
                </div>
                
                <div className="workflow-card">
                  <div className="step-icon ai">AI</div>
                  <div className="workflow-card-content">
                    <h5>IA Conversationnelle</h5>
                    <div className="channel-badges">
                      <span className="channel-badge email-badge">Email</span>
                      <span className="channel-badge linkedin-badge">LinkedIn</span>
                    </div>
                    <div className="workflow-stat">
                      <span className="stat-number">247</span>
                      <span className="stat-label">conversations multi-canal</span>
                    </div>
                  </div>
                  <div className="workflow-arrow">→</div>
                </div>
                
                <div className="workflow-card final">
                  <div className="step-icon meeting">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="workflow-card-content">
                    <h5>Meetings bookés</h5>
                    <div className="workflow-stat highlight">
                      <span className="stat-number">89</span>
                      <span className="stat-label">meetings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="activity-feed">
              <div className="activity-header">Activité en temps réel</div>
              <div className="activity-item">
                <div className="activity-avatar">CL</div>
                <div className="activity-text">
                  <strong>Claire Lefebvre</strong> a répondu à votre message LinkedIn
                  <span className="activity-time">Il y a 2 min</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-avatar">VB</div>
                <div className="activity-text">
                  <strong>Vincent Bertrand</strong> a ouvert votre email
                  <span className="activity-time">Il y a 15 min</span>
                </div>
              </div>
              <div className="activity-item highlight-item">
                <div className="activity-avatar success">✓</div>
                <div className="activity-text">
                  <strong>Meeting confirmé</strong> avec Amélie Rousseau
                  <span className="activity-time">Il y a 1h</span>
                </div>
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

