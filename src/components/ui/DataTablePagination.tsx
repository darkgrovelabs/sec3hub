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
      <Flex justifyContent={'space-between'} align={'center'}>
        <Box flex={1}>
          <DataTableRowsSelect table={table} />
        </Box>

        <Box>
          <Flex gap={2} align='center'>
            <Button
              size={'sm'}
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft />
            </Button>
            <Text>
              Page {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </Text>
            <Button
              size={'sm'}
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
