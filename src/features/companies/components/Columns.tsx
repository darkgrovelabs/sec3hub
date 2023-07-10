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
import { TCompany } from '@/features/companies/types'
import { createColumnHelper } from '@tanstack/react-table'
import {
  Check,
  FileCheck,
  GithubIcon,
  LinkIcon,
  SendIcon,
  TwitterIcon,
} from 'lucide-react'

import DataTableColumnHeader from '@/components/DataTableColumnHeader'
import DataTableStickyColumn from '@/components/DataTableStickyColumn'
import UpVoteCompanyButton from './UpVoteCompanyButton'

const columnHelper = createColumnHelper<TCompany>()

const columnHeaderNames: { [key: string]: string } = {
  name: 'Name',
  type: 'Type',
  services: 'Services',
  up_votes: 'Up Votes',
  total_audits: 'Audits',
  price_per_hour: 'Fee (p/hr)',
  links: 'Links',
  sample_report: 'Sample Report',
  start_year: 'Year',
}

const columns = [
  columnHelper.accessor('up_votes', {
    cell: ({ row, getValue }) => {
      return (
        <Td className='td-no-padding-aside'>
          <UpVoteCompanyButton companyId={row.original.id} votes={getValue()} />
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
              name={row.original.name}
              src={getValue()}
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
  columnHelper.accessor('type', {
    cell: ({ row, getValue }) => {
      const value = getValue()
      return (
        <Td>
          {value === 'private' ? (
            <Text>Private</Text>
          ) : (
            <Text>Crowdfunding</Text>
          )}
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Type' />
    ),
    enableSorting: false,
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
                  {value.length - 1}+
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
    cell: ({ row, getValue }) => {
      const github = getValue()?.github
      const twitter = getValue()?.twitter
      const telegram = getValue()?.telegram
      const website = getValue()?.website

      return (
        <Td>
          <Stack direction={'row'} gap={0}>
            {/* {github && ( */}
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
            {/* )} */}
            {/* {twitter && ( */}
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
            {/* )} */}
            {/* {website && ( */}
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
            {/* )} */}
            {/* {telegram && ( */}
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
            {/* )} */}
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
