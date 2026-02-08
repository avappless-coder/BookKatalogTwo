import SiteShell from "@/components/SiteShell";
import { fetchMockData } from "@/lib/mock-api";

export default async function FeedPage() {
  const data = await fetchMockData();

  return (
    <SiteShell>
      <section className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Лента
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Обновления от друзей и клубов
          </h1>
        </div>
        <button className="w-full rounded-full border border-[var(--line)] px-4 py-2 text-center text-xs uppercase tracking-[0.2em] text-[var(--fg)] sm:w-auto">
          Фильтры
        </button>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {data.activities.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-[var(--shadow)]"
            >
              <p className="text-sm font-semibold">
                {item.user} {item.action}{" "}
                <span className="text-[var(--accent)]">{item.title}</span>
              </p>
              <p className="mt-2 text-xs text-[var(--muted)]">{item.detail}</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                {item.time}
              </p>
            </article>
          ))}
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Рекомендации
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              В персональных рекомендациях пока нет данных.
            </p>
            <button className="mt-4 rounded-full bg-[var(--fg)] px-4 py-2 text-sm font-semibold text-[var(--bg)]">
              Настроить
            </button>
          </div>
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Клубы
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {data.clubs.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-[var(--line)] px-4 py-3"
                >
                  <span>{item}</span>
                  <button className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs text-[var(--fg)]">
                    Вступить
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}
