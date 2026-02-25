import PartnersCarousel from "@/components/PartnersCarousel";
import Link from "next/link";

export default function ConsultoDemoPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">
          Démo technique – Carrousel partenaires (Consulto)
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-slate-200">
          Reproduction simplifiée du carrousel de logos partenaires développé sur le site
          consulto.fr. Les données et logos utilisés ici sont fictifs.
        </p>
        <p className="mt-2 text-sm">
          Site réel :{" "}
          <a
            href="https://www.consulto.fr/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline dark:text-blue-300"
          >
            consulto.fr
          </a>
        </p>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-700/70 dark:bg-slate-900/70">
        <h2 className="text-lg font-semibold mb-4">
          Carrousel de logos partenaires
        </h2>
        <PartnersCarousel />
      </section>

      <section className="text-sm text-gray-600 dark:text-slate-300">
        <p>
          Sur le projet réel, ce carrousel est intégré à une section dédiée, avec les logos des
          partenaires du réseau Consulto et une mise en page adaptée au design existant. Cette
          version illustre la logique front mise en place (navigation, sélection, responsive).
        </p>
        <p className="mt-2">
          <Link href="/projects/consulto" className="underline">
            Voir la fiche détaillée du projet Consulto →
          </Link>
        </p>
      </section>
    </div>
  );
}
