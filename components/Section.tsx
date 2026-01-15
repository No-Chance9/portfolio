export default function Section({ title, subtitle, children }:{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <header>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-600 dark:text-gray-200">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
