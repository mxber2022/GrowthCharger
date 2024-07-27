import './App.css';
import Nav from './components/Nav/Nav';
import Fetch from './components/FetchTokenBound/Fetch';
import Pool from './components/Pool/Pool';
import { InjectedConnector } from 'wagmi/connectors/injected'
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, gnosisChiado, goerli, mainnet, polygon, chiliz } from 'wagmi/chains';
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

const chains = [arbitrum, mainnet, polygon, goerli, chiliz];
const projectId = '59198889d7df78b39ea70d871d0ec131';

const { publicClient } = configureChains(
  chains, 
  [alchemyProvider({ apiKey: '_HaCAEADifV16NSoWZ0DJ-pKt-zFOfaK' }),
  jsonRpcProvider({
    rpc: (chain) => ({
      http: `https://chiliz-spicy.publicnode.com/`,
    }),
    stallTimeout: 1000,
  }),
  ],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } })
  ],
  publicClient
})

createWeb3Modal({ wagmiConfig, projectId, chains , themeVariables: {
  '--w3m-accent': '#2c4d4e',
  'themeMode': 'dark'
}})

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Nav/>
        <Fetch/>
        <Pool />
      </WagmiConfig>
    </>
  );
}

export default App;
