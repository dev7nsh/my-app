"use client";
import Counter from '@/component/Counter';
import { client } from '@/utils/contants';
import React from 'react';
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import Link from 'next/link';

export default function Page() {
  const account = useActiveAccount();

  return (
    <div>
      {account && (
        <div>
          <header className='h-fit p-4 flex justify-between items-center max-w-5xl mx-auto'>
            <h1 className="text-2xl font-bold ">My dApp</h1>
            <div className='flex items-center space-x-6'>
              <Link href="/doc" className="px-4 py-2 font-medium text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-200 flex items-center group">
                <svg className="w-5 h-5 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                About
              </Link>
              <ConnectButton client={client} connectModal={{
                size: "compact"
              }} />
            </div>

          </header>
        </div>

      )}




      <div className="min-h-screen flex items-center justify-center ">
        <div className="p-8 rounded-lg shadow-md max-w-md">


          {/* Counter Type Toggle */}


          {account ? (
            <>
              {/* <div className='flex items-center justify-center '>
             <ConnectButton  client={client} connectModal={{
              size: "compact"
            }} />
          </div>
            */}

              <div className='text-center text-3xl font-bold pt-3.5'>
                <Counter />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-4 text-center">Welcome to My dApp</h1>
              <p className="mb-6 text-gray-500 text-center">Connect your wallet to get started and interact with the blockchain.</p>
              <div className="flex flex-col items-center space-y-4">
                <ConnectButton client={client} connectModal={{
                  size: "compact"
                }} />
                <Link href="/doc" className="group flex items-center px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-200 mt-4 shadow-sm hover:shadow-md">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Learn about this project
                  <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

          )}






        </div>
      </div>
    </div>
  );
}



