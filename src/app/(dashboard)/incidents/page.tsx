import { Box } from '@/chakra/components'
import Widgets from '@/features/rekts/components/Widgets'
import { getRekts, getRektsStats } from '@/features/rekts/api'
import RektsTable from '@/features/rekts/components/RektsTable'

export const metadata = {
  title: 'Incidents',
  description:
    'Stay informed about web3 security incidents and learn from real-word examples',
}

export default async function Products() {
  const [rekts, stats] = await Promise.all([getRekts(), getRektsStats()])

  return (
    <>
      <Box mb={4}>
        <Widgets
          totalRekts={stats.totalRekts}
          totalDamage={stats.totalDamage}
          lastRekt={stats.lastRecord}
        />
      </Box>
      <RektsTable
        initialData={rekts.data}
        initialPageCount={rekts.pageCount}
      ></RektsTable>
    </>
  )
}
