'use client'

import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Tag,
  Td,
  Text,
  Tooltip,
} from '@/chakra/components'
import { TAuditor } from '@/features/auditors/types'
import { createColumnHelper } from '@tanstack/react-table'
import {
  Check,
  CheckIcon,
  FileCheck,
  GithubIcon,
  LinkIcon,
  SendIcon,
  TwitterIcon,
} from 'lucide-react'

import DataTableColumnHeader from '@/components/table/DataTableColumnHeader'
import DataTableStickyColumn from '@/components/table/DataTableStickyColumn'
import UpVoteButton from '@/components/UpVoteButton'
import { VOTE_SIGN_MESSAGE } from '../api'
import { TProduct } from '../types'

const columnHelper = createColumnHelper<TProduct>()

const columnHeaderNames: { [key: string]: string } = {
  name: 'Name',
  description: 'Description',
  is_opensource: 'Open Source',
  is_commercial: 'Commercial',
  up_votes: 'Up Votes',
  // total_audits: 'Audits',
  // price_per_hour: 'Fee (p/hr)',
  links: 'Links',
  // sample_report: 'Sample Report',
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
      return (
        <DataTableStickyColumn>
          <Flex align={'center'} gap={2}>
            <Avatar
              size={'sm'}
              name={getValue()}
              src={row.original.logo_url}
              bg={'primary.400'}
              color='white'
            />
            <Text fontWeight='bold'>{getValue()}</Text>
          </Flex>
        </DataTableStickyColumn>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['name']}
        sticky
      />
    ),
    enableSorting: true,
  }),
  columnHelper.accessor('description', {
    cell: ({ row, getValue }) => {
      return (
        <Td
          textOverflow={'ellipsis'}
          whiteSpace={{ base: 'inherit', sm: 'inherit', md: 'normal' }}
          maxW={{ base: 'xs', md: 'md' }}
          fontSize={'sm'}
          overflow={'hidden'}
          className='td-no-padding-aside'
        >
          {getValue()}
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Description'
        className='td-no-padding-aside'
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor('is_opensource', {
    cell: ({ row, getValue }) => {
      return (
        <Td>
          <Flex justifyContent={'center'}>
            {getValue() ? <CheckIcon /> : null}
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
  columnHelper.accessor('is_commercial', {
    cell: ({ row, getValue }) => {
      return (
        <Td>
          <Flex justifyContent={'center'}>
            {getValue() ? <CheckIcon /> : null}
          </Flex>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['is_commercial']}
        textAlign='center'
      />
    ),
    enableSorting: false,
  }),
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
  columnHelper.accessor('links', {
    cell: ({ row, getValue }) => {
      const github = getValue()?.github
      const twitter = getValue()?.twitter
      const telegram = getValue()?.telegram
      const website = getValue()?.website

      return (
        <Td>
          <Stack direction={'row'} gap={0}>
            {github && (
              <Link href={github} isExternal>
                <Tooltip hasArrow borderRadius={'lg'} label={'Github'}>
                  <IconButton
                    size={'sm'}
                    variant={'ghost'}
                    aria-label='Github'
                    icon={<GithubIcon />}
                  />
                </Tooltip>
              </Link>
            )}
            {twitter && (
              <Link href={twitter} isExternal>
                <Tooltip hasArrow borderRadius={'lg'} label={'Twitter'}>
                  <IconButton
                    size={'sm'}
                    variant={'ghost'}
                    aria-label='Twitter'
                    icon={<TwitterIcon />}
                  />
                </Tooltip>
              </Link>
            )}
            {website && (
              <Link href={website} isExternal>
                <Tooltip hasArrow borderRadius={'lg'} label={'Website'}>
                  <IconButton
                    size={'sm'}
                    variant={'ghost'}
                    aria-label='Website'
                    icon={<LinkIcon />}
                  />
                </Tooltip>
              </Link>
            )}
            {telegram && (
              <Link href={telegram} isExternal>
                <Tooltip hasArrow borderRadius={'lg'} label={'Telegram'}>
                  <IconButton
                    size={'sm'}
                    variant={'ghost'}
                    aria-label='Telegram'
                    icon={<SendIcon />}
                  />
                </Tooltip>
              </Link>
            )}
          </Stack>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['links']}
      />
    ),
    enableSorting: false,
  }),
]

export { columnHeaderNames, columns }
