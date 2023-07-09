'use client'

import { Box, Card, CardBody, IconButton, Tooltip } from '@/chakra/components'
import { Redo2, Undo2 } from 'lucide-react'

import { useState } from 'react'
import SidebarContent from './SidebarContent'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Card
      h={'calc(100vh - 1em)'}
      width={!isSidebarOpen ? '2.25rem' : '15rem'}
      position={'sticky'}
      top={2}
      mx={2}
      display={{ base: 'none', xl: 'block' }}
      // transition={'0.4s linear'}
    >
      <CardBody h={'100%'} p={isSidebarOpen ? 4 : 1.5}>
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
      </CardBody>
    </Card>
  )
}
