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
        <MenuButton
          as={Button}
          variant={'outline'}
          rightIcon={<ChevronDownIcon />}
        >
          Show by {pageSize}
        </MenuButton>
        <MenuList zIndex={'dropdown'} minW={'0'}>
          {[5, 10, 20, 30, 40, 50].map((size) => {
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
