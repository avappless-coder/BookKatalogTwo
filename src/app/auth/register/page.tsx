"use client";

import { useState } from "react";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { apiPost } from "@/lib/api";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await apiPost<{ accessToken: string }>("/auth/register", {
        email,
        password,
        nickname: nickname || undefined,
      });
      window.localStorage.setItem("bk-token", res.accessToken);
      setStatus("ok");
      setMessage("Регистрация успешна. Токен сохранён.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Ошибка регистрации");
    }
  };

  return (
    <SiteShell>
      <section className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Регистрация
            </p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Создайте аккаунт
            </h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-[var(--line)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--fg)]"
          >
            На главную
          </Link>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)]"
        >
          <div className="space-y-4">
            <label className="flex flex-col gap-2 text-sm">
              Email
              <input
                className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--fg)]"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Никнейм
              <input
                className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--fg)]"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Пароль
              <input
                className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--fg)]"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                required
              />
            </label>
          </div>

          <button
            className="mt-6 w-full rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Создание..." : "Создать аккаунт"}
          </button>

          {message ? (
            <p
              className={`mt-4 text-sm ${
                status === "error" ? "text-red-600" : "text-[var(--muted)]"
              }`}
            >
              {message}
            </p>
          ) : null}
        </form>
      </section>
    </SiteShell>
  );
}
