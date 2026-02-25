export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/80 dark:border-slate-700/60">
      <div className="container-soft py-8 text-sm text-slate-500 dark:text-slate-300">
        © {new Date().getFullYear()} Akan — Tous droits réservés.
      </div>
    </footer>
  );
}
