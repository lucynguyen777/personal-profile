import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
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

const baseUrl = "https://lucynguyen777.github.io/personal-profile";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Ha Nguyen — AI × Biology × Research",
  description:
    "Building AI tools for scientific research, language learning, and biological discovery. Combining biological sciences, artificial intelligence, and software engineering.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Bioinformatics",
    "Research",
    "LLM",
    "Language Learning",
    "Ha Nguyen",
  ],
  authors: [{ name: "Ha Nguyen" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Ha Nguyen",
    title: "Ha Nguyen — AI × Biology × Research",
    description:
      "Building AI tools for scientific research, language learning, and biological discovery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ha Nguyen — AI × Biology × Research",
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
    <html lang="en" className={`${GeistSans.variable} ${inter.variable} ${ibmPlexSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}