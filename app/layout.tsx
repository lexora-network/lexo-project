import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L for Lexora",
  description: "LEXO — an ecosystem asset for the Lexora network.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
