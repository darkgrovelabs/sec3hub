import { Box } from '@/chakra/components'
import AuditorsTable from '@/features/auditors/components/AuditorsTable'
import Widgets from '@/features/auditors/components/Widgets'
import { getAuditors, getAuditorsStats } from '@/features/auditors/api'

// TODO: Metadata
export const metadata = {
  title: 'Auditors',
}

//TODO: Handle errors
export default async function Auditors() {
  const [auditors, stats] = await Promise.all([
    getAuditors(),
    getAuditorsStats(),
  ])

  return (
    <>
      <Box mb={4}>
        <Widgets
          totalAuditors={stats.totalAuditors}
          totalAudits={stats.totalAudits}
          lastAuditor={stats.lastRecord}
        />
      </Box>
      <AuditorsTable
        initialData={auditors.data}
        initialPageCount={auditors.pageCount}
      />
    </>
  )
}
