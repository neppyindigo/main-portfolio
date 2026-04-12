import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jason Osteen",
  description:
    "I build things I actually want to use.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Jason Osteen",
    description:
      "I build things I actually want to use.",
    url: "https://jasonosteen.dev",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@neppyindigo",
    title: "Jason Osteen",
    description:
      "I build things I actually want to use.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen font-[family-name:var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}
