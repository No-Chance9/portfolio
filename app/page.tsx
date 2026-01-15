// Page d'accueil : présentation + liste de projets
import Image from "next/image";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center">
        <div className="mx-auto mb-6">
          {/* Remplace /avatar.jpg par une image dans /public si tu veux */}
          <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow">
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
            className="inline-block rounded-2xl px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            Me contacter
          </a>
          <a
            href="https://github.com/akan"
            target="_blank"
            className="inline-block rounded-2xl px-4 py-2 border border-gray-300 hover:bg-white transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Projets */}
      <Section title="Projets récents" subtitle="Quelques réalisations sélectionnées">
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} />)
          )}
        </div>
      </Section>

      {/* Contact */}
      <Section title="Discutons de votre projet" subtitle="Disponible en freelance et missions.">
        <div className="rounded-2xl bg-white p-6 text-gray-900 shadow dark:bg-white dark:text-gray-900">
          <p>
            Vous avez une idée ou un besoin concret ? Envoyez‑moi un email à
            {" "}
            <a className="underline" href="mailto:armel.dev9@gmail.com">armel.dev9@gmail.com</a>
            {" "}ou connectons‑nous sur {" "}
            <a className="underline" href="https://www.linkedin.com/in/akan" target="_blank">LinkedIn</a>.
          </p>
        </div>
      </Section>
    </div>
  );
}
