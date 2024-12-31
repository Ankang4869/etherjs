import { ethers } from 'ethers'
import { useState } from 'react'
const Learn01 = () => {
    const [balance, setBalance] = useState()
    const provider = new ethers.getDefaultProvider()
  
    const getVmoney = async () => {
      setBalance("加载中...")
      const getBalance = await provider.getBalance(`vitalik.eth`);
      setBalance(ethers.formatEther(getBalance))
    }
  
    return (
      <div className="w-full h-screen flex">
        <div className="m-auto w-1/2 h-1/2 bg-gray-400 flex flex-col justify-center items-center">
          <button onClick={getVmoney} className="w-40 h-10 bg-slate-300">点击获取V神钱包余额</button>
          <div>v神钱包余额:{balance}</div>
        </div>
      </div>
    )
}

export default Learn01