'use client'

import {
  ChakraProvider,
  StyleFunctionProps,
  extendTheme,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Nunito } from 'next/font/google'
import { cookieStorageManager } from '../chakra/components'
import Menu from '../chakra/theme/menu'
import Table from '../chakra/theme/table'
import Text from '../chakra/theme/text'

const font = Nunito({
  subsets: ['latin'],
})

export default function ThemeProvider({
  children,
  colorMode,
}: {
  children: React.ReactNode
  colorMode: 'light' | 'dark'
}) {
  const theme = extendTheme({
    config: {
      initialColorMode: colorMode,
      useSystemColorMode: false,
    },
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
    components: {
      Menu,
      Text,
      Table,
    },
  })

  return (
    <>
      <ChakraProvider colorModeManager={cookieStorageManager} theme={theme}>
        {children}
      </ChakraProvider>
    </>
  )
}
