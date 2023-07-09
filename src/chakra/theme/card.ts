import { StyleConfig } from '@chakra-ui/theme-tools'

const Card: StyleConfig = {
  variants: {
    elevated: ({ colorMode }) => ({
      container: {
        position: 'relative',
        bg: colorMode === 'light' ? '#fff' : '#0E0E0E',
        borderRadius: 'xl',
        wordBreak: 'break-word',
      },
      body: {
        p: 4,
      },
    }),
  },
}

export default Card
