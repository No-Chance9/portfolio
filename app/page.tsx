import Image from "next/image";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="mx-auto mb-6">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-white shadow dark:ring-slate-700">
            <Image src="/pp dev.png" alt="Akan" fill className="object-cover" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Armel — Développeur Web</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
          Passionné par les interfaces modernes et les architectures propres. Spécialisé en
          <strong> Next.js</strong>, <strong>React</strong>, <strong>Tailwind</strong>, API REST/GraphQL.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:armel.dev9@gmail.com"
            className="inline-block rounded-2xl px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Me contacter
          </a>
          <a
            href="https://github.com/No-Chance9/portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-2xl border border-gray-300 px-4 py-2 text-gray-900 transition hover:bg-white dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            GitHub
          </a>
        </div>
      </section>

      <Section title="Projets récents" subtitle="Quelques réalisations sélectionnées">
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} />)
          )}
        </div>
      </Section>

      <Section title="Discutons de votre projet" subtitle="Disponible en freelance et missions.">
        <div className="rounded-2xl bg-white p-6 text-gray-900 shadow dark:border dark:border-slate-700/60 dark:bg-slate-900/85 dark:text-slate-100">
          <p>
            Vous avez une idée ou un besoin concret ? Envoyez‑moi un email à
            {" "}
            <a className="underline" href="mailto:armel.dev9@gmail.com">armel.dev9@gmail.com</a>
            {" "}ou connectons‑nous sur {" "}
            <a className="underline" href="https://www.linkedin.com/in/armel-kaniekete-7aa500170/" target="_blank" rel="noreferrer">LinkedIn</a>.
          </p>
        </div>
      </Section>
    </div>
  );
}
