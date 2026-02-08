import { headers } from "next/headers";
import type { MockData } from "./mock-data";

export async function fetchMockData(): Promise<MockData> {
  const headerStore = await headers();
  const host = headerStore.get("host");
  const proto = headerStore.get("x-forwarded-proto") ?? "http";
  const url = host ? `${proto}://${host}/api/mock` : "http://localhost:3000/api/mock";

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Mock API request failed: ${res.status}`);
  }
  return res.json();
}
