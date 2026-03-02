import { contract } from '@/utils/contants';
import React from 'react'
import { useReadContract, TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { toast } from 'react-toastify';

const Counter = () => {
    const { data, isLoading: countLoading } = useReadContract({
        contract: contract,
        method: "getCount"
    });
    console.log(data, "data counter ");
    return (
        <div>
            {countLoading ? (
                <div><h1>Loading...</h1></div>
            ) : (
                <div>
                    <div>Counter</div>
                    <h2>{data?.toString() || "0"}</h2>

                    {/* Test Toast Button */}
                    {/* <button 
                        onClick={testToast}
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Test Toast
                    </button> */}

                    <div className='flex gap-2 justify-around mt-4'>
                        <TransactionButton
                            transaction={() => prepareContractCall({
                                contract,
                                method: "decrement",
                                params: [],
                            })}
                            onTransactionSent={() => {
                                toast.loading("Decrementing counter...", {
                                    toastId: "decrement-loading"
                                });
                            }}
                            onTransactionConfirmed={() => {
                                toast.dismiss("decrement-loading");
                                toast.success("Counter decremented successfully!", {
                                    position: "top-right",
                                    autoClose: 3000,
                                });
                            }}
                            onError={(error) => {
                                toast.dismiss("decrement-loading");
                                toast.error(`Failed to decrement: ${error.message}`, {
                                    position: "top-right",
                                    autoClose: 5000,
                                });
                            }}
                            className="px-6 py-2 rounded-xl bg-linear-to-r from-red-500 to-red-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            -
                        </TransactionButton>

                        <TransactionButton
                            transaction={() => prepareContractCall({
                                contract,
                                method: "increment",
                                params: [],
                            })}
                            onTransactionSent={() => {
                                toast.loading("Incrementing counter...", {
                                    toastId: "increment-loading"
                                });
                            }}
                            onTransactionConfirmed={() => {
                                toast.dismiss("increment-loading");
                                toast.success("Counter incremented successfully!", {
                                    position: "top-right",
                                    autoClose: 3000,
                                });
                            }}
                            onError={(error) => {
                                toast.dismiss("increment-loading");
                                toast.error(`Failed to increment: ${error.message}`, {
                                    position: "top-right",
                                    autoClose: 5000,
                                });
                            }}
                            className="px-6 py-2 rounded-xl bg-linear-to-r from-green-500 to-green-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            +
                        </TransactionButton>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Counter;