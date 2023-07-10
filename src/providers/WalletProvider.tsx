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
  projectId: '2e4a7b7cfb5bfc7d568289e0dbeda110',
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
