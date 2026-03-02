import { createThirdwebClient , getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "2d9f3131ccbd3d52f359f18a7d254922";

if (!CLIENT_ID) {
  throw new Error("NEXT_PUBLIC_THIRDWEB_CLIENT_ID is not set in environment variables");
}

export const client = createThirdwebClient({
  clientId: CLIENT_ID,
});


 export const contract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the contract's address
  address: "0x5b391Fd7D44eB707C6aB265839F3c5B62FCbb5a6",
  // the chain the contract is deployed on
  chain: defineChain(11155111), // Sepolia testnet
  // the contract's abi
  abi: [
  {
    "inputs": [],
    "name": "count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decrement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "increment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
],
});