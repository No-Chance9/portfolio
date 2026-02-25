"use client";

import Link from "next/link";
import { useState } from "react";

type PeriodKey = "30d" | "90d";
type MetricKey = "sales" | "visitors";

type Point = {
  label: string;
  value: number;
};

const periodOptions: { key: PeriodKey; label: string }[] = [
  { key: "30d", label: "30 jours" },
  { key: "90d", label: "90 jours" },
];

const metricOptions: { key: MetricKey; label: string }[] = [
  { key: "sales", label: "Ventes" },
  { key: "visitors", label: "Visiteurs" },
];

const datasets: Record<PeriodKey, Record<MetricKey, Point[]>> = {
  "30d": {
    sales: [
      { label: "S1", value: 28 },
      { label: "S2", value: 40 },
      { label: "S3", value: 34 },
      { label: "S4", value: 52 },
      { label: "S5", value: 61 },
      { label: "S6", value: 49 },
    ],
    visitors: [
      { label: "S1", value: 45 },
      { label: "S2", value: 58 },
      { label: "S3", value: 63 },
      { label: "S4", value: 69 },
      { label: "S5", value: 74 },
      { label: "S6", value: 71 },
    ],
  },
  "90d": {
    sales: [
      { label: "M1", value: 41 },
      { label: "M2", value: 55 },
      { label: "M3", value: 62 },
      { label: "M4", value: 57 },
      { label: "M5", value: 73 },
      { label: "M6", value: 81 },
    ],
    visitors: [
      { label: "M1", value: 52 },
      { label: "M2", value: 60 },
      { label: "M3", value: 67 },
      { label: "M4", value: 76 },
      { label: "M5", value: 84 },
      { label: "M6", value: 88 },
    ],
  },
};

const fakeFlow = [
  {
    title: "Authentification",
    text: "Inscription/connexion avec NextAuth (credentials) et session JWT.",
  },
  {
    title: "Dashboard utilisateur",
    text: "Creation automatique d'un dashboard et chargement des indicateurs.",
  },
  {
    title: "Edition & persistance",
    text: "Ajout/suppression de donnees sur certains widgets via routes API.",
  },
  {
    title: "Export CSV",
    text: "Export de sections du dashboard pour reutilisation hors application.",
  },
];

const actionsLog = [
  "Login utilisateur -> dashboard charge",
  "Ajout d'un point sur les visiteurs annuels",
  "Suppression d'une ligne best-selling",
  "Export CSV genere (dashboard_data.csv)",
];

export default function KalleDemoPage() {
  const [period, setPeriod] = useState<PeriodKey>("30d");
  const [metric, setMetric] = useState<MetricKey>("sales");

  const points = datasets[period][metric];
  const maxValue = Math.max(...points.map((point) => point.value));
  const total = points.reduce((sum, point) => sum + point.value, 0);
  const average = Math.round(total / points.length);
  const trend = points[points.length - 1].value - points[0].value;

  const csvPreview = [
    "section,label,value",
    ...points.map((point) => `${metric},${point.label},${point.value}`),
  ].join("\n");

  return (
    <div className="space-y-8">
      <header className="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 shadow-sm dark:border-slate-700/70 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              Kalle
            </p>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Démo technique - Dashboard analytics et parcours utilisateur
            </h1>
            <p className="text-sm text-gray-700 dark:text-slate-200">
              Reconstitution simplifiee des ecrans et logiques du prototype
              Kalle : auth, dashboard de ventes/visiteurs, actions utilisateur
              et export CSV. Toutes les donnees affichees sont fictives.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <Link
              href="/projects/Kalle"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 text-gray-900 transition hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Voir le detail du projet
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-transparent px-3 py-1.5 underline"
            >
              Retour au portfolio
            </Link>
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/80">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold">Apercu dashboard</h2>
              <p className="text-sm text-gray-600 dark:text-slate-300">
                Vue simplifiee des indicateurs et graphiques du prototype.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {periodOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setPeriod(option.key)}
                  aria-pressed={period === option.key}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    period === option.key
                      ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <MetricCard
              label={
                metric === "sales"
                  ? "Total ventes (demo)"
                  : "Total visiteurs (demo)"
              }
              value={String(total)}
              accent="sky"
            />
            <MetricCard
              label="Moyenne periode"
              value={String(average)}
              accent="indigo"
            />
            <MetricCard
              label="Tendance"
              value={`${trend >= 0 ? "+" : ""}${trend}`}
              accent={trend >= 0 ? "emerald" : "rose"}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-700/70 dark:bg-slate-950/50">
            <div className="mb-4 flex flex-wrap gap-2">
              {metricOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setMetric(option.key)}
                  aria-pressed={metric === option.key}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    metric === option.key
                      ? "bg-sky-600 text-white"
                      : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_160px]">
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className="flex h-48 items-end gap-2 sm:gap-3">
                  {points.map((point) => {
                    const height = Math.max(
                      14,
                      Math.round((point.value / maxValue) * 100),
                    );

                    return (
                      <div
                        key={point.label}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <div className="text-[11px] font-medium text-gray-500 dark:text-slate-400">
                          {point.value}
                        </div>
                        <div className="relative flex h-36 w-full items-end rounded-lg bg-gray-100 p-1 dark:bg-slate-800">
                          <div
                            className={`w-full rounded-md ${
                              metric === "sales"
                                ? "bg-gradient-to-t from-sky-600 to-cyan-300"
                                : "bg-gradient-to-t from-indigo-600 to-violet-300"
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                        <div className="text-[11px] text-gray-600 dark:text-slate-300">
                          {point.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm dark:border-slate-700/60 dark:bg-slate-900/80">
                <p className="font-semibold">Etat donnees</p>
                <ul className="mt-3 space-y-2 text-gray-700 dark:text-slate-300">
                  <li>Source: mix mock + persistance MongoDB</li>
                  <li>Edition: ajout / suppression via API</li>
                  <li>Role: user/admin (routes protegees)</li>
                  <li>Export: CSV pour reutilisation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/80">
            <h2 className="text-lg font-semibold">Parcours produit (resume)</h2>
            <div className="mt-4 space-y-3">
              {fakeFlow.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-3 dark:border-slate-700/60 dark:bg-slate-800/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                    Etape {index + 1}
                  </p>
                  <p className="mt-1 text-sm font-medium">{step.title}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-slate-300">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/80">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">Actions recentes (demo)</h2>
              <button
                type="button"
                className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white"
              >
                Export CSV
              </button>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-slate-300">
              {actionsLog.map((line) => (
                <li
                  key={line}
                  className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-2 dark:border-slate-700/60 dark:bg-slate-800/50"
                >
                  {line}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/80">
        <h2 className="text-lg font-semibold">
          Extrait export CSV (simulation)
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-slate-300">
          Exemple de donnees exportees depuis le dashboard. Le projet reel
          assemble plusieurs sections avant generation du fichier.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs text-gray-800 dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-200">
          {csvPreview}
        </pre>
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "sky" | "indigo" | "emerald" | "rose";
}) {
  const accents = {
    sky: "from-sky-500/20 to-cyan-200/40 text-sky-700 dark:text-sky-300",
    indigo:
      "from-indigo-500/20 to-violet-200/40 text-indigo-700 dark:text-indigo-300",
    emerald:
      "from-emerald-500/20 to-lime-200/40 text-emerald-700 dark:text-emerald-300",
    rose: "from-rose-500/20 to-orange-200/40 text-rose-700 dark:text-rose-300",
  } as const;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-slate-700/60 dark:bg-slate-900/80">
      <div
        className={`inline-flex rounded-full bg-gradient-to-r px-2 py-1 text-[11px] font-semibold ${accents[accent]}`}
      >
        {label}
      </div>
      <p className="mt-3 text-2xl font-semibold">{value}</p>
    </div>
  );
}
