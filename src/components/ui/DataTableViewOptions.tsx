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
import { columnHeaderNames } from '../companies/CompaniesTable'

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

export default function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant={'outline'}
        rightIcon={<SlidersHorizontalIcon size={16} />}
      >
        View
      </MenuButton>
      <MenuList minW={'0'}>
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
                {column.getIsVisible() ? <Check size={18} /> : undefined}
              </MenuItem>
            )
          })}
      </MenuList>
    </Menu>
  )
}
