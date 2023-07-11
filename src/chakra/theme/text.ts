import { StyleConfig } from '@chakra-ui/theme-tools'

const Text: StyleConfig = {
  variants: {
    muted: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600',
    }),
  },
}

export default Text
