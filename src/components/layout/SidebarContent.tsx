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
import {
  BoxIcon,
  LifeBuoyIcon,
  Moon,
  SkullIcon,
  Sun,
  UsersIcon,
} from 'lucide-react'
import Image from 'next/image'
import logo from 'public/images/logo.webp'
import { version } from '../../../package.json'
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
          icon={UsersIcon}
        />

        <SidebarLink onlyIcon route='/rekts' label='Rekts' icon={SkullIcon} />
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
              v{version}
            </Text>
          </Center>

          <Divider my={4} />

          <Box mb={6}>
            <ConnectWallet />
          </Box>

          <Stack direction='column' gap={2}>
            <SidebarLink route='/auditors' label='Auditors' icon={UsersIcon} />
            <SidebarLink route='/rekts' label='Rekts' icon={SkullIcon} />
            <SidebarLink route='/products' label='Products' icon={BoxIcon} />
            <SidebarLink
              route='/resources'
              label='Resources'
              icon={LifeBuoyIcon}
            />
          </Stack>
        </Box>

        <Box>
          {/* <VisitLab /> */}
          <ToggleColorMode />
        </Box>
      </Flex>
    </>
  )
}

// function VisitLab() {
//   return (
//     <Link
//       href='https://github.com/darkgrovelabs/sec3hub'
//       isExternal
//       _hover={{ textDecoration: 'none' }}
//     >
//       <Flex align={'center'} gap={1.5} py={1.5}>
//         <Icon as={GithubIcon} strokeWidth={'1.50px'} fontSize={22} />
//         <Text fontSize={'lg'} ml={2}>
//           Visit the lab
//         </Text>
//       </Flex>
//     </Link>
//   )
// }

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
