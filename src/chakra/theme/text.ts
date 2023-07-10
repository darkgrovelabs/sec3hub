import { StyleConfig } from '@chakra-ui/theme-tools'

const Text: StyleConfig = {
  variants: {
    muted: ({ colorMode }) => ({
      // color: colorMode === 'light' ? 'blackAlpha.700' : 'whiteAlpha.700',
    }),
  },
}

export default Text
