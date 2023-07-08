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
import SidebarContent from './SidebarContent'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Card
      maxH={'calc(100vh - 1em)'}
      width={!isSidebarOpen ? '2.25rem' : '15rem'}
      position={'sticky'}
      top={2}
      mx={2}
      p={isSidebarOpen ? 4 : 1.5}
      display={{ base: 'none', xl: 'block' }}
      // transition={'0.4s linear'}
    >
      <Box position={'absolute'} top={1} right={1}>
        <Tooltip
          hasArrow
          label={!isSidebarOpen ? 'Show menu' : 'Hide menu'}
          borderRadius={'lg'}
          placement='right'
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
      {isSidebarOpen && <SidebarContent />}

      {!isSidebarOpen && (
        <Box mt={12}>
          <SidebarContent mini />
        </Box>
      )}
    </Card>
  )
}
