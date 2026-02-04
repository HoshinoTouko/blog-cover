import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { siteConfig } from "@/config";
import { Providers } from "@/components/Providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-hidden">
      <body className={`${outfit.variable} antialiased bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden font-outfit`}>
        <Providers>
          <div className="h-screen w-full relative overflow-hidden flex flex-col">
            <Sidebar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 relative flex flex-col justify-center">
              {/* Subtle background accents */}
              <div className="fixed top-0 right-0 -z-10 w-[40vw] h-[40vh] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="fixed bottom-0 left-0 -z-10 w-[30vw] h-[30vh] bg-secondary/5 blur-[80px] rounded-full pointer-events-none" />

              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
