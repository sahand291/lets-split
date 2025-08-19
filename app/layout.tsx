import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const vazir = localFont({
  src: [
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-UI-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir", // optional: create CSS variable
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Let's Split",
  description: "Let's Slplit our keyboards!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vazir.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
