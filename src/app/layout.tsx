import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MonoNav from "@/components/mono-nav";
import MonoFooter from "@/components/mono-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZT Bio",
  description: "About ZT",
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
        <MonoFooter />
      </body>
    </html>
  );
}
