'use client'

import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useDisclosure,
} from '@/chakra/components'
import Image from 'next/image'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import logo from 'public/images/logo.webp'
import { useEffect, useRef } from 'react'
import SidebarContent from './SidebarContent'
import {
  FlagIcon,
  LightbulbIcon,
  ListPlusIcon,
  MenuIcon,
  SmilePlusIcon,
} from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <Box
        zIndex={'sticky'}
        as='nav'
        position={'sticky'}
        top={{ base: 0, xl: 2 }}
        mx={{ base: 0, xl: 3 }}
        px={3}
        minH={{ base: '60px', xl: '70px' }}
        backdropFilter={'blur(20px)'}
        backgroundPosition='center'
        backgroundSize='cover'
        borderRadius={{ base: 'none', xl: 'xl' }}
        transitionDelay='0s, 0s, 0s, 0s'
        transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
        transition-property='box-shadow, background-color, filter, border'
        transitionTimingFunction='linear, linear, linear, linear'
        display={'flex'}
        alignContent={'center'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex align={'center'} gap={2} mr={2}>
          <Box gap={2} display={{ base: 'flex', xl: 'none' }}>
            <MobileMenu />

            <Image
              src={logo.src}
              width={35}
              height={35}
              alt='Logo SEC3HUB'
            ></Image>
          </Box>

          <NavbarTitle />
        </Flex>

        <Box>
          <Menu>
            <MenuButton
              leftIcon={<SmilePlusIcon size={20} />}
              as={Button}
              size={{ base: 'sm', xl: 'md' }}
              variant={'gradient'}
            >
              Share with us
            </MenuButton>

            <MenuList>
              <Link
                href='https://docs.google.com/forms/d/e/1FAIpQLSfpfjwmBrxYIln5rQUAvIRLjNmE7q5weqvoDmcrcxRO2fCfOQ/viewform'
                target='_blank'
              >
                <MenuItem icon={<ListPlusIcon />}>Submit content</MenuItem>
              </Link>
              <Link
                href='https://github.com/orgs/darkgrovelabs/discussions/new/choose'
                target='_blank'
              >
                <MenuItem icon={<LightbulbIcon />}>Request feature</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>

        {/* <Card borderRadius={'3xl'} p={2}>
          <Flex align={'center'} gap={1}>
            <InputGroup>
              <InputLeftElement>
                <Icon as={Search} />
              </InputLeftElement>

              <Input
                variant='search'
                fontSize='sm'
                minW={'15rem'}
                borderRadius={'3xl'}
                placeholder={'Search...'}
              />
            </InputGroup>
          </Flex>
        </Card> */}
      </Box>
    </>
  )
}

const titles: { [key: string]: string } = {
  auditors: 'Audit Buddies',
  products: 'Products',
  rekts: 'Rekts',
  resources: 'Resources',
}

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) onClose()
  }, [pathname])

  return (
    <>
      <IconButton
        onClick={onOpen}
        ref={btnRef}
        size={'sm'}
        variant={'outline'}
        aria-label='Open menu'
        icon={<MenuIcon size={20} />}
      />

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue('#fff', '#0E0E0E')} p={4}>
          <DrawerCloseButton />

          <SidebarContent />
          {/* <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  )
}

function NavbarTitle() {
  const selectedLayoutSegment = useSelectedLayoutSegments()

  return (
    <Heading
      bgGradient='linear(to-r, primary.300, red.800)'
      bgClip='text'
      fontWeight={800}
      fontSize={{ base: '2xl', xl: '3xl' }}
    >
      {titles[selectedLayoutSegment[0]]}
    </Heading>
  )
}
