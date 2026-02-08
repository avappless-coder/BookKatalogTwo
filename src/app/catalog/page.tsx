import SiteShell from "@/components/SiteShell";
import { fetchMockData } from "@/lib/mock-api";

export default async function CatalogPage() {
  const data = await fetchMockData();

  return (
    <SiteShell>
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Каталог
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Поиск по книгам, манге и комиксам
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Все данные берутся из мок-API, чтобы позже заменить на реальные.
          </p>
        </div>
        <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:grid-cols-4">
          <input
            placeholder="Название или автор"
            className="w-full rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--fg)] placeholder:text-[var(--muted)]"
          />
          <select className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--fg)]">
            <option>Жанры</option>
          </select>
          <select className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--fg)]">
            <option>Рейтинг</option>
            <option>0+</option>
          </select>
          <select className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--fg)]">
            <option>Статус</option>
          </select>
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.catalog.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-[var(--shadow)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.author}</p>
              </div>
              <span className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs">
                {item.status}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">{item.rating}</p>
                <p className="text-xs text-[var(--muted)]">
                  {item.votes} оценок
                </p>
              </div>
              <button className="rounded-full border border-[var(--line)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--fg)]">
                Добавить
              </button>
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
