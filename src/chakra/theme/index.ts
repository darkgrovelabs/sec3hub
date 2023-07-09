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
        50: '#fff3e2',
        100: '#ffe0b6',
        200: '#ffcc88',
        300: '#ffb75a',
        400: '#ffa73b',
        500: '#fe9829',
        600: '#fa8d27',
        700: '#f37d25',
        800: '#ec6e23',
        900: '#e2551e',
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
        50: '#ffecef',
        100: '#ffcfd4',
        200: '#f59c9e',
        300: '#ed7677',
        400: '#f85555',
        500: '#ff453b',
        600: '#f03a3a',
        700: '#dd3034',
        800: '#d0292c',
        900: '#c21b20',
      },
    },
  })

export default theme
