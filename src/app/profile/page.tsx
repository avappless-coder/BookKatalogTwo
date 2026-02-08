"use client";

import Link from "next/link";
import { useState } from "react";
import SiteShell from "@/components/SiteShell";
import { mockData } from "@/lib/mock-data";

export default function ProfilePage() {
  const initial = mockData.profile;
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(initial.handle);
  const [bio, setBio] = useState(initial.bio);
  const [favoriteGenre, setFavoriteGenre] = useState(
    initial.stats.find((s) => s.label === "Любимый жанр")?.value ?? "—",
  );

  const onSave = () => {
    setIsEditing(false);
  };

  return (
    <SiteShell>
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Профиль
            </p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Управление профилем
            </h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-[var(--line)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--fg)]"
          >
            Вернуться в главное меню
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-[var(--bg-soft)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Текущий профиль
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">{nickname}</h2>
                  <p className="text-sm text-[var(--muted)]">{bio}</p>
                </div>
              </div>
              <button
                className="w-full rounded-full bg-[var(--fg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--bg)] sm:w-auto"
                onClick={() => setIsEditing((prev) => !prev)}
                type="button"
              >
                {isEditing ? "Отменить" : "Редактировать"}
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Прочитано", "0"],
                ["Планирую", "0"],
                ["Средняя оценка", "0"],
                ["Любимый жанр", favoriteGenre],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Данные профиля
            </p>
            <div className="mt-4 space-y-4">
              <label className="flex flex-col gap-2 text-sm">
                Никнейм
                <input
                  className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--fg)]"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                  disabled={!isEditing}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Описание профиля
                <textarea
                  className="min-h-[120px] rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--fg)]"
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                  disabled={!isEditing}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Любимый жанр
                <input
                  className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--fg)]"
                  value={favoriteGenre}
                  onChange={(event) => setFavoriteGenre(event.target.value)}
                  disabled={!isEditing}
                />
              </label>
            </div>
            <button
              className="mt-6 w-full rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              onClick={onSave}
              disabled={!isEditing}
              type="button"
            >
              Сохранить изменения
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
