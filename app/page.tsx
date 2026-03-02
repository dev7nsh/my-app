"use client";
import Counter from '@/component/Counter';
import SimpleCounter from '@/component/SimpleCounter';
import { client } from '@/utils/contants';
import React, { useState } from 'react';
import { ConnectButton, useActiveAccount } from "thirdweb/react";

export default function page() {
  const account = useActiveAccount();
  const [useSimpleCounter, setUseSimpleCounter] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">My dApp</h1>

        {/* Counter Type Toggle */}
        <div className="flex gap-2 mb-4 justify-center">
          <button
            onClick={() => setUseSimpleCounter(true)}
            className={`px-3 py-1 rounded text-sm ${
              useSimpleCounter 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Simple Counter
          </button>
          <button
            onClick={() => setUseSimpleCounter(false)}
            className={`px-3 py-1 rounded text-sm ${
              !useSimpleCounter 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Transaction Button Counter
          </button>
        </div>

        {account ? (
          <>
            <ConnectButton client={client} connectModal={{
              size: "compact"
            }} />

            <div className='text-center text-3xl font-bold pt-3.5'>
              {useSimpleCounter ? <SimpleCounter /> : <Counter />}
            </div>
          </>
        ) : (
          <ConnectButton client={client} connectModal={{
            size: "compact"
          }} />
        )}

        

        


      </div>
    </div>
  );
}


 
