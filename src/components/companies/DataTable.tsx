'use client'

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '@/chakra/components'
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Fragment, useState } from 'react'
import DataTablePagination from '../ui/DataTablePagination'

export type DataTableProps<Data extends object> = {
  data: Data[]
  columns: ColumnDef<Data, any>[]
}

export default function DataTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <>
      <TableContainer mb={4}>
        <Table variant='simple'>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Fragment key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Fragment>
                  )
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Tr key={row.id} pb={4}>
                  {row.getVisibleCells().map((cell) => (
                    <Fragment key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Fragment>
                  ))}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={columns.length}>
                  <Text textAlign={'center'}> No results.</Text>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <DataTablePagination table={table} />
    </>
  )
}
