import { StyleConfig } from '@chakra-ui/theme-tools'
import { cssVar } from '@chakra-ui/react'

const $startColor = cssVar('skeleton-start-color')
const $endColor = cssVar('skeleton-end-color')

const Skeleton: StyleConfig = {
  baseStyle: ({ colorMode }) => ({
    borderRadius: 'xl',
    _light: {
      [$startColor.variable]: 'colors.blackAlpha.100',
      [$endColor.variable]: 'colors.blackAlpha.400',
    },
    _dark: {
      [$startColor.variable]: 'colors.whiteAlpha.100',
      [$endColor.variable]: 'colors.whiteAlpha.400',
    },
  }),
}

export default Skeleton
