import Link from "next/link";
import { BellumLogo } from "@/components/BellumLogo";

type AppShellProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/generate", label: "Generate" },
  { href: "/demo-quiz", label: "Demo Quiz" },
  { href: "/mistake-log", label: "Mistake Log" },
  { href: "/leaderboard", label: "Leaderboard" }
];

export function AppShell({ eyebrow, title, subtitle, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link href="/" aria-label="Bellum home">
          <BellumLogo />
        </Link>

        <nav className="sidebar-nav" aria-label="Bellum workspace navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-card">
          <strong>Mock mode active</strong>
          <p>
            Phase 1 uses seeded data only. Real auth, upload processing, credits, and AI workers are intentionally not connected.
          </p>
        </div>
      </aside>

      <main className="app-main">
        <header className="app-header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}