'use client'

import { Box, Button, Flex, Text } from '@/chakra/components'
import { Table } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import DataTableRowsSelect from './DataTableRowsSelect'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export default function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <>
      <Flex
        justifyContent={{ base: 'initial', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        flexDir={{ base: 'column', md: 'row' }}
        gap={4}
      >
        <Box flex={1}>
          <DataTableRowsSelect table={table} />
        </Box>

        <Box>
          <Flex gap={4} align='center'>
            <Button
              variant={'outline'}
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft />
            </Button>
            <Text fontWeight={700}>
              Page {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </Text>
            <Button
              variant={'outline'}
              onClick={() => table.nextPage()}
              isDisabled={!table.getCanNextPage()}
            >
              <ChevronRight />
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
