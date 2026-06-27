import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bellum — Exam-Grade MCQs for Med & Pre-Med",
  description:
    "Bellum turns lecture PDFs into high-yield exam questions with traps, explanations, and weakness review for medical and pre-med students."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}