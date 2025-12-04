import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: '',
      title: 'Importez vos leads',
      description: 'Lancez une recherche LinkedIn avec vos critères. Cliquez sur notre extension Chrome et importez jusqu\'à 10,000 profils en quelques secondes. Sales Nav ou pas, on s\'adapte !'
    },
    {
      number: '2',
      icon: '',
      title: 'Enrichissement auto',
      description: 'Notre waterfall trouve les emails en interrogeant 10+ bases. Taux de succès : 75-85%. Vérification automatique pour éviter les bounces. Vous n\'avez rien à faire !'
    },
    {
      number: '3',
      icon: '',
      title: 'Lancez votre séquence',
      description: 'Choisissez un template ou créez le vôtre. Notre IA personnalise chaque message selon le profil. Définissez les délais et lancez. C\'est parti !'
    },
    {
      number: '4',
      icon: '',
      title: 'L\'IA prend le relais',
      description: 'Les messages partent en autopilot. Quand un prospect répond, l\'IA détecte son intention et adapte la réponse. Vous intervenez juste pour closer.'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-header">
        <span className="section-badge">Simple & Rapide</span>
        <h2>De LinkedIn au meeting booké en 4 étapes</h2>
        <p>Un process hyper simple qui fonctionne vraiment</p>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

