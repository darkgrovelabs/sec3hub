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
  Building,
  Building2,
  Check,
  FileCheck,
  User,
  Users2,
} from 'lucide-react'

import DataTableColumnHeader from '@/components/table/DataTableColumnHeader'
import DataTableLinksColumn from '@/components/table/DataTableLinksColumn'
import DataTableStickyColumn from '@/components/table/DataTableStickyColumn'
import UpVoteAuditorButton from '../../../components/UpVoteButton'
import { VOTE_SIGN_MESSAGE } from '../api'

const columnHelper = createColumnHelper<TAuditor>()

const columnHeaderNames: { [key: string]: string } = {
  name: 'Name',
  type: 'Type',
  services: 'Services',
  up_votes: 'Votes',
  total_audits: 'Audits',
  price_per_hour: 'Fee (p/hr)',
  links: 'Socials',
  sample_report: 'Sample Report',
  start_year: 'Year',
}

const columns = [
  columnHelper.accessor('up_votes', {
    cell: ({ row, getValue }) => {
      return (
        <Td className='td-no-padding-aside'>
          <UpVoteAuditorButton
            id={row.original.id}
            votes={getValue()}
            message={VOTE_SIGN_MESSAGE}
            type='auditor'
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
      const website = row.original.links['website']

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

            <Link color='blue.300' href={website} isExternal>
              <Text fontWeight='bold'>{getValue()}</Text>
            </Link>
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
  columnHelper.accessor('type', {
    cell: ({ row, getValue }) => {
      const value = getValue()
      return (
        <Td>
          <Flex align='center' gap={2}>
            {value === 'company' && <Building2 size='18' />}
            {value === 'solo' && <User size='18' />}
            {value === 'crowdsource' && <Users2 size='18' />}
            <Text textTransform={'capitalize'}> {getValue()}</Text>
          </Flex>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Type' />
    ),
    enableSorting: true,
  }),
  columnHelper.accessor('total_audits', {
    cell: ({ row, getValue }) => {
      return <Td isNumeric>{getValue()}+</Td>
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['total_audits']}
        isNumeric
      />
    ),
    enableSorting: true,
  }),
  columnHelper.accessor('services', {
    cell: ({ row, getValue }) => {
      const value = getValue()

      if (!Array.isArray(value) || value.length === 0) {
        return <Td>No services</Td>
      }

      // show only one service with icon + the rest in a tooltip
      return (
        <Td>
          <Flex gap={2} align={'center'}>
            <Text as='span'>{value[0]}</Text>
            {value.length > 1 && (
              <Tooltip
                hasArrow
                border={'lg'}
                label={
                  <Box px={1} py={2}>
                    <Stack>
                      {value.slice(1).map((service, index) => (
                        <Flex align={'center'} key={index} gap={1}>
                          <Check size={16} />
                          <Text lineHeight={1} key={index}>
                            {service}
                          </Text>
                        </Flex>
                      ))}
                    </Stack>
                  </Box>
                }
              >
                <Tag size='md' borderRadius={'full'}>
                  +{value.length - 1}
                </Tag>
              </Tooltip>
            )}
          </Flex>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['services']}
      />
    ),
    enableSorting: false,
  }),
  // columnHelper.accessor('price_per_hour', {
  //   cell: ({ row, getValue }) => {
  //     const value = getValue()
  //     if (!value) return <Td isNumeric>TBD</Td>

  //     return (
  //       <Td isNumeric>
  //         {formatCurrency(value.min)} - {formatCurrency(value.max)}
  //       </Td>
  //     )
  //   },
  //   header: ({ column }) => (
  //     <DataTableColumnHeader
  //       column={column}
  //       title={columnHeaderNames['price_per_hour']}
  //       isNumeric
  //     />
  //   ),
  //   enableSorting: false,
  // }),
  columnHelper.accessor('sample_report', {
    cell: ({ row, getValue }) => {
      const value = getValue()

      return (
        <Td textAlign={'center'}>
          <Link href={value} isExternal>
            <Tooltip
              hasArrow
              borderRadius={'lg'}
              label={`${row.original.name} Report Sample`}
            >
              <IconButton
                variant={'ghost'}
                aria-label='See Report sample'
                icon={<FileCheck />}
              />
            </Tooltip>
          </Link>
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['sample_report']}
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
    cell: ({ row, getValue }) => (
      <DataTableLinksColumn
        hideWebsite
        links={getValue()}
      ></DataTableLinksColumn>
    ),
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
