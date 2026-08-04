import { demos } from "@/lib/demos";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            Demos
          </h1>
          <p className="mt-3 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Cada tarjeta enlaza a una aplicación independiente construida como
            demo.
          </p>
        </header>

        {demos.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-400">
            Todavía no hay demos publicadas.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {demos.map((demo) => (
              <li key={demo.slug}>
                <a
                  href={`/demos/${demo.slug}/index.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-black/[.08] bg-white p-6 transition-colors hover:border-black/[.15] hover:bg-black/[.02] dark:border-white/[.145] dark:bg-zinc-950 dark:hover:border-white/[.25] dark:hover:bg-white/[.03]"
                >
                  <div>
                    <span className="inline-block rounded-full bg-black/[.06] px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-white/[.08] dark:text-zinc-400">
                      {demo.tag}
                    </span>
                    <h2 className="mt-4 text-xl font-semibold text-black dark:text-zinc-50">
                      {demo.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {demo.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-black dark:text-zinc-50">
                    Ver demo
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
