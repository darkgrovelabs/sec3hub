import { Card, CardBody } from '@/chakra/components'
import { TResource } from '@/features/resources/types'

import DataTable from './DataTable'
import { columns, columnHeaderNames } from './Columns'

type ResourcesTableProps = {
  initialData: TResource[]
  initialPageCount: number
}

export default function ResourcesTable(props: ResourcesTableProps) {
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
