'use client'

import { Avatar, Box, Flex, Link, Tag, Td, Text } from '@/chakra/components'
import { createColumnHelper } from '@tanstack/react-table'
import { CheckIcon, XIcon } from 'lucide-react'

import UpVoteButton from '@/components/UpVoteButton'
import DataTableColumnHeader from '@/components/table/DataTableColumnHeader'
import { VOTE_SIGN_MESSAGE } from '../api'
import { TResource } from '../types'

const columnHelper = createColumnHelper<TResource>()

const columnHeaderNames: { [key: string]: string } = {
  name: 'Name',
  description: 'Description',
  categories: 'Categories',
  up_votes: 'Votes',
}

const columns = [
  columnHelper.accessor('up_votes', {
    cell: ({ row, getValue }) => {
      return (
        <Td className='td-no-padding-aside'>
          <UpVoteButton
            id={row.original.id}
            votes={getValue()}
            message={VOTE_SIGN_MESSAGE}
            type='resource'
          />
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['up_votes']}
        className='td-no-padding-aside'
      />
    ),
    enableSorting: true,
  }),
  columnHelper.accessor('name', {
    cell: ({ row, getValue }) => {
      return (
        <Td whiteSpace={'normal'} minW={'md'}>
          <Flex align={'center'} gap={3}>
            <Avatar
              size={'md'}
              name={getValue()}
              src={row.original.logo_url}
              bg={'primary.400'}
              color='white'
            />
            <Box>
              <Link color='blue.300' href={row.original.link} isExternal>
                <Text fontWeight='bold' lineHeight={'tall'}>
                  {getValue()}
                </Text>
              </Link>
              <Text fontSize={'sm'} textOverflow={'ellipsis'} noOfLines={2}>
                {row.original.description}
              </Text>
            </Box>
          </Flex>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['name']}
      />
    ),
    enableSorting: true,
  }),
  columnHelper.accessor('categories', {
    cell: ({ row, getValue }) => {
      const categories = getValue().map((category) => {
        return (
          <Tag size={{ base: 'sm', xl: 'md' }} key={category}>
            {category}
          </Tag>
        )
      })
      return (
        <Td minWidth={'xs'} maxW={'md'}>
          <Flex flexWrap={'wrap'} align={'center'} gap={1}>
            {categories}
          </Flex>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['categories']}
      />
    ),
    enableSorting: false,
  }),
]

export { columnHeaderNames, columns }
