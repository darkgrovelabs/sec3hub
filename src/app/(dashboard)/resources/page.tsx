import { Box } from '@/chakra/components'
import { getResources, getResourcesStats } from '@/features/resources/api'
import Widgets from '@/features/resources/components/Widgets'
import ResourcesTable from '@/features/resources/components/ResourcesTable'

// TODO: Metadata
export const metadata = {
  title: 'Resources',
}

export default async function Products() {
  const [resources, stats] = await Promise.all([
    getResources(),
    getResourcesStats(),
  ])

  return (
    <>
      <Box mb={4}>
        <Widgets
          totalResources={stats.totalResources}
          totalCategories={stats.totalCategories}
          last={stats.lastRecord}
        />
      </Box>
      <ResourcesTable
        initialData={resources.data}
        initialPageCount={resources.pageCount}
      />
    </>
  )
}
