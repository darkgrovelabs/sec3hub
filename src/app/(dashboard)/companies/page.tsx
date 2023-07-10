import { Box } from '@/chakra/components'
import CompaniesTable from '@/features/companies/components/CompaniesTable'
import Widgets from '@/features/companies/components/Widgets'
import { getCompanies } from '@/features/companies/api'

// TODO:
export const metadata = {
  title: 'Audit Companies',
}

export default async function Companies() {
  // initial request
  const { data, pageCount, rowCount } = await getCompanies()

  return (
    <>
      <Box mb={4}>
        <Widgets companies={rowCount} />
      </Box>
      <CompaniesTable initialData={data} initialPageCount={pageCount} />
    </>
  )
}
