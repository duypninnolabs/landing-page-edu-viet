import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingCTA from "./components/button-cta";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edu Việt",
  description: "Xây Dựng Nền Tảng Cùng Edu Việt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col">
    <div className="bg-slate-50 text-[#000000]">
         {children}
         {/* <FloatingCTA /> */}
                 <Toaster position="top-right" />

         </div>
        </body>
    </html>
  );
}
