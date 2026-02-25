"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Partner = {
  name: string;
  logo: string;
  url?: string;
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
];

export default function PartnersCarousel() {
  const [index, setIndex] = useState(0);

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
        <button
          type="button"
          onClick={goPrev}
          className="hidden rounded-full border border-gray-200 bg-white p-2 text-gray-900 hover:bg-gray-50 sm:inline-flex dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          aria-label="Partenaire précédent"
        >
          ‹
        </button>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="w-full shrink-0 flex justify-center px-4"
              >
                <div className="relative flex h-24 w-full max-w-xs items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-900 shadow sm:h-32 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-100">
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

        <button
          type="button"
          onClick={goNext}
          className="hidden rounded-full border border-gray-200 bg-white p-2 text-gray-900 hover:bg-gray-50 sm:inline-flex dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          aria-label="Partenaire suivant"
        >
          ›
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {partners.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-gray-900 dark:bg-slate-100" : "bg-gray-300 dark:bg-slate-600"
            }`}
            aria-label={`Aller au partenaire ${p.name}`}
          />
        ))}
      </div>
    </div>
  );
}
