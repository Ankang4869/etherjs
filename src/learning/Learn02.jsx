import { ethers } from 'ethers'
import { useState } from 'react'
const Learn02 = () => {

    // 使用infura服务商 分别链接主网和sepolia测试网
    const INFURA_MAINNET_URL = "https://mainnet.infura.io/v3/ec356db47e234c1199bd41b53a3b394d"
    const INFURA_SEPOLIA_URL = "https://sepolia.infura.io/v3/ec356db47e234c1199bd41b53a3b394d"

    // 主网的provider
    const providerMAIN = new ethers.JsonRpcProvider(INFURA_MAINNET_URL)
    // 测试网的provider
    const providerTEST = new ethers.JsonRpcProvider(INFURA_SEPOLIA_URL)


    // 1 利用Provider读取链上数据
    //   1.1 利用getBalance()函数读取主网和测试网Vitalik的ETH余额
    // console.log("查询vitalik在主网和Sepolia测试网的ETH余额:")
    const [mainbalance, setMainbalance] = useState()
    const [testbalance, setTestbalance] = useState()

    const getVmoney = async () => {
        setMainbalance("加载中...")
        setTestbalance("加载中...")
        // 利用getBalance()函数读取主网和测试网Vitalik的ETH余额
        const mbalance = await providerMAIN.getBalance(`vitalik.eth`)
        const tbalance = await providerTEST.getBalance(`vitalik.eth`)
        setMainbalance(ethers.formatEther(mbalance))
        setTestbalance(ethers.formatEther(tbalance))
    }

    //   1.2 利用getNetwork()查询provider连接到了哪条链，homestead代表ETH主网
    const [mainnetwork, setMainnetwork] = useState()
    const [testnetwork, setTestnetwork] = useState()
  
    const getNet = async () => {
        setMainnetwork("加载中...")
        setTestnetwork("加载中...")
        // 利用getBalance()函数读取主网和测试网Vitalik的ETH余额
        const mnet = await providerMAIN.getNetwork()
        const tnet = await providerTEST.getNetwork()
        // setMainnetwork(mnet.toJSON())
        // setTestnetwork(tnet.toJSON())
        // 不能直接打印
        console.log(mnet.toJSON())
        console.log(tnet.toJSON())
        setMainnetwork("请前往控制台")
        setTestnetwork("请前往控制台")
    }

    //   1.3 利用getBlockNumber()查询当前区块高度
    const [blocknumber,setBlocknumber] = useState()

    const getHeight = async () => {
        setBlocknumber("加载中...")
        const height = await providerMAIN.getBlockNumber()
        setBlocknumber(height)
    }

    //   1.4 利用getTransactionCount()查询某个钱包的历史交易次数
    const [transactionCount,setTransactionCount] = useState()
    
    const getTranC = async () => {
        setTransactionCount("加载中")
        const count = await providerMAIN.getTransactionCount('vitalik.eth')
        setTransactionCount(count)
    }

    //   ....下面不演示了 直接查文档

    return (
      <div className="w-full h-screen flex">
        <div className="m-auto w-1/2 h-1/2 bg-gray-400 flex flex-col justify-center items-center">
          <button onClick={getVmoney} className="w-40 h-10 bg-slate-300">点击获取V神钱包余额</button>
          <div>v神主网钱包余额:{mainbalance}</div>
          <div>v神测试网钱包余额:{testbalance}</div>
          <button onClick={getNet} className="w-40 h-10 bg-slate-300">点击获取链详情</button>
          <div>链1:{mainnetwork}</div>
          <div>链2:{testnetwork}</div>
          <button onClick={getHeight} className="w-40 h-10 bg-slate-300">点击获取区块高度</button>
          <div>区块高度:{blocknumber}</div>
          <button onClick={getTranC} className="w-40 h-10 bg-slate-300">点击获取v神钱包交易次数</button>
          <div>交易次数:{transactionCount}</div>
        </div>
      </div>
    )
}

export default Learn02