import { contract } from '@/utils/contants';
import React from 'react'
import { useReadContract, useActiveAccount } from "thirdweb/react";
import { prepareContractCall, sendTransaction } from "thirdweb";
import { toast } from 'react-toastify';

const SimpleCounter = () => {
    const account = useActiveAccount();
    const { data, isLoading: countLoading, refetch } = useReadContract({
        contract: contract,
        method: "getCount"
    });
    console.log(data, "data counter ");

    const handleDecrement = async () => {
        if (!account) {
            toast.error("Please connect your wallet first!");
            return;
        }

        try {
            // Show loading toast
            toast.loading("Decrementing counter...", {
                toastId: "decrement-loading"
            });

            const transaction = prepareContractCall({
                contract,
                method: "decrement",
                params: [],
            });
            
            await sendTransaction({ transaction, account });
            
            // Dismiss loading and show success
            toast.dismiss("decrement-loading");
            toast.success("Counter decremented successfully!", {
                position: "top-right",
                autoClose: 3000,
            });
            
            refetch(); // Refresh the counter value
        } catch (error) {
            // Dismiss loading and show error
            toast.dismiss("decrement-loading");
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            toast.error(`Failed to decrement: ${errorMessage}`, {
                position: "top-right",
                autoClose: 5000,
            });
            console.error("Error decrementing:", error);
        }
    };

    const handleIncrement = async () => {
        if (!account) {
            toast.error("Please connect your wallet first!");
            return;
        }

        try {
            // Show loading toast
            toast.loading("Incrementing counter...", {
                toastId: "increment-loading"
            });

            const transaction = prepareContractCall({
                contract,
                method: "increment",
                params: [],
            });
            
            await sendTransaction({ transaction, account });
            
            // Dismiss loading and show success
            toast.dismiss("increment-loading");
            toast.success("Counter incremented successfully!", {
                position: "top-right",
                autoClose: 3000,
            });
            
            refetch(); // Refresh the counter value
        } catch (error) {
            // Dismiss loading and show error
            toast.dismiss("increment-loading");
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            toast.error(`Failed to increment: ${errorMessage}`, {
                position: "top-right",
                autoClose: 5000,
            });
            console.error("Error incrementing:", error);
        }
    };

    const testToast = () => {
        toast.success("Test toast is working! 🎉");
    };

    return (
        <div>
            {countLoading ? ( 
                <div><h1>Loading...</h1></div>
            ) : (
                <div>
                    <div>Simple Counter</div>
                    <h2>{data?.toString() || "0"}</h2>

                    {/* Test Toast Button */}
                    <button 
                        onClick={testToast}
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Test Toast
                    </button>

                    <div className='flex gap-2 justify-around mt-4'>
                        <button 
                            onClick={handleDecrement}
                            disabled={!account || countLoading}
                            className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            -                     
                        </button>

                        <button 
                            onClick={handleIncrement}
                            disabled={!account || countLoading}
                            className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            +                    
                        </button>
                    </div>

                    {!account && (
                        <div className="text-center text-gray-500 mt-4">
                            Connect your wallet to interact with the counter
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SimpleCounter;
