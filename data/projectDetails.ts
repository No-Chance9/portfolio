export type ProjectDetail = {
  slug: string;
  title: string;
  client?: string;
  role?: string;
  context?: string;
  missions: string[];
  stack: string[];
  confidentialityNote?: string;
  demoLink?: string;
  demoDescription?: string;
  screenshot?: string;
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "pharma-platform",
    title: "Plateforme e-commerce pharmaceutique",
    client: "Laboratoire pharmaceutique (Schmidt-Nagel)",
    role: "Développeur front-end/back-end freelance",
    context:
      "Intervention sur un site e-commerce pharmaceutique déjà existant, avec des contraintes fortes de conformité et de sécurité (accès réservé aux professionnels de santé).",
    missions: [
      "Ajout d’une fonctionnalité de zoom sur l’image produit pour améliorer la lisibilité des textes sur les packaging.",
      "Mise en place d’un historique des commandes dans l’espace client (réservé aux professionnels de santé).",
      "Création de pages de finalisation d’inscription spécifiques à chaque langue (x3), afin de segmenter les conversions par région pour les campagnes publicitaires.",
      "Implémentation d’un mécanisme de chiffrement sécurisé pour le mot de passe utilisé lors de la connexion à l’API Directus.",
      "Mise en place d’une double authentification par email (2FA) pour les connexions à WordPress.",
      "Reparamétrage du SMTP avec affichage de l’adresse email de l’inscrit pour une meilleure traçabilité des communications."
    ],
    stack: [
      "React",
      "JavaScript",
      "WordPress (front + REST API)",
      "Directus",
      "PHP",
      "MySQL",
      "SMTP",
    ],
    confidentialityNote:
      "Le code source et l’accès au compte client sont confidentiels. Une démo technique avec données fictives est utilisée pour illustrer le travail réalisé.",
    demoLink: "/demo/pharma",
    demoDescription:
      "Cette démo illustre les fonctionnalités développées sur ce projet (zoom image produit et historique de commandes) avec des données totalement fictives.",
  },
  {
    slug: "consulto",
    title: "Consulto – Plateforme d'information pour professionnels de santé",
    client: "Consulto (groupe spécialisé santé)",
    role: "Développeur front-end Next.js",
    context:
      "Intervention sur le site consulto.fr, une plateforme dédiée à l'information et à l’accompagnement des professionnels de santé.",
    missions: [
      "Mise à jour et intégration d’articles via fichiers MDX (front-matter, liens, images, métadonnées).",
      "Création d’un carrousel responsive présentant les logos des partenaires du réseau Consulto.",
      "Corrections d’affichage et petits ajustements CSS sur diverses sections du site.",
      "Maintien en condition opérationnelle du front-end Next.js."
    ],
    stack: [
      "Next.js",
      "React",
      "MDX",
      "JavaScript",
      "Tailwind CSS",
    ],
    confidentialityNote:
      "Les contenus sont publics mais le code source du projet reste privé. Cette fiche décrit les travaux réalisés.",
    screenshot: "/screenshots/consulto.png",
    demoLink: "/demo/consulto-carousel",
    demoDescription:
      "Cette démo reproduit de façon simplifiée le carrousel de partenaires développé sur consulto.fr, avec des logos et contenus fictifs.",
  },
  {
    slug: "Kalle",
    title: "Kalle - Dashboard de gestion ventes / stock (prototype)",
    client: "Projet personnel",
    role: "Conception et developpement full-stack (Next.js)",
    context:
      "Projet d'apprentissage full-stack construit en Next.js (App Router) pour centraliser des donnees e-commerce (ventes, clients, produits, statistiques) dans un dashboard, avec objectif futur de connexion aux APIs de marketplaces.",
    missions: [
      "Conception d'une base applicative full-stack avec Next.js App Router, React et TypeScript.",
      "Mise en place de l'authentification (inscription/connexion/deconnexion) avec NextAuth, credentials et session JWT.",
      "Gestion des utilisateurs et du dashboard en base MongoDB via Mongoose, avec creation automatique d'un dashboard a l'inscription.",
      "Protection des routes via middleware avec gestion de roles (User / Admin).",
      "Developpement d'un dashboard avec indicateurs et graphiques (croissance clients, visiteurs annuels, best-selling) et donnees partiellement mockees.",
      "Ajout/suppression de donnees sur certains graphiques avec persistance en base via routes API.",
      "Export CSV des donnees du dashboard et mise en place d'un flux mot de passe oublie / reinitialisation en environnement de developpement (Mailtrap).",
      "Gestion de profil utilisateur avec upload et liaison d'image de profil."
    ],
    stack: [
      "Next.js 14 (App Router)",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth (Credentials + JWT)",
      "MongoDB",
      "Mongoose",
      "Chart.js / react-chartjs-2",
      "Nodemailer (Mailtrap dev)",
      "Multer / upload local",
    ],
    confidentialityNote:
      "Projet personnel en cours (prototype fonctionnel). La demo du portfolio est une reconstitution simplifiee avec donnees fictives pour illustrer les principales fonctionnalites.",
    demoLink: "/demo/ziema",
    demoDescription:
      "Cette demo met en avant la logique dashboard (indicateurs, vue ventes/visiteurs, export CSV) et le parcours produit (auth, routes protegees, persistance) de facon simplifiee.",
    screenshot: "/screenshots/ziema-card.svg",
  }
];

export function getProjectDetailBySlug(slug: string) {
  return projectDetails.find((p) => p.slug === slug);
}
