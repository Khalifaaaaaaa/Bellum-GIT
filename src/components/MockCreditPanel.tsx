import type { MockCredit } from "@/lib/mockBellumData";

type MockCreditPanelProps = {
  credits: MockCredit[];
};

export function MockCreditPanel({ credits }: MockCreditPanelProps) {
  return (
    <div className="credit-grid">
      {credits.map((credit) => (
        <article className="credit-card" key={credit.label}>
          <strong>{credit.value}</strong>
          <span>{credit.label}</span>
          <span>{credit.note}</span>
        </article>
      ))}
    </div>
  );
}