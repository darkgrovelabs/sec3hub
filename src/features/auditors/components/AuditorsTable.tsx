'use client'

import { Card, CardBody } from '@/chakra/components'
import { TAuditor } from '@/features/auditors/types'

import DataTable from './DataTable'
import { columns, columnHeaderNames } from './Columns'

type AuditorsTableProps = {
  initialData: TAuditor[]
  initialPageCount: number
}

export default function AuditorsTable(props: AuditorsTableProps) {
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
