'use client'

import { Card, CardBody } from '@/chakra/components'
import { TProduct } from '@/features/products/types'

import DataTable from './DataTable'
import { columns, columnHeaderNames } from './Columns'

type AuditorsTableProps = {
  initialData: TProduct[]
  initialPageCount: number
}

export default function ProductsTable(props: AuditorsTableProps) {
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
