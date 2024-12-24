import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next todo",
  description: "created Todo app by Next + Typescript + TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="container mx-auto text-gray-600 bg-gray-200">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-grow justify-center items-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
