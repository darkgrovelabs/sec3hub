'use client'

import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@/chakra/components'
import { Table, flexRender } from '@tanstack/react-table'
import {
  Check,
  ChevronDown,
  SlidersHorizontalIcon,
  ViewIcon,
} from 'lucide-react'

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
  columnHeaderNames: Record<string, string>
}

export default function DataTableViewOptions<TData>({
  table,
  columnHeaderNames,
}: DataTableViewOptionsProps<TData>) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant={'outline'}
        rightIcon={<SlidersHorizontalIcon size={17} />}
      >
        View
      </MenuButton>
      <MenuList zIndex={'dropdown'} minW={'0'}>
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column) => {
            return (
              <MenuItem
                gap={4}
                key={column.id}
                onClick={() => column.toggleVisibility(!column.getIsVisible())}
              >
                {columnHeaderNames[column.id]}
                <Spacer />
                {column.getIsVisible() ? <Check size={17} /> : undefined}
              </MenuItem>
            )
          })}
      </MenuList>
    </Menu>
  )
}
