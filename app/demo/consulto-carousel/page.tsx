import PartnersCarousel from "@/components/PartnersCarousel";
import Link from "next/link";

export default function ConsultoDemoPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">
          Démo technique – Carrousel partenaires (Consulto)
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Reproduction simplifiée du carrousel de logos partenaires développé
          sur le site consulto.fr. Les données et logos utilisés ici sont
          fictifs.
        </p>
        <p className="mt-2 text-sm">
          Site réel :{" "}
          <a
            href="https://www.consulto.fr/"
            target="_blank"
            className="underline text-blue-600"
          >
            consulto.fr
          </a>
        </p>
      </header>

      <section className="rounded-2xl bg-gray-50 p-6 border">
        <h2 className="text-lg font-semibold mb-4">
          Carrousel de logos partenaires
        </h2>
        <PartnersCarousel />
      </section>

      <section className="text-sm text-gray-600">
        <p>
          Sur le projet réel, ce carrousel est intégré à une section dédiée,
          avec les logos des partenaires du réseau Consulto et une mise en page
          adaptée au design existant. Cette version illustre la logique front
          mise en place (navigation, sélection, responsive).
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