import { StyleConfig } from '@chakra-ui/react'
import { theme } from '@chakra-ui/react'

const Button: StyleConfig = {
  variants: {
    gradient: (props) => ({
      ...theme.components.Button.variants?.solid(props),
      fontWeight: 700,
      bgGradient: 'linear(to-r, primary.400, red.700)',
      color: 'white',
      _hover: {
        bgGradient: 'linear(to-r, red.400, primary.700)',
      },
      _focus: {
        bgGradient: 'linear(to-r, red.400, primary.700)',
      },
      //   bg: 'primary.500',
      //   _hover: {
      //     bg: 'primary.600',
      //     _disabled: {
      //       bg: 'primary.600',
      //       opacity: 0.4,
      //     },
      //   },
      //   _disabled: {
      //     bg: 'primary.600',
      //     opacity: 0.4,
      //   },
      //   _active: {
      //     bg: 'primary.700',
      //   },
    }),
  },
}

export default Button
