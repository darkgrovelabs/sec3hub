import { StyleConfig } from '@chakra-ui/react'
import { theme } from '@chakra-ui/react'

const Button: StyleConfig = {
  variants: {
    gradient: (props) => ({
      ...theme.components.Button.variants?.solid(props),
      fontWeight: 700,
      bgGradient: 'linear(to-r, primary.300, red.800)',
      color: 'white',
      _hover: {
        bgGradient: 'linear(to-r, primary.400, red.900)',
      },
      _focus: {
        bgGradient: 'linear(to-r, primary.400, red.900)',
      },
      _active: {
        bgGradient: 'linear(to-r, primary.400, red.900)',
      },
    }),
  },
}

export default Button
