import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import MonoNav from "@/components/mono-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MW Bio",
  description: "About MW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-2`}>
        <MonoNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
