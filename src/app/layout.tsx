import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tobias Otieno Obura | Educational Leader & EdTech Pioneer",
  description: "Portfolio of Tobias Otieno Obura — Deputy Principal, Head of Cambridge Section, and Founder of NextGen Learners Hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-900 text-slate-100">{children}</body>
    </html>
  );
}
