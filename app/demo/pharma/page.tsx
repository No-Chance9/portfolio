"use client";

import Image from "next/image";
import { useState } from "react";

const fakeOrders = [
  { id: "CMD-2024-001", date: "12.09.2024", quantity: 3, status: "Livrée" },
  { id: "CMD-2024-002", date: "04.10.2024", quantity: 2, status: "Livrée" },
  { id: "CMD-2024-003", date: "21.10.2024", quantity: 5, status: "En préparation" },
];

export default function PharmaDemoPage() {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">
          Démo front – page produit pharmaceutique
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Exemple de fonctionnalité de zoom sur l’image produit et d’affichage
          d’un historique de commandes, inspirés d’un projet réel confidentiel.
        </p>
      </header>

      {/* Bloc produit */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-3">
          <div
            className="relative aspect-[4/5] rounded-xl overflow-hidden border cursor-zoom-in"
            onClick={() => setZoomOpen(true)}
          >
            <Image
              src="/image.png"
              alt="Produit pharmaceutique fictif"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Cliquez sur l’image pour l’agrandir et faciliter la lecture du
            texte sur le packaging.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            GEMMO Complexe Draimage.png (fictif)
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Complément fictif à base de bourgeons de plantes, utilisé ici comme
            exemple pour illustrer une page produit. Toutes les données
            affichées sont fictives et ne correspondent à aucun produit réel.
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>Lecteur facilité des mentions légales via zoom de l’image.</li>
            <li>Informations structurées : indications, posologie, précautions.</li>
            <li>CTA clair pour la commande (réservé aux professionnels de santé).</li>
          </ul>
          <button className="mt-3 inline-block rounded-2xl px-4 py-2 bg-gray-900 text-white text-sm">
            Ajouter au panier (démo)
          </button>
        </div>
      </section>

      {/* Historique de commandes (fictif) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Historique de commandes (exemple)</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Ce tableau illustre le type d’affichage développé pour l’historique
          des commandes dans le compte client (données anonymisées et
          fictives).
        </p>

        <div className="overflow-x-auto rounded-xl border bg-white text-gray-900 dark:bg-white dark:text-gray-900">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Commande</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Qté</th>
                <th className="px-4 py-2 text-left">Statut</th>
              </tr>
            </thead>
            <tbody>
              {fakeOrders.map((order) => (
                <tr key={order.id} className="border-t">
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

      {/* Modal de zoom */}
      {zoomOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
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
              className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm text-gray-900"
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
