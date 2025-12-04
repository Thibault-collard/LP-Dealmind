import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Import LinkedIn Intelligent',
      description: 'Scrapez vos recherches LinkedIn en 1 clic. Sales Navigator ou recherche basique, on gère tout !',
      items: [
        'Pas de limite 2,500 résultats',
        'Multi-sources (posts, groupes)',
        'Filtres avancés & segmentation'
      ]
    },
    {
      icon: '✉️',
      title: 'Email Enrichment',
      description: 'Trouvez 75-85% des emails grâce à notre waterfall de 10+ providers.',
      items: [
        '10+ sources d\'enrichissement',
        'Vérification automatique',
        '95%+ de délivrabilité'
      ]
    },
    {
      icon: '🤖',
      title: 'IA Conversationnelle',
      description: 'Notre IA ne spam pas, elle converse intelligemment avec vos prospects.',
      items: [
        'Détection d\'intention (IA)',
        'Réponses contextuelles',
        'Qualification automatique'
      ]
    },
    {
      icon: '📧',
      title: 'Séquences Multi-Canal',
      description: 'Orchestrez LinkedIn + Email avec des timings parfaits.',
      items: [
        'Templates personnalisables',
        'Variables dynamiques',
        'A/B testing intégré'
      ]
    },
    {
      icon: '💬',
      title: 'Inbox Unifiée',
      description: 'Toutes vos conversations LinkedIn + Email au même endroit.',
      items: [
        'Vue 360° par lead',
        'Statuts & tags personnalisés',
        'Priorisation auto (IA)'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics Avancées',
      description: 'Mesurez tout, optimisez en continu avec des insights actionnables.',
      items: [
        'Tracking temps réel',
        'ROI par campagne',
        'Recommandations IA'
      ]
    },
    {
      icon: '🔗',
      title: 'Intégrations CRM',
      description: 'Sync automatique avec votre CRM préféré.',
      items: [
        'HubSpot, Salesforce, Pipedrive',
        'Sync bidirectionnelle',
        'Custom field mapping'
      ]
    },
    {
      icon: '🛡️',
      title: 'Protection Anti-Ban',
      description: 'Prospectez en sécurité avec nos safeguards intelligents.',
      items: [
        'Rate limiting adaptatif',
        'Monitoring warnings',
        'Délais randomisés'
      ]
    }
  ];

  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-badge">Tout-en-un</span>
        <h2>Tout ce qu'il faut pour prospecter comme un pro</h2>
        <p>Une plateforme complète qui automatise chaque étape de votre prospection commerciale</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <ul className="feature-list">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

