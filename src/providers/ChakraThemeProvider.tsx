'use client'

import theme from '@/chakra/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { cookieStorageManager } from '../chakra/components'

export default function ThemeProvider({
  children,
  colorMode,
}: {
  children: React.ReactNode
  colorMode: 'light' | 'dark'
}) {
  return (
    <>
      <ChakraProvider
        colorModeManager={cookieStorageManager}
        theme={theme(colorMode)}
      >
        {children}
      </ChakraProvider>
    </>
  )
}
