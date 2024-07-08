import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ComponentFooter } from "./components/Footer";

const roboto_mono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "DSC.TECHASSISTENCE",
  description: "Manutenção de celulares em geral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto_mono.className}>
        <Header />
        {children}
        <ComponentFooter />
      </body>
    </html>
  );
}
