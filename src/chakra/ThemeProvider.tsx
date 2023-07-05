'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import {
  ChakraProvider,
  ColorModeScript,
  StyleFunctionProps,
  extendTheme,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Work_Sans } from 'next/font/google'

const font = Work_Sans({
  subsets: ['latin'],
})

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('rgb(20,20,20)', 'rgb(255,255,255)'),
      },
    }),
  },
  fonts: {
    heading: font.style.fontFamily,
    body: font.style.fontFamily,
  },
})

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  )
}
