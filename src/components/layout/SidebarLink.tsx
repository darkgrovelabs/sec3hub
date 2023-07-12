'use client'

import {
  Box,
  Flex,
  Icon,
  Text,
  Tooltip,
  useColorMode,
} from '@/chakra/components'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

type SidebarLinkProps = {
  route: string
  label: string
  icon: LucideIcon
  onlyIcon?: boolean
}

export default function SidebarLink(props: SidebarLinkProps) {
  const { route, label, icon, onlyIcon = false } = props

  const { colorMode } = useColorMode()
  const selectedLayoutSegment = useSelectedLayoutSegments()
  const active = `/${selectedLayoutSegment[0]}` === route

  const activeColor = colorMode === 'light' ? 'gray.900' : 'white'
  const inactiveColor =
    colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'
  const activeIconColor = 'primary.300'

  const fontWeight = active ? 800 : 400

  if (onlyIcon) {
    return (
      <Link href={route}>
        <Tooltip
          hasArrow
          placement='right'
          label={
            <Text fontSize={'md'} fontWeight={800}>
              {label}
            </Text>
          }
          borderRadius={'lg'}
        >
          <Icon
            as={icon}
            color={active ? activeIconColor : inactiveColor}
            strokeWidth={active ? '2.25px' : ' 1.50px'}
            fontSize={24}
          />
        </Tooltip>
      </Link>
    )
  }

  return (
    <Link href={route}>
      <Flex align={'center'} gap={1.5} py={1.5}>
        <Icon
          as={icon}
          color={active ? activeIconColor : inactiveColor}
          strokeWidth={active ? '2.25px' : ' 1.50px'}
          fontSize={22}
        />
        <Text
          fontSize={'lg'}
          ml={2}
          color={active ? activeColor : inactiveColor}
          fontWeight={fontWeight}
        >
          {label}
        </Text>
        {active && (
          <Box
            position={'absolute'}
            right={0}
            h={6}
            w={1}
            bg={activeIconColor}
            borderRadius='5px'
          />
        )}
      </Flex>
    </Link>
  )
}
