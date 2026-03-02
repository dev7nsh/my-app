import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function DocPage() {
  return (
    <>
      {/* 
        Next.js 13+ app router typically uses layout.tsx for metadata, 
        but we can keep standard HTML semantics here for basic SEO.
      */}
      <Head>
        <title>Devansh Chouhan - First Web3 dApp | Smart Contract Experience</title>
        <meta name="description" content="Explore Devansh Chouhan's first Web3 dApp. A decentralized counter application built with React, Solidity, and Thirdweb, deployed on Sepolia Testnet. Learn how smart contracts store state and handle on-chain transactions." />
        <meta name="keywords" content="Devansh Chouhan, Web3, dApp, Solidity, React, Thirdweb, Smart Contract, Blockchain, Ethereum, Sepolia" />
      </Head>

      <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] py-8 px-4 sm:px-6 lg:px-8 selection:bg-[#388bfd] selection:bg-opacity-30" style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif' }}>
        <div className="max-w-4xl mx-auto">

          {/* Navigation / Header */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-sm text-[#58a6ff] hover:underline font-semibold transition-colors">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path></svg>
              Back to App
            </Link>
          </div>

          {/* Repository Container */}
          <div className="border border-[#30363d] rounded-md bg-[#0d1117] shadow-sm overflow-hidden">

            {/* File Header */}
            <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center">
              <div className="flex items-center text-sm font-semibold text-[#c9d1d9]">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-2 fill-[#8b949e]">
                  <path fillRule="evenodd" d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H3.75zM8 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 018 3.25zM3.75 6h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5zm0 3h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5zm0 3h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 010-1.5z"></path>
                </svg>
                README.md
              </div>
            </div>

            {/* Readme Content */}
            <div className="p-8 md:p-10 markdown-body">
              {/* Note: In a real Next.js app, consider adding standard markdown styles for `markdown-body` 
                  or we can inline them like below. Let's inline GitHub Dark styling. */}

              <h1 className="text-3xl md:text-4xl font-semibold border-b border-[#21262d] pb-2 mb-6 text-[#c9d1d9] flex pb-3">
                Web3 Counter dApp
              </h1>

              <p className="mb-4 text-[#8b949e] text-base leading-relaxed">
                <strong className="text-[#c9d1d9] font-medium">I’m Devansh Chouhan</strong>, and this project marks my entry into smart contract development and decentralized application (dApp) building.
              </p>

              <h2 className="text-2xl font-semibold border-b border-[#21262d] pb-2 mb-4 mt-8 text-[#c9d1d9]">
                � What This Project Does
              </h2>
              <p className="mb-4 text-[#8b949e] leading-relaxed">
                This is a simple Counter dApp powered by a smart contract deployed on the blockchain. It allows users to:
              </p>
              <ul className="list-none pl-4 mb-4 space-y-2 text-[#8b949e]">
                <li className="flex items-center"><span className="mr-2">➕</span> Increment the counter</li>
                <li className="flex items-center"><span className="mr-2">➖</span> Decrement the counter</li>
                <li className="flex items-center"><span className="mr-2">🔐</span> Store the counter value permanently on-chain</li>
              </ul>

              <p className="mb-4 text-[#8b949e] leading-relaxed">
                Unlike traditional apps where data is stored in a database, this project stores data directly on the blockchain, making it:
              </p>
              <ul className="list-disc pl-8 mb-4 space-y-1 text-[#8b949e] font-medium marker:text-[#30363d]">
                <li className="pl-1">Transparent</li>
                <li className="pl-1">Tamper-proof</li>
                <li className="pl-1">Publicly verifiable</li>
              </ul>
              <div className="bg-[#161b22] border-l-[3px] border-[#3fb950] p-4 my-6 rounded-r-md">
                <p className="text-[#c9d1d9] font-semibold text-sm">
                  ✓ Every increment or decrement is a real blockchain transaction.
                </p>
              </div>

              <h2 className="text-2xl font-semibold border-b border-[#21262d] pb-2 mb-4 mt-8 text-[#c9d1d9]">
                🔗 Smart Contract Details
              </h2>
              <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 mb-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <span className="text-[#8b949e] font-mono text-sm w-36 shrink-0">Contract Address:</span>
                  <a href={`https://sepolia.etherscan.io/address/0x5b391Fd7D44eB707C6aB265839F3c5B62FCbb5a6`} target="_blank" rel="noopener noreferrer"
                    className="text-[#58a6ff] hover:underline font-mono text-sm break-all">
                    0x5b391Fd7D44eB707C6aB265839F3c5B62FCbb5a6
                  </a>
                </div>
              </div>
              <p className="mb-6 text-[#8b949e] italic border-l-4 border-[#30363d] pl-4 py-1">
                This was my first deployed smart contract — a major milestone in my Web3 journey.
              </p>

              <h2 className="text-2xl font-semibold border-b border-[#21262d] pb-2 mb-4 mt-8 text-[#c9d1d9]">
                🛠 Tech Stack Used
              </h2>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-[#8b949e] marker:text-[#30363d]">
                <li className="pl-1"><strong className="text-[#c9d1d9]">Solidity</strong> (Smart Contract)</li>
                <li className="pl-1"><strong className="text-[#c9d1d9]">React</strong> (Frontend)</li>
                <li className="pl-1"><strong className="text-[#c9d1d9]">Thirdweb SDK</strong> (Blockchain interaction)</li>
                <li className="pl-1"><strong className="text-[#c9d1d9]">Wallet-based authentication</strong></li>
                <li className="pl-1"><strong className="text-[#c9d1d9]">On-chain transaction handling</strong></li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-[#c9d1d9]">This project helped me understand:</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-[#30363d] bg-[#161b22] rounded-md p-3 flex items-start">
                  <svg className="w-5 h-5 text-[#3fb950] mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                  <span className="text-sm text-[#c9d1d9]">How smart contracts store state</span>
                </div>
                <div className="border border-[#30363d] bg-[#161b22] rounded-md p-3 flex items-start">
                  <svg className="w-5 h-5 text-[#3fb950] mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                  <span className="text-sm text-[#c9d1d9]">How transactions are signed and confirmed</span>
                </div>
                <div className="border border-[#30363d] bg-[#161b22] rounded-md p-3 flex items-start">
                  <svg className="w-5 h-5 text-[#3fb950] mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                  <span className="text-sm text-[#c9d1d9]">Gas fees and blockchain confirmations</span>
                </div>
                <div className="border border-[#30363d] bg-[#161b22] rounded-md p-3 flex items-start">
                  <svg className="w-5 h-5 text-[#3fb950] mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                  <span className="text-sm text-[#c9d1d9]">Event-driven frontend architecture</span>
                </div>
                <div className="border border-[#30363d] bg-[#161b22] rounded-md p-3 flex items-start">
                  <svg className="w-5 h-5 text-[#3fb950] mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                  <span className="text-sm text-[#c9d1d9]">Web3 wallet integration</span>
                </div>
              </div>

              <h2 className="text-2xl font-semibold border-b border-[#21262d] pb-2 mb-4 mt-8 text-[#c9d1d9]">
                🎯 Why I Built This
              </h2>
              <p className="mb-4 text-[#8b949e] leading-relaxed">
                As a developer transitioning deeper into Web3 and DevOps, I wanted to:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-[#8b949e] marker:text-[#30363d]">
                <li className="pl-1">Move beyond theory</li>
                <li className="pl-1">Deploy a real smart contract</li>
                <li className="pl-1">Handle real blockchain transactions</li>
                <li className="pl-1">Build a production-like frontend for Web3</li>
              </ul>

              <div className="bg-gradient-to-r from-[#161b22] to-transparent border-l-4 border-[#8957e5] p-5 my-8 rounded-r-md">
                <p className="text-[#c9d1d9] font-medium leading-relaxed italic m-0">
                  "This project represents the foundation of my blockchain development journey."
                </p>
              </div>

              <h2 className="text-2xl font-semibold border-b border-[#21262d] pb-2 mb-4 mt-8 text-[#c9d1d9]">
                🌐 Connect with Me
              </h2>
              <div className="flex flex-wrap gap-4 mt-6">
                <a href="https://chouhan.me" target="_blank" rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-md px-4 py-2 hover:bg-[#30363d] hover:border-[#8b949e] transition-all">
                  <span className="mr-2">🌍</span> Portfolio
                </a>
                <a href="https://linkedin.com/in/devanshchouhan" target="_blank" rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-md px-4 py-2 hover:bg-[#30363d] hover:border-[#8b949e] transition-all">
                  <svg className="w-4 h-4 mr-2 text-[#58a6ff]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/dev7nsh/my-app" target="_blank" rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-md px-4 py-2 hover:bg-[#30363d] hover:border-[#8b949e] transition-all">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                  GitHub Source
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
