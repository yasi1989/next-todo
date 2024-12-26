import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
config.autoAddCss = false;

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
