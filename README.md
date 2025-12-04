# Dealmind - Landing Page

Landing page moderne pour Dealmind, plateforme de prospection B2B automatisée et intelligente.

## 🚀 Technologies

- React 18
- JavaScript
- CSS3 avec animations
- Docker & Docker Compose
- Nginx

## 📦 Installation

### Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

L'application sera accessible sur `http://localhost:3000`

### Production avec Docker

```bash
# Construire et lancer avec Docker Compose
docker-compose up --build

# Ou en arrière-plan
docker-compose up -d --build
```

L'application sera accessible sur `http://localhost:3000`

### Build manuel

```bash
# Construire l'application
npm run build

# Le dossier build/ contiendra les fichiers statiques
```

## 📁 Structure du projet

```
dealmind-landing/
├── public/
│   ├── index.html
│   └── Dealmind.io          # Logo de l'entreprise
├── src/
│   ├── components/
│   │   ├── Nav.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── HowItWorks.js
│   │   ├── Pricing.js
│   │   ├── FinalCTA.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── package.json
```

## 🎨 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Animations fluides
- ✅ Navigation fixe avec scroll
- ✅ Sections : Hero, Features, How It Works, Pricing, CTA, Footer
- ✅ Optimisé pour le SEO
- ✅ Prêt pour la production avec Docker

## 🔧 Configuration

### Logo

Remplacer le fichier `public/Dealmind.io` par votre logo réel (format PNG, SVG, etc.).

### Personnalisation

Les couleurs et styles sont définis dans `src/App.css` via les variables CSS.

## 📝 Scripts disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm test` - Lance les tests

## 🐳 Docker

Le projet utilise un build multi-stage :
1. Stage de build : Compile l'application React
2. Stage de production : Serve l'application avec Nginx

## 📄 Licence

© 2025 Dealmind. Tous droits réservés.

