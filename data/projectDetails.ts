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
  screenshot?: string; // pour afficher une image aussi sur la page détail si tu veux
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
  demoLink: "/demo/pharma", // ⬅️ ici
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
}
];

export function getProjectDetailBySlug(slug: string) {
  return projectDetails.find((p) => p.slug === slug);
}