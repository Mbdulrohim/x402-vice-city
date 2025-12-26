import type { Metadata } from "next";
import {
  Carter_One,
  Yellowtail,
  Montserrat,
  Space_Grotesk,
} from "next/font/google"; // 1. Update import
import "./globals.css";

const carter = Carter_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-carter",
});

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yellowtail",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const spaceGrotesk = Space_Grotesk({
  // 2. Configure font
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "x402 City - Explore the Payment Protocol Ecosystem",
  description:
    "An immersive 3D experience showcasing the x402 payment ecosystem. Explore 70+ projects across facilitators, services, infrastructure, and integrations.",
  keywords: [
    "x402",
    "payment protocol",
    "cryptocurrency",
    "web3",
    "blockchain",
    "HTTP 402",
    "micropayments",
    "stablecoins",
  ],
  authors: [{ name: "PayAI" }],
  creator: "PayAI",
  publisher: "PayAI",
  openGraph: {
    title: "x402 City - Explore the Payment Protocol Ecosystem",
    description:
      "An immersive 3D experience showcasing the x402 payment ecosystem. Explore 70+ projects in an interactive cyberpunk city.",
    url: "https://city.x402.org",
    siteName: "x402 City",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "x402 City - Interactive 3D Ecosystem Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "x402 City - Explore the Payment Protocol Ecosystem",
    description:
      "An immersive 3D experience showcasing the x402 payment ecosystem.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width" as const,
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${carter.variable} ${yellowtail.variable} ${montserrat.variable} ${spaceGrotesk.variable} font-sans antialiased`} // 3. Add to className
      >
        {children}
      </body>
    </html>
  );
}
