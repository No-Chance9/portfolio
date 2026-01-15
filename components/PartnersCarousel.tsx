"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Partner = {
  name: string;
  logo: string; // chemin dans /public
  url?: string; // lien du partenaire (optionnel)
};

const partners: Partner[] = [
  {
    name: "Partenaire A",
    logo: "/partners/partner-a.jpeg",
    url: "https://exemple-a.com",
  },
  {
    name: "Partenaire B",
    logo: "/partners/partner-b.png",
    url: "https://exemple-b.com",
  },
  {
    name: "Partenaire C",
    logo: "/partners/partner-c.png",
    url: "https://exemple-c.com",
  },
  // Tu peux en ajouter autant que tu veux
];

export default function PartnersCarousel() {
  const [index, setIndex] = useState(0);

  // Autoplay : défilement automatique toutes les 4 secondes
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(id);
  }, []);

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        {/* Bouton précédent */}
        <button
          type="button"
          onClick={goPrev}
          className="hidden sm:inline-flex p-2 rounded-full border bg-white text-gray-900 hover:bg-gray-50 dark:bg-white dark:text-gray-900"
          aria-label="Partenaire précédent"
        >
          ‹
        </button>

        {/* Fenêtre du carrousel */}
        <div className="relative w-full overflow-hidden">
          {/* Bande qui glisse horizontalement */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="w-full shrink-0 flex justify-center px-4"
              >
                <div className="relative h-24 sm:h-32 w-full max-w-xs rounded-2xl border bg-white text-gray-900 shadow flex items-center justify-center dark:bg-white dark:text-gray-900">
                  <div className="relative w-40 h-16 sm:w-56 sm:h-20">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton suivant */}
        <button
          type="button"
          onClick={goNext}
          className="hidden sm:inline-flex p-2 rounded-full border bg-white text-gray-900 hover:bg-gray-50 dark:bg-white dark:text-gray-900"
          aria-label="Partenaire suivant"
        >
          ›
        </button>
      </div>

      {/* Indicateurs (petits points) */}
      <div className="mt-3 flex justify-center gap-2">
        {partners.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-gray-900" : "bg-gray-300"
            }`}
            aria-label={`Aller au partenaire ${p.name}`}
          />
        ))}
      </div>
    </div>
  );
}
