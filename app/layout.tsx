import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import ToastProvider from "@/components/ToastProvider";
import { client } from "@/utils/contants";

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
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web3 Counter dApp Preview",
      },
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
        <ThirdwebProvider client={client}>
          {children}
          <ToastProvider />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
