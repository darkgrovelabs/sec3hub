'use client'

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@/chakra/components'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import logo from 'public/images/logo.webp'
import { Menu, Search } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import SidebarContent from './SidebarContent'

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
        borderRadius='xl'
        transitionDelay='0s, 0s, 0s, 0s'
        transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
        transition-property='box-shadow, background-color, filter, border'
        transitionTimingFunction='linear, linear, linear, linear'
        display={'flex'}
        alignContent={'center'}
        alignItems={'center'}
        // justifyContent={'space-between'}
      >
        <Flex
          align={'center'}
          display={{ base: 'flex', xl: 'none' }}
          gap={2}
          mr={2}
        >
          <MobileMenu />

          <Image
            src={logo.src}
            width={35}
            height={35}
            alt='Logo SEC3HUB'
          ></Image>
        </Flex>

        <Box>
          <NavbarTitle />
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
  companies: 'Audit Companies',
  products: 'Products',
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
        icon={<Menu size={20} />}
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
