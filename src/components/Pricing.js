import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Pour tester la magie',
      price: '0€',
      features: [
        '50 imports LinkedIn/mois',
        '50 enrichissements email',
        '1 campagne active',
        '100 messages/mois',
        'Inbox unifiée',
        'Support communauté'
      ],
      cta: 'Commencer maintenant →',
      featured: false
    },
    {
      name: 'Pro',
      description: 'Pour scaler sérieusement',
      price: '79€',
      features: [
        '2,000 imports LinkedIn/mois',
        '1,500 enrichissements',
        '10 campagnes actives',
        '3,000 messages/mois',
        'IA conversationnelle',
        'A/B testing',
        'Intégrations CRM',
        'Analytics avancées',
        'Support prioritaire'
      ],
      cta: 'Essai 14 jours gratuit 🎉',
      featured: true
    },
    {
      name: 'Business',
      description: 'Pour les teams qui cartonnent',
      price: '199€',
      features: [
        '10,000 imports/mois',
        '7,500 enrichissements',
        'Campagnes illimitées',
        '15,000 messages/mois',
        '10 utilisateurs',
        'IA Auto-pilot (Beta)',
        'Phone enrichment',
        'Account manager dédié',
        'Support 24h'
      ],
      cta: 'Parler à un expert 👋',
      featured: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <span className="section-badge">💎 Prix transparents</span>
        <h2>Un plan pour chaque besoin</h2>
        <p>Commencez gratuitement, upgradez quand vous êtes prêt</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            <h3>{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            <div className="pricing-price">
              {plan.price}<span>/mois</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-cta">{plan.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

