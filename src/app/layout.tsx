import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "INII - Innovative Technology, Better Life",
  description: "INII is a technology company dedicated to developing high-quality iOS and macOS applications, including ColorCard, iFrame, Progress, and Menu AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.className} ubuntu-regular`}>{children}</body>
    </html>
  );
}
