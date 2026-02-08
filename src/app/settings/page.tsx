import SiteShell from "@/components/SiteShell";

export default function SettingsPage() {
  return (
    <SiteShell>
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Настройки
          </p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Профиль и приватность</h1>
          <div className="mt-6 space-y-4">
            {[
              "Показывать прогресс чтения друзьям",
              "Публичные списки по умолчанию",
              "Видимость оценок и рецензий",
              "Скрывать онлайн-статус",
            ].map((item) => (
              <div
                key={item}
                className="flex flex-col gap-2 rounded-2xl border border-[var(--line)] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm">{item}</span>
                <span className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs text-[var(--muted)]">
                  Выкл
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Уведомления
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {["Новые друзья", "Ответы на отзывы", "Обновления серий"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex flex-col gap-2 rounded-2xl border border-[var(--line)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span>{item}</span>
                    <span className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs text-[var(--muted)]">
                      Выкл
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Безопасность
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {["Сменить пароль", "Подключить OAuth", "Управление сессиями"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex flex-col gap-2 rounded-2xl border border-[var(--line)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span>{item}</span>
                    <button className="rounded-full bg-[var(--fg)] px-3 py-1 text-xs text-[var(--bg)]">
                      Открыть
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
