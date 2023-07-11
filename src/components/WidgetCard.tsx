'use client'

import {
  Box,
  Flex,
  Icon,
  Card,
  Text,
  useColorMode,
  CardBody,
} from '@/chakra/components'
import { LucideIcon } from 'lucide-react'

type WidgetCardProps = {
  label: string
  value: number | string
  icon: LucideIcon
}

export default function WidgetCard(props: WidgetCardProps) {
  const { label, value, icon } = props
  const { colorMode } = useColorMode()

  const iconBgColor = colorMode === 'light' ? 'blue.400' : 'blue.100'
  const iconColor = colorMode === 'light' ? 'white' : 'gray.900'

  return (
    <>
      <Card>
        <CardBody display={'flex'} alignContent={'center'}>
          <Flex align={'center'} gap={4}>
            {/* <Flex
              borderRadius={'3xl'}
              p={3}
              alignContent={'center'}
              bgColor={iconBgColor}
            >
              <Icon color={iconColor} fontSize={28} as={icon}></Icon>
            </Flex> 
  */}
            <Flex
              borderRadius={'3xl'}
              h={14}
              w={14}
              bgColor={iconBgColor}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Icon color={iconColor} fontSize={28} as={icon}></Icon>
            </Flex>

            <Box>
              <Text
                lineHeight={'shorter'}
                fontSize={'sm'}
                textTransform={'uppercase'}
                variant={'muted'}
              >
                {label}
              </Text>
              <Text fontSize={'xl'} fontWeight={800}>
                {value}
              </Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  )
}
