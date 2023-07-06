import { StyleConfig } from '@chakra-ui/theme-tools'

const Menu: StyleConfig = {
  baseStyle: ({ colorMode }) => ({
    list: {
      bg: colorMode === 'light' ? 'white' : '#1E1E20',
      color: colorMode === 'light' ? 'gray.800' : 'white',
      boxShadow: 'lg',
      //   py: '0',
      borderRadius: 'xl',
      borderColor: colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200',
    },
    divider: {
      my: 0,
    },
    item: {
      bg: colorMode === 'light' ? 'white' : '#1E1E20',
      _hover: {
        bg: colorMode === 'light' ? 'blackAlpha.100' : 'whiteAlpha.100',
      },
    },
  }),
}

export default Menu
