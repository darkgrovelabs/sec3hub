'use client'

import {
  ChakraProvider,
  ColorModeScript,
  StyleFunctionProps,
  extendTheme,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ['latin'],
})

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('#fff', '#1E1E20')(props),
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
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  )
}
