import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ha Nguyen | AI Builder & Researcher",
  description:
    "Building AI tools for scientific research, language learning, and biological discovery. Combining biological sciences, artificial intelligence, and software engineering.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Bioinformatics",
    "Research",
    "Software Engineering",
    "LLM",
    "Language Learning",
  ],
  authors: [{ name: "Ha Nguyen" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hanguyen.dev",
    title: "Ha Nguyen | AI Builder & Researcher",
    description:
      "Building AI tools for scientific research, language learning, and biological discovery.",
    siteName: "Ha Nguyen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ha Nguyen | AI Builder & Researcher",
    description:
      "Building AI tools for scientific research, language learning, and biological discovery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}