// src/app/layout.tsx

import type { Metadata } from "next";
// Import the new fonts
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Configure the fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "IEEE WIE SSN",
  description: "Official website for the IEEE WIE Affinity Group at SSN College of Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font variables to the body */}
      <body className={`${playfair.variable} ${garamond.variable} antialiased`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}