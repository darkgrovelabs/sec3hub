'use client'
import '@rainbow-me/rainbowkit/styles.css'

import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import { ReactNode } from 'react'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'

import { arbitrum, bsc, mainnet, optimism, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { useColorMode } from '@/chakra/components'

const { chains, publicClient } = configureChains(
  [mainnet, polygon, bsc, optimism, arbitrum],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'SEC3 Hub',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

type WalletProviderProps = {
  children: ReactNode
}

export default function WalletProvider(props: WalletProviderProps) {
  const { children } = props
  const { colorMode } = useColorMode()

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          theme={
            colorMode === 'dark'
              ? darkTheme({
                  accentColor: '#ffb75a',
                  overlayBlur: 'small',
                })
              : lightTheme({
                  accentColor: '#ffb75a',
                  overlayBlur: 'small',
                })
          }
          modalSize='compact'
          chains={chains}
        >
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}
