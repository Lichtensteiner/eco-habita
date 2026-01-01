# Eco Habita Link 🌱

Une plateforme web moderne dédiée à la gestion durable des ressources environnementales. Eco Habita Link aide les utilisateurs à suivre et gérer leur consommation d'eau, de déchets et d'énergie de manière responsable.

**Author**: [@Lichtensteiner](https://github.com/Lichtensteiner)  
**Repository**: [github.com/Lichtensteiner/eco-habita](https://github.com/Lichtensteiner/eco-habita)

---

## 📋 Table des matières

- [À propos](#à-propos)
- [Stack Technologique](#-stack-technologique)
- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Démarrage](#-démarrage)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Configuration](#-configuration)
- [Déploiement](#-déploiement)
- [Contribution](#-contribution)
- [License](#-license)

---

## À propos

Eco Habita Link est une application web progressive conçue pour sensibiliser et engager les utilisateurs dans des pratiques durables. Elle offre des outils intuitifs pour :

- 💧 Suivre la consommation d'eau
- 🗑️ Gérer les déchets de manière responsable
- ⚡ Monitorer l'utilisation d'énergie
- 📊 Visualiser les données via des graphiques
- 👤 Gérer un profil utilisateur personnalisé
- 🔐 Authentification sécurisée

---

## 🚀 Stack Technologique

### Frontend
- **React 18** - Bibliothèque UI moderne
- **TypeScript** - Type-safety et meilleure expérience développeur
- **Vite** - Build tool ultra-rapide et léger
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn UI** - Composants UI accessibles et customisables
- **Radix UI** - Primitives UI de bas niveau

### Backend & Database
- **Supabase** - Backend-as-a-Service (PostgreSQL, Auth, Realtime)
- **PostgreSQL** - Base de données relationnelle

### Outils & Librairies
- **React Router** - Navigation et routing
- **React Hook Form** - Gestion optimisée des formulaires
- **TanStack Query** - State management asynchrone
- **Lucide React** - Icônes vectorielles
- **Sonner** - Notifications toast élégantes
- **Zod** - Validation de schémas TypeScript-first
- **Date-fns** - Utilitaires de date modernes

### Development
- **ESLint** - Linting du code
- **Bun** - Package manager ultra-rapide (alternative à npm)
- **PostCSS** - Processeur CSS

---

## ✨ Fonctionnalités

- ✅ Interface responsive et moderne
- ✅ Authentification utilisateur sécurisée
- ✅ Dashboard interactif avec statistiques
- ✅ Gestion des sections eau, déchets, services
- ✅ Dialogues de commande et abonnement
- ✅ Navigation intuitive et fluide
- ✅ Composants réutilisables et maintenables
- ✅ Design moderne avec Tailwind CSS

---

## 📦 Installation

### Prérequis
- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0 (ou **bun**)
- Un compte **Supabase** (optionnel, pour les fonctionnalités backend)

### Étapes

1. **Cloner le repository**
   ```bash
   git clone https://github.com/Lichtensteiner/eco-habita.git
   cd eco-habita
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou avec bun (plus rapide)
   bun install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```

   Remplissez les variables Supabase dans `.env.local` :
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

---

## 🎯 Démarrage

### Mode développement
```bash
npm run dev
```
L'application s'ouvrira automatiquement sur `http://localhost:5173`

### Build pour la production
```bash
npm run build
```
Génère un build optimisé dans le dossier `dist/`.

### Aperçu de la build
```bash
npm run preview
```

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build optimisé pour la production |
| `npm run build:dev` | Build en mode développement |
| `npm run preview` | Prévisualise la build de production |
| `npm run lint` | Vérifie la qualité du code avec ESLint |

---

## 📁 Structure du projet

```
eco-habita/
├── public/              # Assets statiques
│   ├── favicon.ico
│   ├── logo.png
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/      # Composants React réutilisables
│   │   ├── ui/         # Composants Shadcn UI (50+ composants)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LoginDialog.tsx
│   │   ├── OrderDialog.tsx
│   │   ├── SubscriptionDialog.tsx
│   │   ├── WaterSection.tsx
│   │   ├── WasteSection.tsx
│   │   └── ServicesSection.tsx
│   ├── pages/          # Pages principales
│   │   ├── Index.tsx
│   │   ├── Profile.tsx
│   │   └── NotFound.tsx
│   ├── hooks/          # Custom React hooks
│   │   ├── useAuth.tsx
│   │   └── use-toast.ts
│   ├── integrations/   # Intégrations externes
│   │   └── supabase/
│   │       ├── client.ts
│   │       └── types.ts
│   ├── lib/            # Utilitaires
│   │   └── utils.ts
│   ├── App.tsx         # Composant racine
│   ├── main.tsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── supabase/           # Configuration Supabase
│   ├── config.toml
│   └── migrations/
├── .env                # Variables d'environnement
├── .gitignore          # Fichiers à ignorer
├── package.json        # Dépendances et scripts
├── tsconfig.json       # Configuration TypeScript
├── vite.config.ts      # Configuration Vite
├── tailwind.config.ts  # Configuration Tailwind CSS
└── README.md           # Ce fichier
```

---

## ⚙️ Configuration

### Supabase Setup

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Récupérez votre `Project URL` et `Anon Key`
3. Configurez votre fichier `.env.local`
4. Exécutez les migrations (optionnel) :
   ```bash
   supabase db push
   ```

### Tailwind CSS

Configuration personnalisée dans `tailwind.config.ts`

### ESLint

Configuration dans `eslint.config.js`

---

## 🚀 Déploiement

### Sur Vercel (Recommandé)

1. Pushez votre code sur GitHub
2. Connectez votre repo à [vercel.com](https://vercel.com)
3. Configurez les variables d'environnement
4. Vercel déploiera automatiquement

### Sur Netlify

```bash
npm run build
# Déployez le dossier dist/
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment :

1. **Fork** le repository
2. Créez une branche (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'feat: Add amazing feature'`)
4. Poussez la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une **Pull Request**

### Standards de code
- Suivez la configuration ESLint
- Utilisez TypeScript
- Commentez votre code complexe
- Testez avant de proposer une PR

---

## 📚 Ressources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI Components](https://ui.shadcn.com)
- [Supabase Docs](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📄 License

Ce projet est sous license MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📞 Contact

**Auteur**: Lichtensteiner  
**Email**: martinienmvezogo@gmail.com  
**GitHub**: [@Lichtensteiner](https://github.com/Lichtensteiner)  

---

**Made with ❤️ for a sustainable future** 🌍
