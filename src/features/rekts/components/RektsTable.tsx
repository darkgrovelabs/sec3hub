'use client'

import { Card, CardBody } from '@/chakra/components'

import { TRekt } from '../type'
import { columnHeaderNames, columns } from './Columns'
import DataTable from './DataTable'

type ReksTableProps = {
  initialData: TRekt[]
  initialPageCount: number
}

export default function RektsTable(props: ReksTableProps) {
  const { initialData, initialPageCount } = props

  return (
    <Card>
      <CardBody>
        <DataTable
          columnHeaderNames={columnHeaderNames}
          columns={columns}
          initialData={initialData}
          initialPageCount={initialPageCount}
        />
      </CardBody>
    </Card>
  )
}
