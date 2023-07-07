import { StyleConfig } from '@chakra-ui/theme-tools'

const Table: StyleConfig = {
  variants: {
    simple: ({ colorMode }) => ({
      th: {
        fontFamily: 'heading',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 'wider',
        color: colorMode === 'light' ? 'gray.800' : 'white',
        borderColor:
          colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200',
        borderBottomWidth: '2px',
      },
      td: {
        borderColor:
          colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200',
        borderBottomWidth: '1px',
      },
    }),
  },
}

export default Table
