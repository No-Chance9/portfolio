"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fakeOrders = [
  { id: "CMD-2024-001", date: "12.09.2024", quantity: 3, status: "Livrée" },
  { id: "CMD-2024-002", date: "04.10.2024", quantity: 2, status: "Livrée" },
  { id: "CMD-2024-003", date: "21.10.2024", quantity: 5, status: "En préparation" },
];

export default function PharmaDemoPage() {
  const [zoomOpen, setZoomOpen] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Démo front – page produit pharmaceutique</h1>
        <p className="text-gray-600 dark:text-slate-200">
          Exemple de zoom sur l’image produit et d’affichage d’un historique de commandes,
          inspirés d’un projet réel confidentiel.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1 text-sm">
          <Link
            href="/projects/pharma-platform"
            className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-gray-800 transition hover:bg-white dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/70"
          >
            Voir le détail du projet
          </Link>
          <Link href="/" className="underline text-gray-700 dark:text-slate-200">
            Retour au portfolio
          </Link>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-3">
          <div
            className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-xl border border-gray-200 hover:cursor-none dark:border-slate-700/70"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setCursorPosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
              });
            }}
            onClick={() => setZoomOpen(true)}
          >
            <Image
              src="/image.png"
              alt="Produit pharmaceutique fictif"
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            {isImageHovered && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white shadow-sm backdrop-blur-sm"
                style={{
                  left: cursorPosition.x,
                  top: cursorPosition.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.35-4.35" />
                  <path d="M11 8v6" />
                  <path d="M8 11h6" />
                </svg>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-slate-300">
            Survolez puis cliquez sur l’image pour l’agrandir et faciliter la lecture du texte
            sur le packaging.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">GEMMO Complexe Draimage.png (fictif)</h2>
          <p className="text-gray-700 dark:text-slate-200">
            Complément fictif à base de bourgeons de plantes, utilisé ici comme exemple pour
            illustrer une page produit. Toutes les données affichées sont fictives et ne
            correspondent à aucun produit réel.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-slate-200">
            <li>Lecteur facilité des mentions légales via zoom de l’image.</li>
            <li>Informations structurées : indications, posologie, précautions.</li>
            <li>CTA clair pour la commande (réservé aux professionnels de santé).</li>
          </ul>
          <button className="mt-3 inline-block rounded-2xl bg-gray-900 px-4 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900">
            Ajouter au panier (démo)
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Historique de commandes (exemple)</h2>
        <p className="text-sm text-gray-600 dark:text-slate-200">
          Ce tableau illustre le type d’affichage développé pour l’historique des commandes dans
          le compte client (données anonymisées et fictives).
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white text-gray-900 dark:border-slate-700/70 dark:bg-slate-900/85 dark:text-slate-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-slate-800/80">
              <tr>
                <th className="px-4 py-2 text-left">Commande</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Qté</th>
                <th className="px-4 py-2 text-left">Statut</th>
              </tr>
            </thead>
            <tbody>
              {fakeOrders.map((order) => (
                <tr key={order.id} className="border-t border-gray-200 dark:border-slate-700/60">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2">{order.quantity}</td>
                  <td className="px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80"
          onClick={() => setZoomOpen(false)}
        >
          <div className="relative w-[90vw] max-w-3xl h-[80vh]">
            <Image
              src="/image.png"
              alt="Zoom produit pharmaceutique fictif"
              fill
              className="object-contain"
            />
            <button
              className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm text-gray-900 shadow-sm"
              onClick={() => setZoomOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
