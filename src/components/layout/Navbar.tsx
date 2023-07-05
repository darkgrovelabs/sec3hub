'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Portal,
  useColorMode,
  useColorModeValue,
} from '@/chakra/components'
import {
  usePathname,
  useSearchParams,
  useSelectedLayoutSegments,
} from 'next/navigation'

import { IconButton } from '@chakra-ui/react'
import { Moon, Search, Sun } from 'lucide-react'
import Card from '../ui/Card'

export default function Navbar() {
  const pathname = usePathname()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box
        zIndex={1}
        as='nav'
        position={'sticky'}
        top={2}
        backdropFilter={'blur(15px)'}
        backgroundPosition='center'
        backgroundSize='cover'
        borderRadius='xl'
        transitionDelay='0s, 0s, 0s, 0s'
        transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
        transition-property='box-shadow, background-color, filter, border'
        transitionTimingFunction='linear, linear, linear, linear'
        minH='80px'
        padding={2}
        mx={2}
        display={'flex'}
        alignContent={'center'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box>
          <NavbarTitle />
        </Box>

        <Card borderRadius={'3xl'} p={2}>
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

            <IconButton
              variant={'ghost'}
              size={'sm'}
              aria-label='Dark Theme'
              onClick={toggleColorMode}
              icon={colorMode === 'dark' ? <Sun /> : <Moon />}
            />
          </Flex>
        </Card>
      </Box>
    </>
  )
}

const titles: { [key: string]: string } = {
  companies: 'Audit Companies',
  products: 'Products',
}

function NavbarTitle() {
  const selectedLayoutSegment = useSelectedLayoutSegments()

  return <Heading fontSize={'3xl'}>{titles[selectedLayoutSegment[0]]}</Heading>
}
