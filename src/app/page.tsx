import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { fetchMockData } from "@/lib/mock-api";

export default async function Home() {
  const data = await fetchMockData();

  return (
    <SiteShell>
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-xs text-[var(--muted)] shadow-[var(--shadow)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Ну типо привет
          </div>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Личный каталог книг и манги
          </h1>
          <p className="text-base text-[var(--muted)] sm:text-lg">
            BookKatalog. Надо подключить еще дохрена всего
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/profile"
              className="shine relative w-full overflow-hidden rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[var(--shadow)] sm:w-auto"
            >
              Создать профиль
            </Link>
            <Link
              href="/catalog"
              className="w-full rounded-full border border-[var(--line)] px-6 py-3 text-center text-sm font-semibold text-[var(--fg)] sm:w-auto"
            >
              Смотреть демо
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.stats.map((item) => (
              <div
                key={item.label}
                className="animate-float rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-[var(--shadow)]"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Мой статус
                </p>
                <p className="mt-1 text-xl font-semibold">Читаю сейчас</p>
              </div>
              <span className="rounded-full bg-[var(--bg-soft)] px-4 py-1 text-xs font-semibold text-[var(--accent)]">
                0 книг
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {data.profile.readingNow.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-2xl border border-[var(--line)] p-3"
                >
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-[var(--muted)]">
                      {item.progress}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-[var(--line)] bg-[var(--bg-soft)]" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Импорт
              </p>
              <p className="mt-2 text-sm font-semibold">
                Подключите сервисы и перенесите историю чтения.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Goodreads", "Shikimori", "MyAnimeList"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Экспорт
              </p>
              <p className="mt-2 text-sm font-semibold">
                Выгружайте список в CSV, JSON или PDF для архива.
              </p>
              <div className="mt-4 flex gap-2">
                {["CSV", "JSON", "PDF"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="mt-20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Каталог
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Быстрый поиск по всем форматам
            </h2>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:grid-cols-4">
            <input
              placeholder="Поиск по названию, автору"
              className="w-full rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--fg)] placeholder:text-[var(--muted)]"
            />
            <select className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--fg)]">
              <option>Жанры</option>
              <option>Фэнтези</option>
              <option>Романтика</option>
              <option>Сэйнэн</option>
            </select>
            <select className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--fg)]">
              <option>Рейтинг</option>
              <option>0+</option>
              <option>0+</option>
              <option>0+</option>
            </select>
            <select className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--fg)]">
              <option>Статус</option>
              <option>Выходит</option>
              <option>Завершено</option>
            </select>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="flex gap-2">
                  {["Прочитал", "Читаю", "Планирую"].map((status) => (
                    <span
                      key={status}
                      className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
                    >
                      {status}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="profile" className="mt-20 grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)] lg:col-span-2">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-[var(--bg-soft)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Профиль
                </p>
                <h3 className="mt-1 text-2xl font-semibold">
                  {data.profile.handle}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {data.profile.bio}
                </p>
              </div>
            </div>
            <button className="rounded-full border border-[var(--line)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--fg)]">
              Подписаться
            </button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.profile.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Мои списки
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {data.profile.lists.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Достижения
          </p>
          <div className="mt-4 space-y-4">
            {data.achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--line)] p-4"
              >
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-xs text-[var(--muted)]">{item.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[var(--bg-soft)] p-4">
            <p className="text-sm font-semibold">Геймификация</p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Выполняйте квесты и открывайте новые рамки профиля.
            </p>
          </div>
        </div>
      </section>

      <section id="social" className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Лента друзей
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Живые обновления сообщества
              </h3>
            </div>
            <button className="rounded-full border border-[var(--line)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--fg)]">
              Уведомления
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {data.activities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--line)] p-4"
              >
                <p className="text-sm font-semibold">
                  {item.user} {item.action}{" "}
                  <span className="text-[var(--accent)]">{item.title}</span>
                </p>
                <p className="mt-2 text-xs text-[var(--muted)]">{item.detail}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Клубы
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Читательские пространства
            </h3>
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
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Теги
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mt-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Рекомендации и ИИ-ленты",
              desc: "Персональные подборки по оценкам, темпу чтения и любимым жанрам.",
            },
            {
              title: "Безопасность и контроль",
              desc: "JWT + OAuth, защита от XSS/SQL-инъекций и лимиты запросов.",
            },
            {
              title: "Производительность",
              desc: "Lazy loading обложек, быстрый поиск и оптимизация запросов.",
            },
            {
              title: "API для интеграций",
              desc: "Публичные API для внешних сервисов и будущего мобильного приложения.",
            },
            {
              title: "Комментарии и отзывы",
              desc: "Рецензии, ветки обсуждений и реакции сообщества.",
            },
            {
              title: "Расширяемая архитектура",
              desc: "Гибкая база для будущих форматов и тематических событий.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
