import { Box } from '@/chakra/components'
import CompaniesTable from '@/features/auditors/components/AuditorsTable'
import Widgets from '@/features/auditors/components/Widgets'
import { getAuditors, getAuditorsStats } from '@/features/auditors/api'

// TODO: Metadata
export const metadata = {
  title: 'Auditors',
}

//TODO: Handle errors
export default async function Auditors() {
  const [companies, stats] = await Promise.all([
    getAuditors(),
    getAuditorsStats(),
  ])

  return (
    <>
      <Box mb={4}>
        <Widgets
          totalCompanies={stats.totalAuditors}
          totalAudits={stats.totalAudits}
          lastAuditor={stats.lastRecord}
        />
      </Box>
      <CompaniesTable
        initialData={companies.data}
        initialPageCount={companies.pageCount}
      />
    </>
  )
}
