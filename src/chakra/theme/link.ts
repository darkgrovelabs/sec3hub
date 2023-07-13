import { StyleConfig } from '@chakra-ui/theme-tools'

const Link: StyleConfig = {
  variants: {
    muted: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600',
    }),
  },
}

export default Link
