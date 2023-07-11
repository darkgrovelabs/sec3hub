'use client'

import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Text,
} from '@/chakra/components'
import { createColumnHelper } from '@tanstack/react-table'
import { SearchCheckIcon } from 'lucide-react'

import DataTableColumnHeader from '@/components/table/DataTableColumnHeader'

import DataTableStickyColumn from '@/components/table/DataTableStickyColumn'
import formatCurrency from '@/utils/formatCurrency'
import truncateString from '@/utils/truncateString'
import dayjs from 'dayjs'
import { TRekt } from '../type'

const columnHelper = createColumnHelper<TRekt>()

const columnHeaderNames: { [key: string]: string } = {
  name: 'Name',
  description: 'Description',
  is_opensource: 'Open Source',
  is_commercial: 'Commercial',
  audited_by: 'Auditors',
  sources: 'Sources',
  links: 'Links',
  damage: 'Funds lost',
  date: 'Date',
  category: 'Type',
  txs: 'Proofs on chain',
}

const columns = [
  columnHelper.accessor('name', {
    cell: ({ row, getValue }) => {
      return (
        <DataTableStickyColumn className='td-no-padding-aside'>
          <Flex align={'start'} gap={3}>
            <Avatar
              size={'sm'}
              name={getValue()}
              src={row.original.logo_url}
              bg={'primary.400'}
              color='white'
            />
            <Box>
              <Text fontWeight='bold' lineHeight={'tall'}>
                {getValue()}
              </Text>
              <Link href={row.original.website} isExternal>
                <Text fontSize={'sm'}>{row.original.website}</Text>
              </Link>
            </Box>
          </Flex>
        </DataTableStickyColumn>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['name']}
        className='td-no-padding-aside'
        sticky
      />
    ),
    enableSorting: true,
  }),

  columnHelper.accessor('damage', {
    cell: ({ row, getValue }) => {
      return (
        <Td isNumeric fontWeight={800}>
          ${formatCurrency(getValue())}
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['damage']}
        isNumeric
      />
    ),
    enableSorting: true,
  }),
  columnHelper.accessor('category', {
    cell: ({ row, getValue }) => {
      return <Td>{getValue()}</Td>
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['category']}
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor('date', {
    cell: ({ row, getValue }) => {
      return <Td>{dayjs(getValue()).format('YYYY-MM-DD')}</Td>
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['date']}
      />
    ),
    enableSorting: true,
  }),
  columnHelper.accessor('audited_by', {
    cell: ({ row, getValue }) => {
      const auditedBy = getValue()
      if (auditedBy.length === 0) return <Td></Td>

      return (
        <Td>
          {row.original.audited_by.length > 0 && (
            <Text as='span'>{row.original.audited_by.join(', ')}</Text>
          )}{' '}
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['audited_by']}
      />
    ),
    // enableSorting: true,
  }),
  columnHelper.accessor('txs', {
    cell: ({ row, getValue }) => {
      return (
        <Td>
          <Text as='span' lineHeight={'tall'} fontWeight={600}>
            {row.original.chain}
          </Text>
          <Flex gap={2}>
            {getValue().map((tx) => {
              const hash = tx.split('/').pop()

              if (!hash) return null

              return (
                <Flex key={tx}>
                  <Link href={tx} isExternal>
                    <Text fontSize='sm' as='span' fontWeight={300}>
                      {truncateString(hash, 2, '')}
                    </Text>
                  </Link>
                </Flex>
              )
            })}
          </Flex>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={columnHeaderNames['txs']} />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor('sources', {
    cell: ({ row, getValue }) => {
      const sources = getValue()

      if (sources.length === 0) return <Td></Td>

      return (
        <Td textAlign={'center'}>
          <Menu>
            <MenuButton
              variant={'ghost'}
              as={IconButton}
              icon={<SearchCheckIcon />}
            ></MenuButton>
            <MenuList>
              {sources.map((source, index) => {
                if (!source) return null
                return (
                  <Link
                    _hover={{ textDecoration: 'none' }}
                    href={source}
                    isExternal
                    key={source}
                  >
                    <MenuItem flexDir={'column'} alignItems={'start'}>
                      <Text as='span'>Source {index + 1}</Text>
                      <Text maxW={'sm'} fontSize={'xs'} as='span'>
                        {source.slice(0, 30)}...
                      </Text>
                    </MenuItem>
                  </Link>
                )
              })}
            </MenuList>
          </Menu>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['sources']}
      />
    ),
    enableSorting: false,
  }),
]

export { columnHeaderNames, columns }
