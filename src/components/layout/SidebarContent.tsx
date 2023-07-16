'use client'

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Stack,
  Text,
  useColorMode,
} from '@/chakra/components'
import {
  BoxIcon,
  FlameIcon,
  GithubIcon,
  LifeBuoyIcon,
  LightbulbIcon,
  Moon,
  SkullIcon,
  Sun,
  UserSquare2,
  UsersIcon,
} from 'lucide-react'
import Image from 'next/image'
import logo from 'public/images/logo.webp'
import packageInfo from '../../../package.json'
import ConnectWallet from './ConnectWallet'
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
          route='/auditors'
          label='Auditors'
          icon={UserSquare2}
        />

        <SidebarLink
          onlyIcon
          route='/incidents'
          label='Incidents'
          icon={SkullIcon}
        />
        <SidebarLink
          onlyIcon
          route='/products'
          label='Products'
          icon={BoxIcon}
        />
        <SidebarLink
          onlyIcon
          route='/resources'
          label='Resources'
          icon={LifeBuoyIcon}
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
          <Center flexDir='column'>
            <Text fontSize={'2xl'} fontWeight={500} lineHeight={'short'}>
              <Text as='span' fontWeight={800}>
                SEC3
              </Text>{' '}
              <Text as='span' color='red.500'>
                HUB
              </Text>
            </Text>
            <Text variant={'muted'} fontSize={'xs'}>
              v{packageInfo.version}
            </Text>
          </Center>

          <Divider my={4} />

          <Box mb={6}>
            <ConnectWallet />
          </Box>

          <Stack direction='column' gap={2}>
            <SidebarLink
              route='/auditors'
              label='Auditors'
              icon={UserSquare2}
            />
            <SidebarLink
              route='/incidents'
              label='Incidents'
              icon={SkullIcon}
            />
            <SidebarLink route='/products' label='Products' icon={BoxIcon} />
            <SidebarLink
              route='/resources'
              label='Resources'
              icon={LifeBuoyIcon}
            />
          </Stack>
        </Box>

        <Divider my={4} />
        <Box>
          <RequestFeature />
          <VisitLab />
          <ToggleColorMode />
        </Box>
      </Flex>
    </>
  )
}

function VisitLab() {
  const { colorMode } = useColorMode()
  return (
    <Button
      as='a'
      href='https://github.com/darkgrovelabs'
      target='_blank'
      justifyContent={'flex-start'}
      color={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'}
      w='100%'
      variant={'ghost'}
      size='sm'
      leftIcon={<Icon as={GithubIcon} />}
    >
      Visit the lab
    </Button>
  )
}

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Button
        justifyContent={'flex-start'}
        mb={1}
        w='100%'
        color={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'}
        onClick={toggleColorMode}
        variant={'ghost'}
        size='sm'
        leftIcon={colorMode === 'dark' ? <Icon as={Sun} /> : <Icon as={Moon} />}
      >
        {colorMode === 'dark' ? 'Turn on lights' : 'Turn off lights'}
      </Button>
    </>
  )
}

function RequestFeature() {
  const { colorMode } = useColorMode()
  return (
    <Button
      as='a'
      href='https://github.com/orgs/darkgrovelabs/discussions/new?category=new-ideas-feature-request'
      target='_blank'
      justifyContent={'flex-start'}
      color={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'}
      w='100%'
      variant={'ghost'}
      size='sm'
      leftIcon={<Icon as={LightbulbIcon} />}
    >
      Request feature
    </Button>
  )
}
