"use client";
import Counter from '@/component/Counter';
import { client } from '@/utils/contants';
import React from 'react';
import { ConnectButton, useActiveAccount } from "thirdweb/react";

export default function Page() {
  const account = useActiveAccount();

  return (
    <div>
      {account && (
        <div>
          <header className='h-fit p-4 flex justify-around'>
            <h1 className="text-2xl font-bold ">My dApp</h1>
            <div className=' '>
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
            <div>
              <h1 className="text-2xl font-bold mb-4 text-center">My dApp</h1>
              <ConnectButton client={client} connectModal={{
                size: "compact"
              }} />
            </div>

          )}






        </div>
      </div>
    </div>
  );
}



