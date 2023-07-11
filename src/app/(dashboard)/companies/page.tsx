import { Box } from '@/chakra/components'
import CompaniesTable from '@/features/companies/components/CompaniesTable'
import Widgets from '@/features/companies/components/Widgets'
import { getCompanies, getCompaniesStats } from '@/features/companies/api'

// TODO: Metadata
export const metadata = {
  title: 'Audit Companies',
}

//TODO: Handle errors
export default async function Companies() {
  const [companies, stats] = await Promise.all([
    getCompanies(),
    getCompaniesStats(),
  ])

  console.log(stats)

  return (
    <>
      <Box mb={4}>
        <Widgets
          totalCompanies={stats.totalCompanies}
          totalAudits={stats.totalAudits}
          lastCompany={stats.lastRecord}
        />
      </Box>
      <CompaniesTable
        initialData={companies.data}
        initialPageCount={companies.pageCount}
      />
    </>
  )
}
