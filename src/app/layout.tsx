import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Risorse AI",
  description: "Una raccolta di risorse utili sull'intelligenza artificiale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
