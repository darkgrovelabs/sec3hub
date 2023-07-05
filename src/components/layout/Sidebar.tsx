'use client'

import { Box, Button, Center, Divider, Stack, Text } from '@/chakra/components'
import { BoxIcon, Building2 } from 'lucide-react'
import Image from 'next/image'
import logo from 'public/images/logo.webp'
import Card from '../ui/Card'
import SidebarLink from './SidebarLink'

export default function Sidebar() {
  return (
    <Card
      maxH={'calc(100vh - 16px)'}
      width={'15rem'}
      position={'sticky'}
      top={2}
      mx={2}
    >
      <Center mb={2}>
        <Image
          src={logo.src}
          width={125}
          height={125}
          alt='Logo SEC3HUB'
        ></Image>
      </Center>
      <Center>
        <Text fontSize={'2xl'} fontWeight={500}>
          <Text as='span' fontWeight={800}>
            SEC3
          </Text>{' '}
          HUB
        </Text>
      </Center>

      <Divider my={4} />

      <Box mb={8}>
        <Button w='100%' colorScheme='teal' size={'sm'} fontWeight={700}>
          Connect your wallet
        </Button>
      </Box>

      <Stack direction='column' gap={4}>
        <SidebarLink
          route='/companies'
          label='Audit Companies'
          icon={Building2}
        />
        <SidebarLink route='/products' label='Products' icon={BoxIcon} />
      </Stack>
    </Card>
  )
}
