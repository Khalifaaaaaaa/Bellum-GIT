import { AppShell } from "@/components/AppShell";
import { FeatureCard } from "@/components/FeatureCard";
import { MockCreditPanel } from "@/components/MockCreditPanel";
import { QuizPreviewCard } from "@/components/QuizPreviewCard";
import {
  dashboardActions,
  mockCredits,
  sampleQuestions
} from "@/lib/mockBellumData";

export default function DashboardPage() {
  const featuredQuestion = sampleQuestions[0];

  return (
    <AppShell
      eyebrow="Mock account"
      title="Welcome back to Bellum."
      subtitle="Your Phase 1 dashboard is clickable and seeded with mock data only. Real auth, backend credits, upload validation, and AI jobs come later."
    >
      <div className="dashboard-grid">
        <section className="panel wide-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Free trial state</p>
              <h2>One real Standard Quiz later. Mock balance today.</h2>
            </div>
            <span className="status-pill">Phase 1</span>
          </div>

          <MockCreditPanel credits={mockCredits} />

          <div className="guardrail-note">
            <strong>Future enforcement:</strong> credits, plan limits, PDF caps, retries, and suspicious usage must be enforced by the backend, not trusted from this UI.
          </div>
        </section>

        <section className="panel">
          <div className="panel-header compact">
            <div>
              <p className="eyebrow">Seeded preview</p>
              <h2>Exam-style feel check</h2>
            </div>
          </div>
          <QuizPreviewCard question={featuredQuestion} />
        </section>
      </div>

      <section className="section-block in-app-section">
        <div className="section-heading">
          <p className="eyebrow">Workspace</p>
          <h2>Choose your next Bellum action.</h2>
        </div>

        <div className="feature-grid">
          {dashboardActions.map((action) => (
            <FeatureCard
              key={action.title}
              eyebrow={action.eyebrow}
              title={action.title}
              description={action.description}
              href={action.href}
              cta={action.cta}
            />
          ))}
        </div>
      </section>
    </AppShell>
  );
}