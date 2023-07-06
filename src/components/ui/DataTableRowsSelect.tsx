'use client'

import {
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Spacer,
} from '@/chakra/components'
import { Table } from '@tanstack/react-table'
import { Check, ChevronDownIcon } from 'lucide-react'

interface DataTableRowsSelectProps<TData> {
  table: Table<TData>
}

export default function DataTableRowsSelect<TData>(
  props: DataTableRowsSelectProps<TData>
) {
  const { table } = props
  const pageSize = table.getState().pagination.pageSize

  return (
    <>
      <Menu matchWidth>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size={'sm'}>
          Show by {pageSize}
        </MenuButton>
        <MenuList minW={'0'}>
          {[10, 20, 30, 40, 50].map((size) => {
            return (
              <MenuItem
                key={size}
                onClick={() => table.setPageSize(Number(size))}
              >
                {size}
                <Spacer />
                {size === pageSize ? <Check size={18} /> : undefined}
              </MenuItem>
            )
          })}
        </MenuList>
      </Menu>
    </>
  )
}
