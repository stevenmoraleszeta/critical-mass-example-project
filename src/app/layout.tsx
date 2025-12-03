import type { Metadata } from "next";
import { Roboto_Mono, Inter } from "next/font/google";
import "../styles/main.scss";

// Import Roboto Mono font (monospace) for code-like appearance
// Using next/font/google for automatic optimization (Critical Mass performance requirement)
const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Import Inter font for body text
// Using next/font/google for automatic optimization (Critical Mass performance requirement)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steven Morales - Full Stack Software Engineer & Tech Leader | Critical Mass Portfolio",
  description: "Portfolio showcasing front-end development expertise for Critical Mass Developer position. Building high-quality, responsive, accessible full stack experiences with React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Steven Morales", "Full Stack Developer", "Front End Developer", "React", "Next.js", "TypeScript", "Critical Mass", "Portfolio", "Web Development", "San Jose Costa Rica"],
  authors: [{ name: "Steven Morales" }],
  creator: "Steven Morales",
  publisher: "Steven Morales",
  openGraph: {
    title: "Steven Morales - Full Stack Software Engineer & Tech Leader",
    description: "Portfolio showcasing front-end development expertise for Critical Mass Developer position.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Morales - Full Stack Software Engineer & Tech Leader",
    description: "Portfolio showcasing front-end development expertise for Critical Mass Developer position.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#0000FF",
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
    <html lang="en" className={`${robotoMono.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
