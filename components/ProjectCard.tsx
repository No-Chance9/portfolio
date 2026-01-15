import Image from "next/image";
import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  client: string;
  role: string;
  context: string;
  missions: string[];
  stack: string[];
  description: string;
  techs: string[];
  link?: string;
  repo?: string;
  screenshot?: string;
  screenshotLink?: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  techs,
  link,
  repo,
  screenshot,
  screenshotLink,
}: Project) {
  const screenshotIsExternal = Boolean(screenshotLink?.startsWith("http"));

  return (
    <article className="group rounded-2xl bg-white p-4 text-gray-900 shadow transition hover:shadow-md dark:bg-white dark:text-gray-900">
      {screenshot && (
        <div className="relative aspect-[16/9] mb-3 overflow-hidden rounded-xl border border-gray-100">
          {screenshotLink ? (
            screenshotIsExternal ? (
              <a
                href={screenshotLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Voir le projet"
                className="absolute inset-0"
              >
                <Image
                  src={screenshot}
                  alt="capture projet"
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                />
              </a>
            ) : (
              <Link
                href={screenshotLink}
                aria-label="Voir le projet"
                className="absolute inset-0"
              >
                <Image
                  src={screenshot}
                  alt="capture projet"
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                />
              </Link>
            )
          ) : (
            <Image
              src={screenshot}
              alt="capture projet"
              fill
              className="object-cover transition group-hover:scale-[1.02]"
            />
          )}
        </div>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600 text-sm">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {techs.map((t) =>
          t === "MDX" ? (
            <Link
              key={t}
              href="/notes/mdx"
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full underline"
            >
              {t}
            </Link>
          ) : (
            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-900">
              {t}
            </span>
          )
        )}
      </div>
      <div className="mt-4 flex gap-3 text-sm items-center">
        {link && (
          <a className="underline" href={link} target="_blank">
            Demo
          </a>
        )}
        {repo && (
          <a className="underline" href={repo} target="_blank">
            Code
          </a>
        )}
        <Link
          href={`/projects/${slug}`}
          className="ml-auto text-xs underline text-gray-700"
        >
          Voir le détail →
        </Link>
      </div>
    </article>
  );
}
