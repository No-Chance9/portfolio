export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="container-soft py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Akan — Tous droits réservés.
      </div>
    </footer>
  );
}