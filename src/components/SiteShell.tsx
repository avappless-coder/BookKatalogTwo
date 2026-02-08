import SiteHeader from "./SiteHeader";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="bg-noise min-h-screen">
      <div className="relative z-10">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
