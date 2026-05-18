import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased`} style={{ colorScheme: 'dark' }}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-500/30">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

