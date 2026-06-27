import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { mistakeLogPreview } from "@/lib/mockBellumData";

export default function MistakeLogPage() {
  return (
    <AppShell
      eyebrow="Mistake intelligence"
      title="Mistake Log"
      subtitle="Phase 1 shows the future review surface. Phase 4 and Phase 10 will make this data-driven from quiz attempts, missed concepts, and trap metadata."
    >
      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Mock weak spots</p>
            <h2>Seeded mistake patterns</h2>
          </div>
          <Link href="/demo-quiz" className="button secondary">
            Review Demo Quiz
          </Link>
        </div>

        <div className="mistake-list">
          {mistakeLogPreview.map((item) => (
            <article className="mistake-card" key={item.concept}>
              <div>
                <span className="status-pill subtle">{item.track}</span>
                <h3>{item.concept}</h3>
                <p>{item.summary}</p>
              </div>
              <div className="mistake-score">
                <strong>{item.missed}</strong>
                <span>missed</span>
              </div>
            </article>
          ))}
        </div>

        <div className="guardrail-note">
          Later, Mistake Drill generation must reuse stored metadata where possible instead of triggering unnecessary extra AI calls.
        </div>
      </section>
    </AppShell>
  );
}