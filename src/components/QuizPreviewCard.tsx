import type { QuizQuestion } from "@/lib/mockBellumData";

type QuizPreviewCardProps = {
  question: QuizQuestion;
  showAnswer?: boolean;
};

export function QuizPreviewCard({
  question,
  showAnswer = false
}: QuizPreviewCardProps) {
  return (
    <article className="quiz-preview-card">
      <div className="quiz-card-header">
        <div>
          <p className="quiz-meta">
            {question.track} · {question.conceptTag} · {question.difficulty}
          </p>
          <h3>{question.title}</h3>
        </div>
        <span className="status-pill">{question.qaStatus}</span>
      </div>

      <p className="quiz-stem">{question.stem}</p>

      <div className="option-stack">
        {question.options.map((option) => (
          <span key={option.label}>
            {option.label}. {option.text}
          </span>
        ))}
      </div>

      {showAnswer ? (
        <div className="answer-review">
          <strong>
            Correct answer: {question.correctAnswer}. {question.correctAnswerText}
          </strong>
          <p>{question.correctExplanation}</p>
          <p>
            <strong>Trap:</strong> {question.trapExplanation}
          </p>
          <p>
            <strong>Review next:</strong> {question.reviewPrompt}
          </p>
        </div>
      ) : (
        <div className="trap-strip">
          <strong>Explanations locked</strong>
          <span>Bellum reveals rationale, trap, and misconception review after submission only.</span>
        </div>
      )}
    </article>
  );
}