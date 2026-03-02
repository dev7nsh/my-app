import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import ToastProvider from "@/components/ToastProvider";
import { client } from "@/utils/contants";

import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dapp.chouhan.me"),
  title: "Web3 Counter dApp | Devansh Chouhan",
  description:
    "A decentralized counter application built with React, Solidity, and Thirdweb, deployed on Sepolia Testnet.",
  keywords: [
    "Web3",
    "dApp",
    "Solidity",
    "React",
    "Thirdweb",
    "Ethereum",
    "Sepolia",
    "Smart Contract",
  ],
  authors: [
    {
      name: "Devansh Chouhan",
      url: "https://chouhan.me",
    },
  ],
  openGraph: {
    title: "Web3 Counter dApp | Devansh Chouhan",
    description:
      "Interact with a smart contract deployed on Sepolia. Built using React + Solidity + Thirdweb.",
    url: "https://dapp.chouhan.me",
    siteName: "Web3 Counter dApp",
    images: [
      "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyemU4bmdiOWdmam5wNTVkOWQzazNkNTBjMmFwM3ltaTNnN3U1amN3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zr4T8FFFuZ3DIFgJCK/giphy.gif",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3 Counter dApp | Devansh Chouhan",
    description:
      "React + Solidity + Thirdweb dApp deployed on Sepolia Testnet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThirdwebProvider >
          {children}
          <ToastProvider />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
