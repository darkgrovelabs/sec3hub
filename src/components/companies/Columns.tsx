'use client'

import {
  Flex,
  IconButton,
  Link,
  Stack,
  Tag,
  Td,
  Text,
  Th,
  Tooltip,
} from '@/chakra/components'
import { TCompany } from '@/lib/companies/types'
import formatCurrency from '@/utils/formatCurrency'
import { createColumnHelper } from '@tanstack/react-table'
import {
  Check,
  FileCheck,
  GithubIcon,
  LinkIcon,
  SendIcon,
  TwitterIcon,
} from 'lucide-react'
import Image from 'next/image'

import DataTableColumnHeader from '../ui/DataTableColumnHeader'
import DataTableStickyColumn from '../ui/DataTableStickyColumn'

const columnHelper = createColumnHelper<TCompany>()

export const columnHeaderNames: { [key: string]: string } = {
  name: 'Name',
  type: 'Type',
  services: 'Services',
  total_audits: 'Audits',
  price_per_hour: 'Fee (H/USD)',
  links: 'Links',
  sample_report: 'Sample Report',
  start_year: 'Year',
}

const columns = [
  columnHelper.accessor('logo_url', {
    cell: ({ row, getValue }) => {
      return (
        <Td minW={'40px'} maxW={'40px'} pl={2} pr={0}>
          <Image
            width={120}
            height={120}
            src={getValue()}
            alt={`Company ${getValue()} Logo`}
            style={{
              objectFit: 'cover',
              width: '40px',
              height: '40px',
              borderRadius: '20px',
            }}
          />
        </Td>
      )
    },
    header: ({ column }) => <Th minW={'40px'} maxW={'40px'} pl={2} pr={0}></Th>,
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor('name', {
    cell: ({ row, getValue }) => {
      return (
        <DataTableStickyColumn>
          <Text fontWeight='bold'>{getValue()}</Text>
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
          {value === 'private' ? <Tag>Private</Tag> : <Tag>Crowdfunding</Tag>}
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Type' />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor('services', {
    cell: ({ row, getValue }) => {
      const value = getValue()

      if (!Array.isArray(value) || value.length === 0) {
        return <Td>No services</Td>
      }

      return (
        <Td>
          {value.map((service) => {
            return (
              <Flex gap={1} align={'center'} key={service}>
                <Check size={16} />
                <Text fontSize={'sm'}>{service}</Text>
              </Flex>
            )
          })}
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
  columnHelper.accessor('total_audits', {
    cell: ({ row, getValue }) => {
      return <Td isNumeric>{getValue()}</Td>
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
  columnHelper.accessor('price_per_hour', {
    cell: ({ row, getValue }) => {
      const value = getValue()
      if (!value) return <Td isNumeric>TBD</Td>

      return (
        <Td isNumeric>
          {formatCurrency(value.min)} - {formatCurrency(value.max)}
        </Td>
      )
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnHeaderNames['price_per_hour']}
        isNumeric
      />
    ),
    enableSorting: false,
  }),
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

export default columns
