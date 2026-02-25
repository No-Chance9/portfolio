import { notFound } from "next/navigation";
import projects from "@/data/projects";
import { getProjectDetailBySlug } from "@/data/projectDetails";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const detail = getProjectDetailBySlug(slug);

  if (!project || !detail) {
    return notFound();
  }

  return (
    <div className="space-y-8">
      <Link href="/" className="text-sm underline">
        ← Retour au portfolio
      </Link>

      <header className="space-y-3">
        <h1 className="text-3xl font-bold">{detail.title}</h1>
        {detail.client && (
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Client :</strong> {detail.client}
          </p>
        )}
        {detail.role && (
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Rôle :</strong> {detail.role}
          </p>
        )}
        {detail.context && <p className="text-gray-700 dark:text-gray-300">{detail.context}</p>}
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Missions principales</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
          {detail.missions.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Stack technique</h2>
        <div className="flex flex-wrap gap-2">
          {detail.stack.map((tech) => (
            <span
              key={tech}
              className={
                // tech === "MDX"
                //   ? "rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 dark:bg-blue-500/20 dark:text-blue-200 :"
                   "rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-900 dark:bg-slate-800 dark:text-slate-100"
              }
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
      {detail.demoLink && (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Démo technique</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Cette démo illustre les fonctionnalités développées (zoom sur
            l’image produit, historique de commandes, etc.) avec des données
            totalement fictives.
          </p>
          <Link
            href={detail.demoLink}
            className="inline-block mt-2 rounded-2xl px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
          >
            Voir la démo technique
          </Link>
        </section>
      )}
      {detail.confidentialityNote && (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Confidentialité</h2>
          <p className="text-gray-700 dark:text-gray-300">{detail.confidentialityNote}</p>
        </section>
      )}
    </div>
  );
}
