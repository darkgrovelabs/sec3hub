'use client'

import { Box, BoxProps, useColorModeValue } from '@/chakra/components'

export interface CardProps extends BoxProps {
  children?: React.ReactNode
}

export default function Card(props: CardProps) {
  const { children, ...rest } = props

  return (
    <Box
      backgroundClip='border-box'
      wordBreak={'break-word'}
      position={'relative'}
      borderRadius={'xl'}
      p={4}
      bg={useColorModeValue('#F6F6F7', '#252529')}
      {...rest}
    >
      {children}
    </Box>
  )
}
