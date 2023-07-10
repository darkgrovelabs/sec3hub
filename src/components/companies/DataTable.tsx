'use client'

import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '@/chakra/components'
import { getCompanies } from '@/lib/companies'
import { TCompany, TResultGetCompany } from '@/lib/companies/types'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  ColumnDef,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Search, XCircleIcon } from 'lucide-react'
import { Fragment, useMemo, useState } from 'react'
import DataTablePagination from '../ui/DataTablePagination'
import DataTableViewOptions from '../ui/DataTableViewOptions'
import useDebounce from '@/hooks/useDebounce'

export type DataTableProps = {
  initialData: TCompany[]
  initialPageCount: number
  columnHeaderNames: Record<string, string>
  columns: ColumnDef<TCompany, any>[]
}

export default function DataTable({
  initialData,
  columnHeaderNames,
  initialPageCount,
  columns,
}: DataTableProps) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'up_votes', desc: false },
  ])
  const [keyword, setKeyword] = useState<string>('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const debouncecKeyword = useDebounce(keyword, 500)

  const resetFilters = () => {
    setKeyword('')
  }

  const { order, sort } = useMemo(() => {
    if (!sorting.length) return { order: 'asc', sort: 'id' }
    return { order: sorting[0].desc ? 'desc' : 'asc', sort: sorting[0].id }
  }, [sorting])

  const query = useQuery<TResultGetCompany>({
    queryKey: [
      'companies',
      pagination.pageIndex,
      pagination.pageSize,
      order,
      sort,
      debouncecKeyword,
    ],
    queryFn: () =>
      getCompanies({
        page: pagination.pageIndex,
        limit: pagination.pageSize,
        order,
        sort,
        keyword: debouncecKeyword,
      }),
    initialData: {
      data: initialData,
      pageCount: initialPageCount,
      rowCount: 0,
    },

    keepPreviousData: true,
  })

  const table = useReactTable({
    data: query.data.data,
    columns,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    pageCount: query.data.pageCount,
    state: {
      pagination,
      columnVisibility,
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
  })

  return (
    <>
      <Flex
        align={{ base: 'start', md: 'center' }}
        gap={2}
        mb={6}
        flexWrap={'wrap'}
        // flexDir={{ base: 'column', md: 'row' }}
      >
        <Box w={{ base: '100%', md: 'md' }}>
          <InputGroup>
            <InputLeftElement>
              <Icon as={Search} />
            </InputLeftElement>

            <Input
              borderRadius={'lg'}
              placeholder={
                'Search by Company name / type / services / fees ...'
              }
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </InputGroup>
        </Box>

        {debouncecKeyword && (
          <Box>
            <Button
              colorScheme='primary'
              onClick={resetFilters}
              variant={'outline'}
              rightIcon={<XCircleIcon size={17} />}
            >
              Reset
            </Button>
          </Box>
        )}

        <Spacer />
        <DataTableViewOptions
          columnHeaderNames={columnHeaderNames}
          table={table}
        />
      </Flex>

      <TableContainer mb={6}>
        <Table variant='simple' size={{ base: 'sm', xl: 'md' }}>
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

          {query.isFetching && (
            <Tbody>
              {Array.from({ length: pagination.pageSize }, Math.random).map(
                (_, i) => (
                  <Tr key={i}>
                    <Td px={0} py={4} colSpan={columns.length}>
                      <Skeleton border={'0'} h='3em'></Skeleton>
                    </Td>
                  </Tr>
                )
              )}
            </Tbody>
          )}
          {!query.isFetching && (
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
          )}
        </Table>
      </TableContainer>

      <DataTablePagination table={table} />
    </>
  )
}
