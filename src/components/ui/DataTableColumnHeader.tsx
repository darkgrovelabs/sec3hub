'use client'

import {
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Th,
  useColorModeValue,
} from '@/chakra/components'
import { Column } from '@tanstack/react-table'
import {
  ArrowDownNarrowWide,
  ArrowDownUp,
  ArrowUpNarrowWide,
  EyeOff,
} from 'lucide-react'

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
  isNumeric?: boolean
  sticky?: boolean
}

export default function DataTableColumnHeader<TData, TValue>(
  props: DataTableColumnHeaderProps<TData, TValue>
) {
  const { column, title, isNumeric = false, sticky = false, className } = props
  const bgColor = useColorModeValue('#fff', '#0E0E0E')

  if (!column.getCanSort()) {
    return (
      <Th
        position={sticky ? 'sticky' : 'relative'}
        bg={sticky ? bgColor : 'auto'}
        zIndex={sticky ? 1 : 0}
        left={0}
        isNumeric={isNumeric}
        className={className}
      >
        {title}
      </Th>
    )
  }

  return (
    <Th
      position={sticky ? 'sticky' : 'initial'}
      bg={sticky ? bgColor : 'auto'}
      left={0}
      zIndex={sticky ? 1 : 0}
      className={className}
    >
      <Flex
        justify={isNumeric ? 'flex-end' : 'flex-start'}
        align={'center'}
        gap={1}
      >
        {title}
        <Menu>
          <MenuButton variant={'ghost'} size={'xs'} as={Button}>
            {column.getIsSorted() === 'desc' ? (
              <ArrowDownNarrowWide size={18} />
            ) : column.getIsSorted() === 'asc' ? (
              <ArrowUpNarrowWide size={18} />
            ) : (
              <ArrowDownUp size={18} />
            )}
          </MenuButton>
          <MenuList minW='0' w={'100px'}>
            <MenuItem
              fontSize={'sm'}
              icon={<ArrowUpNarrowWide size={18} />}
              onClick={() => column.toggleSorting(false)}
            >
              Asc
            </MenuItem>
            <MenuItem
              fontSize={'sm'}
              icon={<ArrowDownNarrowWide size={18} />}
              onClick={() => column.toggleSorting(true)}
            >
              Desc
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize={'sm'}
              icon={<EyeOff size={18} />}
              onClick={() => column.toggleVisibility(false)}
            >
              Hide
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Th>
  )
}
