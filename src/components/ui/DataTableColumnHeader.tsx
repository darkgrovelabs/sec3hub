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
}

export default function DataTableColumnHeader<TData, TValue>(
  props: DataTableColumnHeaderProps<TData, TValue>
) {
  const { column, title, isNumeric = false, className } = props

  if (!column.getCanSort()) {
    return <Th isNumeric={isNumeric}>{title}</Th>
  }

  return (
    <Th>
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
              icon={<ArrowUpNarrowWide size={18} />}
              onClick={() => column.toggleSorting(false)}
            >
              Asc
            </MenuItem>
            <MenuItem
              icon={<ArrowDownNarrowWide size={18} />}
              onClick={() => column.toggleSorting(true)}
            >
              Desc
            </MenuItem>
            <MenuDivider />
            <MenuItem
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
