import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INII.tech",
  description: "INII is a technology company dedicated to developing high-quality iOS and macOS applications, including ColorCard, iFrame, Progress, and Menu AI.",
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="ubuntu-regular">{children}</body>
    </html>
  );
}
