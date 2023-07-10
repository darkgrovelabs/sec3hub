'use client'

import { Card, CardBody } from '@/chakra/components'
import { TCompany } from '@/features/companies/types'

import DataTable from './DataTable'
import { columns, columnHeaderNames } from './Columns'

type CompaniesTableProps = {
  initialData: TCompany[]
  initialPageCount: number
}

export default function CompaniesTable(props: CompaniesTableProps) {
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
