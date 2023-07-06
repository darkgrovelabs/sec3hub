'use client'

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useColorMode,
} from '@/chakra/components'
import { BoxIcon, Building2, Moon, Redo2, Sun, Undo2 } from 'lucide-react'
import Image from 'next/image'
import logo from 'public/images/logo.webp'
import Card from '../ui/Card'
import SidebarLink from './SidebarLink'
import { useState } from 'react'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Card
      maxH={'calc(100vh - 1em)'}
      width={!isSidebarOpen ? '2.25rem' : '15rem'}
      position={'sticky'}
      top={2}
      mx={2}
      transition={'0.4s linear'}
    >
      <Flex h={'100%'} direction='column' justifyContent={'space-between'}>
        <Box position={'absolute'} top={1} right={1}>
          <Tooltip
            hasArrow
            label={!isSidebarOpen ? 'Show menu' : 'Hide menu'}
            borderRadius={'lg'}
          >
            <IconButton
              variant={'ghost'}
              size={'xs'}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label='hide menu'
              icon={!isSidebarOpen ? <Redo2 size={22} /> : <Undo2 size={22} />}
            ></IconButton>
          </Tooltip>
        </Box>

        {isSidebarOpen && (
          <>
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
                <Button
                  w='100%'
                  colorScheme='teal'
                  size={'sm'}
                  fontWeight={700}
                >
                  Connect your wallet
                </Button>
              </Box>

              <Stack direction='column' gap={2}>
                <SidebarLink
                  route='/companies'
                  label='Audit Companies'
                  icon={Building2}
                />
                <SidebarLink
                  route='/products'
                  label='Products'
                  icon={BoxIcon}
                />
              </Stack>
            </Box>

            <Box>
              <ToggleColorMode />
            </Box>
          </>
        )}
      </Flex>
    </Card>
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
