import type { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    slug: "pharma-platform",
    title: "Plateforme e-commerce pharmaceutique",
    client: "Laboratoire pharmaceutique (Schmidt-Nagel)",
    role: "Développeur front-end/back-end freelance",
    context:
      "Intervention sur un site e-commerce pharmaceutique déjà existant, avec des contraintes fortes de conformité et de sécurité (accès réservé aux professionnels de santé).",
    missions: [],
    stack: [],
    description:
      "Améliorations front (zoom produit), historique commandes, pages d’inscription multilingues, sécurité (2FA email), chiffrement API Directus et optimisations SMTP.",
    techs: ["React", "Next.js", "WordPress API", "Directus", "PHP", "MySQL"],
    link: "/demo/pharma",              // ta démo technique
    screenshot: "/screenshots/site.png",
    screenshotLink: "https://schmidt-nagel.ch/fr/",
  },
  {
    slug: "consulto",
    title: "Consulto – Plateforme d'information pour professionnels de santé",
    client: "Consulto (groupe spécialisé santé)",
    role: "Développeur front-end Next.js",
    context:
      "Intervention sur consulto.fr, une plateforme dédiée à l’information et à l’accompagnement des professionnels de santé.",
    missions: [],
    stack: [],
    description:
      "Mise à jour d’articles MDX, création d’un carrousel de partenaires et ajustements front-end sur consulto.fr.",
    techs: ["Next.js", "React", "MDX", "Tailwind CSS"],
    link: "/demo/consulto-carousel",   // ici tu peux mettre le site public
    screenshot: "/screenshots/consulto.png",
    screenshotLink: "https://www.consulto.fr",
  },
];

export default projects;
