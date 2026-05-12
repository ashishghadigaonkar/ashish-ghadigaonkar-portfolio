import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Ghadigaonkar | Full Stack Developer & AI/ML Engineer",
  description: "Portfolio of Ashish Ghadigaonkar - Full Stack Developer, AI/ML Engineer, and Data Engineer based in Mumbai, India.",
  keywords: ["Ashish Ghadigaonkar", "Full Stack Developer", "AI/ML Engineer", "Data Engineer", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


