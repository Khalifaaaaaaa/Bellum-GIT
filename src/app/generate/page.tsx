import Link from "next/link";
import { AppShell } from "@/components/AppShell";

export default function GeneratePage() {
  return (
    <AppShell
      eyebrow="Generate shell"
      title="Generate Your First Quiz"
      subtitle="This is the clickable Phase 1 generation shell. Real PDF validation, mock processing, and simulated progress begin in Phase 3."
    >
      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">PDF only later</p>
            <h2>Upload flow placeholder</h2>
          </div>
          <span className="status-pill">No API calls</span>
        </div>

        <form className="upload-shell">
          <label className="field-block">
            <span>Lecture PDF</span>
            <input type="file" accept="application/pdf" disabled />
            <small>Disabled in Phase 1. Phase 3 will accept PDF files and show fake processing.</small>
          </label>

          <div className="form-grid">
            <label className="field-block">
              <span>Track</span>
              <select defaultValue="clinical">
                <option value="premed">Pre-Med / Basic Sciences</option>
                <option value="clinical">Medical School / Clinical Medicine</option>
              </select>
            </label>

            <label className="field-block">
              <span>Mode</span>
              <select defaultValue="standard">
                <option value="standard">Standard Quiz</option>
                <option value="deep">Deep Exam Mode</option>
              </select>
            </label>

            <label className="field-block">
              <span>Question count</span>
              <select defaultValue="10">
                <option value="10">10 questions</option>
                <option value="15">15 questions</option>
                <option value="20">20 questions</option>
              </select>
            </label>

            <label className="field-block">
              <span>Difficulty</span>
              <select defaultValue="exam">
                <option value="balanced">Balanced</option>
                <option value="exam">Exam-style hard</option>
                <option value="clinical">More clinical</option>
              </select>
            </label>
          </div>

          <div className="mock-warning">
            <strong>Phase 1 protection:</strong> this button does not generate anything yet. It prevents fake frontend-only credit logic from pretending to be real quota enforcement.
          </div>

          <div className="hero-actions">
            <Link href="/demo-quiz" className="button primary">
              Open Seeded Demo Quiz
            </Link>
            <Link href="/dashboard" className="button ghost">
              Back to Dashboard
            </Link>
          </div>
        </form>
      </section>
    </AppShell>
  );
}