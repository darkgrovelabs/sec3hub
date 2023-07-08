'use client'

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Stack,
  Text,
  useColorMode,
} from '@/chakra/components'
import { BoxIcon, Building2, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import logo from 'public/images/logo.webp'
import SidebarLink from './SidebarLink'

type SidebarContentProps = {
  mini?: boolean
}

export default function SidebarContent(props: SidebarContentProps) {
  const { mini = false } = props

  if (mini) {
    return (
      <Stack direction='column' gap={2}>
        <SidebarLink
          onlyIcon
          route='/companies'
          label='Audit Companies'
          icon={Building2}
        />
        <SidebarLink
          onlyIcon
          route='/products'
          label='Products'
          icon={BoxIcon}
        />
      </Stack>
    )
  }

  return (
    <>
      <Flex h={'100%'} direction='column' justifyContent={'space-between'}>
        <Box flex='1'>
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

          <Stack direction='column' gap={2}>
            <SidebarLink
              route='/companies'
              label='Audit Companies'
              icon={Building2}
            />
            <SidebarLink route='/products' label='Products' icon={BoxIcon} />
          </Stack>
        </Box>

        <Box>
          <ToggleColorMode />
        </Box>
      </Flex>
    </>
  )
}

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Center>
      <Button
        onClick={toggleColorMode}
        variant={'outline'}
        leftIcon={colorMode === 'dark' ? <Sun /> : <Moon />}
      >
        {colorMode === 'dark' ? 'Turn on lights' : 'Turn off lights'}
      </Button>
    </Center>
  )
}
