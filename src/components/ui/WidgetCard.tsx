'use client'

import { Box, Flex, Icon, Text, useColorMode } from '@/chakra/components'
import Card from './Card'
import { LucideIcon } from 'lucide-react'

type WidgetCardProps = {
  label: string
  value: number | string
  icon: LucideIcon
}

export default function WidgetCard(props: WidgetCardProps) {
  const { label, value, icon } = props
  const { colorMode } = useColorMode()

  const labelColor = colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'
  const iconBgColor = colorMode === 'light' ? 'teal.500' : 'teal.200'
  const iconColor = colorMode === 'light' ? 'white' : 'gray.800'

  return (
    <>
      <Card display={'flex'} alignContent={'center'}>
        <Flex align={'center'} gap={4}>
          <Flex
            borderRadius={'3xl'}
            p={3}
            alignContent={'center'}
            bgColor={iconBgColor}
          >
            <Icon color={iconColor} fontSize={28} as={icon}></Icon>
          </Flex>

          <Box>
            <Text
              lineHeight={'shorter'}
              fontSize={'sm'}
              textTransform={'uppercase'}
              color={labelColor}
            >
              {label}
            </Text>
            <Text lineHeight={'shorter'} fontSize={'xl'} fontWeight={800}>
              {value}
            </Text>
          </Box>
        </Flex>
      </Card>
    </>
  )
}
