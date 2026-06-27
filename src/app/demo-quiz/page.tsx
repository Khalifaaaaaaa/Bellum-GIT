import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { QuizPreviewCard } from "@/components/QuizPreviewCard";
import { sampleQuestions } from "@/lib/mockBellumData";

export default function DemoQuizPage() {
  return (
    <AppShell
      eyebrow="Seeded demo"
      title="Demo Quiz Preview"
      subtitle="This route proves the quiz direction without real AI. Phase 4 will turn this into a full mock quiz engine with answer selection, scoring, and post-submit review."
    >
      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Attempt mode preview</p>
            <h2>Explanations stay locked during the attempt.</h2>
          </div>
          <Link href="#post-submit-preview" className="button secondary">
            Mock submit
          </Link>
        </div>

        <div className="quiz-list">
          {sampleQuestions.map((question) => (
            <QuizPreviewCard key={question.id} question={question} />
          ))}
        </div>
      </section>

      <section className="panel" id="post-submit-preview">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Post-submit preview</p>
            <h2>Trap Detector appears only after finishing.</h2>
          </div>
          <span className="status-pill">Mock review</span>
        </div>

        <div className="quiz-list">
          {sampleQuestions.map((question) => (
            <QuizPreviewCard key={question.id} question={question} showAnswer />
          ))}
        </div>
      </section>
    </AppShell>
  );
}