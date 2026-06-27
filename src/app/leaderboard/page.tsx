import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { leaderboardPreview } from "@/lib/mockBellumData";

export default function LeaderboardPage() {
  return (
    <AppShell
      eyebrow="Locked teaser"
      title="Deep Exam Leaderboard"
      subtitle="Leaderboard is intentionally locked in Phase 1. Only ranked Deep Exam attempts should count later, with anti-abuse scoring and first-attempt integrity."
    >
      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Monthly league preview</p>
            <h2>Ranking should reward quality, not spam volume.</h2>
          </div>
          <span className="status-pill locked">Locked</span>
        </div>

        <div className="leaderboard-list">
          {leaderboardPreview.map((student) => (
            <article className="leaderboard-row" key={student.rank}>
              <span className="rank">#{student.rank}</span>
              <div>
                <strong>{student.name}</strong>
                <p>{student.region}</p>
              </div>
              <span>{student.points} pts</span>
            </article>
          ))}
        </div>

        <div className="mock-warning">
          <strong>Not active yet:</strong> leaderboard points must later account for accuracy, difficulty, question count, completion, time discipline, first attempt only, and anti-abuse flags.
        </div>

        <div className="hero-actions">
          <Link href="/dashboard" className="button ghost">
            Back to Dashboard
          </Link>
          <Link href="/demo-quiz" className="button primary">
            Try Demo Quiz
          </Link>
        </div>
      </section>
    </AppShell>
  );
}