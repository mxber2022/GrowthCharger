import React, { useState } from 'react';
// import { abi } from "./abi";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { parseEther } from 'viem';
import './Pool.css';
import { 
  useSendTransaction, 
  useWaitForTransactionReceipt
} from 'wagmi'

function Pool() {
  const CONTRACT_ADDRESS = "0x7199D548f1B30EA083Fe668202fd5E621241CC89";

  const [amount, setAmount] = useState("0.1");
  const [isTransactionPending, setTransactionPending] = useState(false);

  // const { config } = usePrepareContractWrite({
  //   address: CONTRACT_ADDRESS,
  //   abi: abi,
  //   functionName: 'enter',
  //   args: [],
  //   value: parseEther(amount),
  // });
  const { 
    data: hash, 
    isPending, 
    isSuccess,
    sendTransaction 
  } = useSendTransaction();
  
  async function fund() { 

    sendTransaction(
      { 
        to: CONTRACT_ADDRESS, 
        value: parseEther(amount) 
      })
  } 

  // const { data, isLoading, isSuccess, isError, write } = useContractWrite(config);

  const handleButtonClick = async () => {
    setTransactionPending(true);
    // await write?.();
    await fund()
    setTransactionPending(false);
  };

  return (
    <div className="pool-container">
      <h2 className="pool-title">Latest proposal</h2>
      <p className="pool-description">
        🚀
      </p>
      <input
        type="text"
        className="pool-input"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in ETH"
      />
      <button
        className={`pool-button ${isTransactionPending ? 'pending' : isSuccess ? 'success' : ''}`}
        disabled={isTransactionPending}
        onClick={handleButtonClick}
      >
        {isTransactionPending ? 'Processing...' : isSuccess ? '🎉 Transaction Successful!' : '💰 Donate'}
      </button>
    </div>
  );
}

export default Pool;
