export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container-soft py-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Akan — Tous droits réservés.
      </div>
    </footer>
  );
}
