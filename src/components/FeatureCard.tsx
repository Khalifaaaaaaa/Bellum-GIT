import Link from "next/link";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta?: string;
};

export function FeatureCard({
  eyebrow,
  title,
  description,
  href,
  cta = "Open"
}: FeatureCardProps) {
  return (
    <Link href={href} className="feature-card">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-cta">{cta}</span>
    </Link>
  );
}