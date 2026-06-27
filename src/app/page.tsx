import Link from "next/link";
import { BellumLogo } from "@/components/BellumLogo";
import { FeatureCard } from "@/components/FeatureCard";
import { heroStats } from "@/lib/mockBellumData";

export default function Home() {
  return (
    <main className="marketing-page">
      <nav className="topbar">
        <BellumLogo />
        <div className="topbar-actions">
          <Link href="/demo-quiz" className="text-link">
            View demo
          </Link>
          <Link href="/dashboard" className="button secondary">
            Mock dashboard
          </Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">For medical and pre-med students</p>
          <h1>Exam-grade MCQs from your lecture PDFs.</h1>
          <p className="hero-text">
            Bellum turns dense lectures into high-yield, application-style questions that expose weak spots before the real test does.
          </p>

          <div className="hero-actions">
            <Link href="/dashboard" className="button primary">
              Generate Your First Quiz
            </Link>
            <Link href="/demo-quiz" className="button ghost">
              Preview seeded questions
            </Link>
          </div>

          <p className="phase-note">
            Phase 1 shell: mock account, seeded quiz preview, no real AI APIs, no payments, no backend credits yet.
          </p>
        </div>

        <div className="hero-panel">
          <div className="paper-card">
            <div className="paper-header">
              <span>Clinical Medicine</span>
              <strong>Mock Deep Exam Preview</strong>
            </div>

            <p className="question-stem">
              A 64-year-old patient with crushing substernal chest pain has ST elevations in II, III, and aVF. Which associated finding would most strongly support right ventricular involvement?
            </p>

            <div className="option-stack">
              <span>A. Pulmonary edema with severe hypertension</span>
              <span>B. Clear lungs with hypotension and elevated JVP</span>
              <span>C. Wide pulse pressure and bounding pulses</span>
              <span>D. Diffuse wheezing after aspirin intake</span>
            </div>

            <div className="trap-strip">
              <strong>Trap Detector locked</strong>
              <span>Explanations appear after submission only.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stat-row" aria-label="Bellum product pillars">
        {heroStats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Why Bellum exists</p>
          <h2>Built for the questions that actually hurt on exams.</h2>
        </div>

        <div className="feature-grid">
          <FeatureCard
            eyebrow="Source-grounded"
            title="Lecture-first question design"
            description="The future pipeline will anchor questions to uploaded PDF content instead of generic study trivia."
            href="/generate"
            cta="Open generate shell"
          />
          <FeatureCard
            eyebrow="Trap-aware"
            title="Distractors with intent"
            description="Bellum is designed around plausible near-miss choices, tested misconceptions, and post-submit explanations."
            href="/demo-quiz"
            cta="View demo quiz"
          />
          <FeatureCard
            eyebrow="Exam discipline"
            title="No instant explanations during attempt"
            description="The experience keeps explanations locked until submission to preserve exam-like pressure."
            href="/demo-quiz"
            cta="Preview attempt flow"
          />
        </div>
      </section>
    </main>
  );
}
