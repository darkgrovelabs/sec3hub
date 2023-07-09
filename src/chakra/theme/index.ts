import { StyleFunctionProps, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Nunito } from 'next/font/google'
import Menu from './menu'
import Table from './table'
import Text from './text'
import Skeleton from './skeleton'
import Card from './card'
import Button from './button'

const font = Nunito({
  subsets: ['latin'],
})

const theme = (colorMode: 'light' | 'dark' | string) =>
  extendTheme({
    config: {
      initialColorMode: colorMode,
      useSystemColorMode: false,
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          bg: mode('#F6F6F7', '#000')(props),
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
      Skeleton,
      Card,
      Button,
    },
    colors: {
      primary: {
        50: '#fdf3e2',
        100: '#fadfb5',
        200: '#f7cb86',
        300: '#f4b658',
        400: '#f2a639',
        500: '#f19721',
        600: '#ed8c1e',
        700: '#e67d1a',
        800: '#e06e16',
        900: '#d75610',
      },
      blue: {
        50: '#dbf0ff',
        100: '#a5d8ff',
        200: '#6abffa',
        300: '#16a5f2',
        400: '#0093ee',
        500: '#0081e9',
        600: '#0074dc',
        700: '#0063ca',
        800: '#0053b8',
        900: '#003598',
      },
      red: {
        50: '#fce8e7',
        100: '#ffcabd',
        200: '#ffa892',
        300: '#ff8467',
        400: '#ff6645',
        500: '#ff4726',
        600: '#ff4122',
        700: '#f1391d',
        800: '#e33118',
        900: '#ca210e',
      },
    },
  })

export default theme
