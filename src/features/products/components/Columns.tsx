'use client'

import {
  Avatar,
  Box,
  Flex,
  Link,
  Stack,
  Tag,
  Td,
  Text,
} from '@/chakra/components'
import { createColumnHelper } from '@tanstack/react-table'
import { CheckIcon, XIcon } from 'lucide-react'

import UpVoteButton from '@/components/UpVoteButton'
import DataTableColumnHeader from '@/components/table/DataTableColumnHeader'
import { VOTE_SIGN_MESSAGE } from '../api'
import { TProduct } from '../types'

const columnHelper = createColumnHelper<TProduct>()

const columnHeaderNames: { [key: string]: string } = {
  name: 'Name',
  description: 'Description',
  is_opensource: 'Open Source',
  is_commercial: 'Commercial',
  up_votes: 'Up Votes',
  links: 'Links',
  start_year: 'Year',
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
      const categories = row.original.categories.map((category) => {
        return (
          <Tag size={'sm'} key={category}>
            {category}
          </Tag>
        )
      })

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
              <Link href={row.original.website} isExternal>
                <Text fontWeight='bold' lineHeight={'tall'}>
                  {getValue()}
                </Text>
              </Link>
              <Flex align={'center'} gap={1}>
                {categories}
              </Flex>
            </Box>
          </Flex>

          <Text
            mt={1.5}
            fontSize={'sm'}
            textOverflow={'ellipsis'}
            noOfLines={2}
          >
            {row.original.description}
          </Text>
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
  // columnHelper.accessor('description', {
  //   cell: ({ row, getValue }) => {
  //     return (
  //       <Td
  //         textOverflow={'ellipsis'}
  //         whiteSpace={{ base: 'inherit', sm: 'inherit', md: 'normal' }}
  //         maxW={{ base: 'xs', md: 'md' }}
  //         fontSize={'sm'}
  //         overflow={'hidden'}
  //         className='td-no-padding-aside'
  //       >
  //         {getValue()}
  //       </Td>
  //     )
  //   },
  //   header: ({ column }) => (
  //     <DataTableColumnHeader
  //       column={column}
  //       title='Description'
  //       className='td-no-padding-aside'
  //     />
  //   ),
  //   enableSorting: false,
  // }),
  columnHelper.accessor('is_opensource', {
    cell: ({ row, getValue }) => {
      return (
        <Td>
          <Flex justifyContent={'center'}>
            {getValue() ? <CheckIcon /> : <XIcon />}
          </Flex>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['is_opensource']}
        textAlign='center'
      />
    ),
    enableSorting: false,
  }),
  // columnHelper.accessor('is_commercial', {
  //   cell: ({ row, getValue }) => {
  //     return (
  //       <Td>
  //         <Flex justifyContent={'center'}>
  //           {getValue() ? <CheckIcon /> : <XIcon />}
  //         </Flex>
  //       </Td>
  //     )
  //   },
  //   header: ({ column }) => (
  //     <DataTableColumnHeader
  //       column={column}
  //       title={columnHeaderNames['is_commercial']}
  //       textAlign='center'
  //     />
  //   ),
  //   enableSorting: false,
  // }),
  columnHelper.accessor('start_year', {
    cell: ({ row, getValue }) => {
      return <Td isNumeric>{getValue()}</Td>
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['start_year']}
        isNumeric
      />
    ),
    enableSorting: true,
  }),
  // columnHelper.accessor('links', {
  //   cell: ({ row, getValue }) => (
  //     <DataTableLinksColumn links={getValue()}></DataTableLinksColumn>
  //   ),
  //   header: ({ column }) => (
  //     <DataTableColumnHeader
  //       column={column}
  //       title={columnHeaderNames['links']}
  //     />
  //   ),
  //   enableSorting: false,
  // }),
]

export { columnHeaderNames, columns }
