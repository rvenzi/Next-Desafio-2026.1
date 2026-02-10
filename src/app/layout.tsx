import type { Metadata } from "next";
import { Imbue, Inter } from "next/font/google";
import "./globals.css";

const imbue = Imbue({
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-imbue",
  subsets: ["latin"],
});
 
const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Essence",
  description: "Um site para perfumes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${imbue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
